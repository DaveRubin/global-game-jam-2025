class PlayerPool {
    private players: any[];
    constructor() {
        // Initialize the player pool
        this.players = [];
        this.resetAndShuffle();
    }

    // Resets and shuffles the player pool
    resetAndShuffle() {
        this.players = ['p1', 'p2', 'p3', 'p4'];
        this.shuffle(this.players);
    }

    // Fisher-Yates shuffle algorithm
    shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Gets a random player
    getRandomPlayer() {
        if (this.players.length === 0) {
            this.resetAndShuffle();
        }
        return this.players.pop();
    }
}

// Singleton instance
const playerPool = new PlayerPool();
export function getRandomPlayer() {
    return playerPool.getRandomPlayer();
}