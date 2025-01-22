import {Colors} from "../Colors.ts";
import Logo from "../../assets/pieces/wP.png";
import {CellData} from "../CellData.ts";
import {BoardData} from "../BoardData.ts";

export class PieceData {
    color: Colors;
    logo: typeof Logo;
    currentCell : CellData;

    constructor(color: Colors, currentCell : CellData) {
        this.color = color;
        this.logo = Logo;
        this.currentCell = currentCell;
    }

    getAvailableCells(board : BoardData): CellData[] {
        return [];
    }
}