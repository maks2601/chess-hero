import {Cell} from "./Cell";
import {Colors} from "./Colors";

export class Board {
    readonly width: number;
    readonly height: number;
    readonly cells: Cell[][];

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
        this.cells = [];

        for (let i = 0; i < height; i++) {
            const row: Cell[] = [];
            for (let j = 0; j < width; j++) {
                const color = j % 2 === 0 ? Colors.BLACK : Colors.WHITE;
                row.push(new Cell(i, j, color));
            }
            this.cells.push(row);
        }
    }
}