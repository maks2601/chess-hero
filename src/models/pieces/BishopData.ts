import {PieceData} from "./PieceData.ts";
import {Colors} from "../Colors.ts";
import whiteLogo from "../../assets/pieces/wB.png";
import blackLogo from "../../assets/pieces/bB.png";
import {CellData} from "../CellData.ts";

export class BishopData extends PieceData {
    constructor(color: Colors, currentCell: CellData) {
        super(color, currentCell);

        this.logo = color === Colors.WHITE ? whiteLogo : blackLogo;
    }
}