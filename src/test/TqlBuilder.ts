export type ComparisonOperator = "==" | "!=" | "<" | "<=" | ">" | ">=" | "IN" | "NOT_IN" | "CONTAINS" | "ENDS_WITH" | "STARTS_WITH";
export type LogicalOperator = 'AND' | 'OR';
export type NestedOperator = 'ANY';

// Ensure valid value types for each field
type NestedKey<T> = T extends object
    ? T extends Date ? string : {
        [K in keyof T]: K extends string | number | symbol
            ? `${K & string}` | `${K & string}.${NestedKey<T[K]>}`
            : never;
    }[keyof T]
    : never;

type NestedKeyOfType<T, TType> = T extends object
    ? T extends Date
        ? (T extends TType ? string : never) // If T is Date, include only if it matches TType
        : {
            [K in keyof T]: T[K] extends TType
                ? `${K & string}` // If field matches TType, include it
                : T[K] extends object
                    ? `${K & string}.${NestedKeyOfType<T[K], TType>}` // Recursively check nested fields
                    : never;
        }[keyof T]
    : never;


type ExtractFieldType<TSchema, Field extends string> =
    Field extends `${infer Prefix}.${infer Rest}`
        ? Prefix extends keyof TSchema
            ? ExtractFieldType<TSchema[Prefix], Rest>
            : never
        : Field extends keyof TSchema
            ? TSchema[Field]
            : never;

// Types remain the same
export type TQLExpression =
    | LogicalExpression
    | NestedExpression
    | ComparisonExpression;

export interface ComparisonExpression {
    field: string;
    operator: ComparisonOperator;
    value: any;
}

export interface LogicalExpression {
    operator: LogicalOperator;
    conditions: TQLExpression[];
}

export interface NestedExpression {
    field: string;
    operator: "ANY";
    conditions: TQLExpression; // Nested expression for the array element
}

class BaseTqlBuilder {
    root: LogicalExpression;

    constructor(root: LogicalExpression) {
        this.root = root;
    }
}

export class TQLBuilder<TSchema> extends BaseTqlBuilder{

    constructor() {
        super({
            operator: "AND",
            conditions: []
        });
    }

    eq<Field extends NestedKey<TSchema>>(field: Field, value: ExtractFieldType<TSchema, Field>) {
        return this.addCondition({ field, operator: '==', value: value });
    }

    neq<Field extends NestedKey<TSchema>>(field: Field, value: ExtractFieldType<TSchema, Field>): this {
        return this.addCondition({ field, operator: '!=', value: value});
    }

    lt<Field extends NestedKeyOfType<TSchema, number | Date>>(
        field: Field,
        value: ExtractFieldType<TSchema, Field> extends number | Date ? ExtractFieldType<TSchema, Field> : never
    ): this {
        return this.addCondition({ field, operator: '<', value: value});
    }

    lte<Field extends NestedKey<TSchema>>(
        field: Field,
        value: ExtractFieldType<TSchema, Field> extends number | Date ? ExtractFieldType<TSchema, Field> : never
    ): this {
        return this.addCondition({ field, operator: '<=', value: value});
    }

    gt<Field extends NestedKey<TSchema>>(
        field: Field,
        value: ExtractFieldType<TSchema, Field> extends number | Date ? ExtractFieldType<TSchema, Field> : never
    ): this {
        return this.addCondition({ field, operator: '>', value: value});
    }

    gte<Field extends NestedKey<TSchema>>(
        field: Field,
        value: ExtractFieldType<TSchema, Field> extends number | Date ? ExtractFieldType<TSchema, Field> : never
    ): this {
        return this.addCondition({ field, operator: '>=', value: value});
    }

    in<Field extends NestedKey<TSchema>>(field: Field, values: ExtractFieldType<TSchema, Field>[]): this {
        return this.addCondition({ field, operator: 'IN', value: values});
    }

    notIn<Field extends NestedKey<TSchema>>(field: Field, values: ExtractFieldType<TSchema, Field>[]): this {
        return this.addCondition({ field, operator: 'NOT_IN', value: values});
    }

    contains<Field extends NestedKey<TSchema>>(
        field: Field,
        value: ExtractFieldType<TSchema, Field> extends string ? ExtractFieldType<TSchema, Field> : never
    ): this {
        return this.addCondition({ field, operator: 'CONTAINS', value: value});
    }

    endsWith<Field extends NestedKey<TSchema>>(
        field: Field,
        value: ExtractFieldType<TSchema, Field> extends string ? ExtractFieldType<TSchema, Field> : never
    ): this {
        return this.addCondition({ field, operator: 'ENDS_WITH', value: value});
    }

    startsWith<Field extends NestedKey<TSchema>>(
        field: Field,
        value: ExtractFieldType<TSchema, Field> extends string ? ExtractFieldType<TSchema, Field> : never
    ): this {
        return this.addCondition({ field, operator: 'STARTS_WITH', value: value});
    }

    and(callback: (b: TQLBuilder<TSchema>) => void): this {
        const subBuilder = new TQLBuilder<TSchema>();
        callback(subBuilder);
        return this.addCondition(subBuilder.root);
    }

    or(callback: (b: TQLBuilder<TSchema>) => void): this {
        const subBuilder = new TQLBuilder<TSchema>();
        callback(subBuilder);
        const root = subBuilder.root
        root.operator = 'OR';
        return this.addCondition(root);
    }

