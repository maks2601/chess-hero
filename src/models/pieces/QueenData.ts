import {PieceData} from "./PieceData.ts";
import {Colors} from "../Colors.ts";
import whiteLogo from "../../assets/pieces/wQ.png";
import blackLogo from "../../assets/pieces/bQ.png";
import {SquareData} from "../SquareData.ts";
import {Coordinates} from "../Coordinates.ts";
import {BoardData} from "../BoardData.ts";

export class QueenData extends PieceData {
    constructor(color: Colors, coordinates: Coordinates) {
        super(color, coordinates);

        this.logo = color === Colors.WHITE ? whiteLogo : blackLogo;
    }

    getAvailableSquares(board: BoardData): SquareData[] {
        return super.getAvailableSquares(board);
    }
}