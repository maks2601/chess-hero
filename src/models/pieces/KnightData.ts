import {PieceData} from "./PieceData.ts";
import {Colors} from "../Colors.ts";
import whiteLogo from "../../assets/pieces/wN.png";
import blackLogo from "../../assets/pieces/bN.png";
import {CellData} from "../CellData.ts";
import {Coordinates} from "../Coordinates.ts";
import {BoardData} from "../BoardData.ts";

export class KnightData extends PieceData {
    constructor(color: Colors, coordinates: Coordinates) {
        super(color, coordinates);

        this.logo = color === Colors.WHITE ? whiteLogo : blackLogo;
    }

    getAvailableCells(board: BoardData): CellData[] {
        return super.getAvailableCells(board);
    }
}