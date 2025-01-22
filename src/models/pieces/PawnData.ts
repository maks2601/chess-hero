import {PieceData} from "./PieceData.ts";
import {Colors} from "../Colors.ts";
import whiteLogo from "../../assets/pieces/wP.png";
import blackLogo from "../../assets/pieces/bP.png";
import {CellData} from "../CellData.ts";
import {BoardData} from "../BoardData.ts";
import {Coordinates} from "../Coordinates.ts";

export class PawnData extends PieceData {
    constructor(color: Colors, coordinates: Coordinates) {
        super(color, coordinates);

        this.logo = color === Colors.WHITE ? whiteLogo : blackLogo;
    }

    getAvailableCells(board: BoardData): CellData[] {
        const cells = super.getAvailableCells(board);

        const possibleSquares = [new Coordinates(0, this.getDirection())];

        if (this.isStartPosition(board)) {
            possibleSquares.push(new Coordinates(0, this.getDirection() * 2));
        }

        possibleSquares.forEach(coordinates => {
            cells.push(board.getCell(Coordinates.add(coordinates, this.coordinates)));
        })

        return cells;
    }

    getDirection() {
        return this.color === Colors.WHITE ? 1 : -1;
    }

    isStartPosition(board: BoardData): boolean {
        if (this.color === Colors.WHITE) {
            return this.coordinates.y === 1;
        }

        return this.coordinates.y === board.height - 2;
    }
}