export class Coordinates {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    equals(other: Coordinates): boolean {
        return this.x === other.x && this.y === other.y;
    }

    multiply(n: number) {
        return new Coordinates(this.x * n, this.y * n);
    }

    static add(a: Coordinates, b: Coordinates) {
        return new Coordinates(a.x + b.x, a.y + b.y);
    }

    static subtract(a: Coordinates, b: Coordinates) {
        return new Coordinates(a.x - b.x, a.y - b.y);
    }

    static up = new this(0, 1);
    static down = new this(0, -1);
    static left = new this(-1, 0);
    static right = new this(1, 0);

    static files = [Coordinates.up, Coordinates.down];
    static ranks = [Coordinates.left, Coordinates.right];
    static diagonals = [Coordinates.files.flatMap(file => Coordinates.ranks.flatMap(rank => Coordinates.add(rank, file)))].flat();
}