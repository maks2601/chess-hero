import {PieceData} from "./PieceData.ts";
import {Colors} from "../Colors.ts";
import whiteLogo from "../../assets/pieces/wK.png";
import blackLogo from "../../assets/pieces/bK.png";
import {SquareData} from "../SquareData.ts";
import {BoardData} from "../BoardData.ts";
import {Coordinates} from "../Coordinates.ts";

export class KingData extends PieceData {
    constructor(color: Colors, coordinates: Coordinates) {
        super(color, coordinates);

        this.logo = color === Colors.WHITE ? whiteLogo : blackLogo;
    }

    getAvailableSquares(board: BoardData): SquareData[] {
        return super.getAvailableSquares(board);
    }
}