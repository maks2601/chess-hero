export class Coordinates {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    static add(a: Coordinates, b: Coordinates) {
        return new Coordinates(a.x + b.x, a.y + b.y);
    }

    static subtract(a: Coordinates, b: Coordinates) {
        return new Coordinates(a.x - b.x, a.y - b.y);
    }
}