    any<Field extends NestedKey<TSchema>>(
        field: Field,
        callback: (b: NestedTQLBuilder<ExtractFieldType<TSchema, Field> extends (infer U)[] ? U : never>) => void
    ): this {
        const subBuilder = new NestedTQLBuilder<ExtractFieldType<TSchema, Field> extends (infer U)[] ? U : never>();
        callback(subBuilder);
        return this.addCondition({
            field,
            operator: "ANY",
            conditions: subBuilder.root,
        });
    }

    addCondition(
        comparison: TQLExpression
    ): this {
        this.root.conditions.push(comparison)
        return this;
    }

    build(): string {
        const tqlString = new TQLFormatter().format(this.root);
        return tqlString.replace(/^\((.*)\)$/, '$1');
    }
}


export class TQLFormatter {

    nested: string[] = [];

    private formatValue(value: unknown): string {
        if (typeof value === 'string') return `"${value}"`;
        if (Array.isArray(value)) return `${value.map(v => this.formatValue(v)).join(", ")}`;
        if (value instanceof Date) return `"${value.toISOString()}"`;
        return String(value);
    }

    format(expression: TQLExpression): string {
        if (this.isComparisonExpression(expression)) {
            return this.formatComparison(expression);
        } else if (this.isLogicalExpression(expression)) {
            return this.formatLogical(expression);
        } else if (this.isNestedExpression(expression)) {
            return this.formatNested(expression);
        }
    }

    private formatLogical(expression: LogicalExpression) {
        const formattedConditions = expression.conditions.map(cond => this.format(cond));
        const joinedConditions = formattedConditions.join(` ${expression.operator} `);
        return `(${joinedConditions})`;
    }

    private formatComparison(expression: ComparisonExpression): string {
        const { field, operator, value } = expression;

        switch (operator) {
            case "IN":
                return `${this.resolveField(field)} IN (${this.formatValue(value)})`;
            case "NOT_IN":
                return `!(${this.resolveField(field)} IN (${this.formatValue(value)}))`;
            case "CONTAINS":
                return `${this.resolveField(field)}.contains(${this.formatValue(value)})`;
            case "STARTS_WITH":
                return `${this.resolveField(field)}.startsWith(${this.formatValue(value)})`;
            case "ENDS_WITH":
                return `${this.resolveField(field)}.endsWith(${this.formatValue(value)})`;
            default:
               return `${this.resolveField(field)} ${operator} ${this.formatValue(value)}`;
        }
    }

    private formatNested(expression: NestedExpression) {
        const nestedVariable = `x_${this.nested.length.toString()}`;
        this.nested.unshift(nestedVariable);
        const nestedFormat = this.format(expression.conditions)
            .replace(/^\((.*)\)$/, '$1');
        this.nested.shift();

        return `${this.resolveField(expression.field)}.any(${nestedVariable} => ${nestedFormat})`;
    }

    private resolveField(field: string) {
        const fieldString = String(field);
        if (this.nested.length) {
            if (field == null) {
                return `${this.nested[0]}`;
            }
            return `${this.nested[0]}.${fieldString}`;
        }
        return fieldString;
    }

    private isComparisonExpression(expression: TQLExpression): expression is ComparisonExpression {
        return ["==", "!=", "<", "<=", ">", ">=", "IN", "NOT_IN", "STARTS_WITH", "ENDS_WITH", "CONTAINS"].includes(expression.operator);
    }

    private isLogicalExpression(expression: TQLExpression): expression is LogicalExpression {
        return ["AND", "OR"].includes(expression.operator);
    }

    private isNestedExpression(expression: TQLExpression): expression is NestedExpression {
        return ["ANY"].includes(expression.operator);
    }
}

class PrimitiveTQLBuilder<TPrimitive> extends BaseTqlBuilder {
    constructor(root: LogicalExpression) {
        super(root);
    }

    eq(value: TPrimitive) {
        return this.addCondition({ field: null, operator: '==', value: value });
    }

    neq(value: TPrimitive): this {
        return this.addCondition({ field: null, operator: '!=', value: value});
    }

    lt(
        value: TPrimitive
    ): this {
        return this.addCondition({ field: null, operator: '<', value: value});
    }

    lte(
        value: TPrimitive
    ): this {
        return this.addCondition({ field: null, operator: '<=', value: value});
    }

    gt(
        value: TPrimitive
    ): this {
        return this.addCondition({ field: null, operator: '>', value: value});
    }

    gte(
        value: TPrimitive
    ): this {
        return this.addCondition({ field: null, operator: '>=', value: value});
    }

    in(values: TPrimitive[]): this {
        return this.addCondition({ field: null, operator: 'IN', value: values});
    }

    notIn(values: TPrimitive[]): this {
        return this.addCondition({ field: null, operator: 'NOT_IN', value: values});
    }

    and(callback: (b: PrimitiveTQLBuilder<TPrimitive>) => void): this {
        const subBuilder = new PrimitiveTQLBuilder<TPrimitive>({
            operator: 'AND',
            conditions: []
        });
        callback(subBuilder);
        return this.addCondition(subBuilder.root);
    }

    or(callback: (b: PrimitiveTQLBuilder<TPrimitive>) => void): this {
        const subBuilder = new PrimitiveTQLBuilder<TPrimitive>({
            operator: 'OR',
            conditions: []
        });
        callback(subBuilder);
        return this.addCondition(subBuilder.root);
    }

    private addCondition(
        comparison: TQLExpression
    ): this {
        this.root.conditions.push(comparison)
        return this;
    }
}

class NestedTQLBuilder<TSchema> extends TQLBuilder<TSchema>{
    get primitive() {
        return new PrimitiveTQLBuilder<TSchema>(this.root);
    }
}

