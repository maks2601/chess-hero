import {PieceData} from "./PieceData.ts";
import {Colors} from "../Colors.ts";
import whiteLogo from "../../assets/pieces/wK.png";
import blackLogo from "../../assets/pieces/bK.png";
import {CellData} from "../CellData.ts";

export class KingData extends PieceData {
    constructor(color: Colors, currentCell: CellData) {
        super(color, currentCell);

        this.logo = color === Colors.WHITE ? whiteLogo : blackLogo;
    }
}