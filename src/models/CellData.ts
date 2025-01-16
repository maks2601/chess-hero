import {Colors} from "./Colors";

export class CellData {
    readonly x: number;
    readonly y: number;
    readonly color: Colors;

    constructor(x: number, y: number, color: Colors) {
        this.x = x;
        this.y = y;
        this.color = color;
    }
}