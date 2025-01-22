import {PieceData} from "./PieceData.ts";
import {Colors} from "../Colors.ts";
import whiteLogo from "../../assets/pieces/wR.png";
import blackLogo from "../../assets/pieces/bR.png";
import {CellData} from "../CellData.ts";

export class RookData extends PieceData {
    constructor(color: Colors, currentCell: CellData) {
        super(color, currentCell);

        this.logo = color === Colors.WHITE ? whiteLogo : blackLogo;
    }
}