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
}