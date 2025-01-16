import {CellData} from "./CellData.ts";
import {Colors} from "./Colors";

export class BoardData {
    readonly width: number;
    readonly height: number;
    readonly cells: CellData[][];

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
        this.cells = [];

        for (let i = 0; i < height; i++) {
            const row: CellData[] = [];
            for (let j = 0; j < width; j++) {
                const color = (i + j) % 2 === 0 ? Colors.BLACK : Colors.WHITE;
                row.push(new CellData(i, j, color));
            }
            this.cells.push(row);
        }
    }
}