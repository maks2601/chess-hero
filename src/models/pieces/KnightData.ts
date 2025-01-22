import {PieceData} from "./PieceData.ts";
import {Colors} from "../Colors.ts";
import whiteLogo from "../../assets/pieces/wN.png";
import blackLogo from "../../assets/pieces/bN.png";
import {CellData} from "../CellData.ts";

export class KnightData extends PieceData {
    constructor(color: Colors, currentCell: CellData) {
        super(color, currentCell);

        this.logo = color === Colors.WHITE ? whiteLogo : blackLogo;
    }
}