import {Colors} from "./Colors";
import {PieceData} from "./pieces/PieceData.ts";

export class CellData {
    readonly x: number;
    readonly y: number;
    readonly color: Colors;
    readonly id: string;
    piece: PieceData | null;

    constructor(x: number, y: number, color: Colors) {
        this.x = x;
        this.y = y;
        this.id = `${x}-${y}`;
        this.color = color;
        this.piece = null;
    }

    setFigure(figure: PieceData) {
        this.piece = figure;
    }
}