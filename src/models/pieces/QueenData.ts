import {PieceData} from "./PieceData.ts";
import {Colors} from "../Colors.ts";
import whiteLogo from "../../assets/pieces/wQ.png";
import blackLogo from "../../assets/pieces/bQ.png";
import {CellData} from "../CellData.ts";

export class QueenData extends PieceData {
    constructor(color: Colors, currentCell: CellData) {
        super(color, currentCell);

        this.logo = color === Colors.WHITE ? whiteLogo : blackLogo;
    }
}