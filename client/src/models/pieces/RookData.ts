import {PieceData} from "./PieceData.ts";
import {Colors} from "../Colors.ts";
import whiteLogo from "../../assets/pieces/wR.png";
import blackLogo from "../../assets/pieces/bR.png";
import {SquareData} from "../SquareData.ts";
import {Coordinates} from "../Coordinates.ts";
import {BoardData} from "../BoardData.ts";
import {PieceType} from "./PieceType.tsx";

export class RookData extends PieceData {
    constructor(color: Colors, coordinates: Coordinates) {
        super(color, coordinates);

        this.logo = color === Colors.WHITE ? whiteLogo : blackLogo;
        this.type = PieceType.ROOK;
    }

    getAvailableSquares(board: BoardData): SquareData[] {
        const possibleDirections = [Coordinates.files, Coordinates.ranks].flat();
        return this.getMovesInDirection(board, possibleDirections);
    }
}