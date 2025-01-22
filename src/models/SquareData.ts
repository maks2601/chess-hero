import {Colors} from "./Colors";
import {PieceData} from "./pieces/PieceData.ts";
import {Coordinates} from "./Coordinates.ts";

export class SquareData {
    readonly coordinates: Coordinates;
    readonly color: Colors;
    readonly id: string;
    piece: PieceData | null;
    isAvailable: boolean;

    constructor(coordinates: Coordinates, color: Colors) {
        this.coordinates = coordinates;
        this.id = `${coordinates.x}-${coordinates.y}`;
        this.color = color;
        this.piece = null;
        this.isAvailable = false;
    }

    setFigure(figure: PieceData) {
        this.piece = figure;
    }

    isFree(): boolean {
        return this.piece === null;
    }
}