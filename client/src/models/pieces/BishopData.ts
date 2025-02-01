import {PieceData} from "./PieceData.ts";
import {Colors} from "../Colors.ts";
import whiteLogo from "../../assets/pieces/wB.png";
import blackLogo from "../../assets/pieces/bB.png";
import {Coordinates} from "../Coordinates.ts";
import {BoardData} from "../BoardData.ts";
import {SquareData} from "../SquareData.ts";
import {PieceType} from "./PieceType.tsx";

export class BishopData extends PieceData {
    constructor(color: Colors, coordinates: Coordinates) {
        super(color, coordinates);

        this.logo = color === Colors.WHITE ? whiteLogo : blackLogo;
        this.type = PieceType.BISHOP;
    }

    getAvailableSquares(board: BoardData): SquareData[] {
        return this.getMovesInDirection(board, Coordinates.diagonals);
    }
}