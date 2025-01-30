import "./PhaserGame";
import {TQLBuilder} from "./test/TqlBuilder.ts";


// Disable scrolling
document.body.style.overflow = 'hidden';

// // Prevent touch gestures on touch devices
// document.addEventListener(
//     'touchmove',
//     (event) => {
//         event.preventDefault(); // Prevent scrolling
//     },
//     { passive: false } // Allow preventDefault to work
// );

// Disable the context menu (right-click and long-press)
document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
});

// // Prevent long-press actions like text selection or image saving
// document.addEventListener('touchstart', (event) => {
//     const target = event.target;
//
//     // Check if the target is a DOM element and its tag name
//     if (target instanceof HTMLElement && target.tagName === 'CANVAS') {
//         event.preventDefault(); // Ensure interaction is limited to canvas
//     }
// }, { passive: false });


console.log('version', '1.0.2');



type MySchema = {
    Amount: number;
    Status: 'Approved' | 'Pending' | 'Rejected';
    CreatedDate: Date; // ISO date
    IsActive: boolean;
    Roles: Role[]
    Home: Address;
    Friends: string[];
};

type Address = {
    Street: string;
}

type Role = {
    Name: string;
    Admins: string[];
}

let tql = new TQLBuilder<MySchema>()
    .eq("Home.Street", '12')
    .or(x => x.eq("Amount", 123).lt("Amount", 123));

console.log('tql: ' + tql.build());
// CreatedDate == "2025-01-29T09:26:50.028Z" AND (Amount == 123 OR Amount < 123)

tql = new TQLBuilder<MySchema>()
    .or(builder =>
        builder
            .and(left => left.eq("Status", 'Approved').lt("Amount", 123))
            .and(right => right.eq("Status", 'Pending').gt("Amount", 123))
    )
tql.lt("Amount", 123)

console.log('tql: ' + tql.build());
// ((Status == "Approved" AND Amount < 123) OR (Status == "Pending" AND Amount > 123)) AND CreatedDate < "2025-01-29T09:27:58.242Z"


tql = new TQLBuilder<MySchema>()
    .neq("Status", "Approved")
    .any("Friends", builder => builder.primitive.eq("Approver"))
    .any("Roles", builder => builder.contains("Name", "Approver"));

console.log('tql: ' + tql.build());


tql = new TQLBuilder<MySchema>()
    .startsWith("Status", "Approved");

console.log('tql: ' + tql.build());

tql = new TQLBuilder<MySchema>()
    .and(x => x.eq("Home.Street", "123"))
    .and(x => x.eq("Home.Street", "123"));

console.log('tql: ' + tql.build());

