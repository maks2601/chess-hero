import {PieceData} from "./PieceData.ts";
import {Colors} from "../Colors.ts";
import whiteLogo from "../../assets/pieces/wB.png";
import blackLogo from "../../assets/pieces/bB.png";
import {Coordinates} from "../Coordinates.ts";
import {BoardData} from "../BoardData.ts";
import {SquareData} from "../SquareData.ts";

export class BishopData extends PieceData {
    constructor(color: Colors, coordinates: Coordinates) {
        super(color, coordinates);

        this.logo = color === Colors.WHITE ? whiteLogo : blackLogo;
    }

    getAvailableCells(board: BoardData): SquareData[] {
        return super.getAvailableCells(board);
    }
}