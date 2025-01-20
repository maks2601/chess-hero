import {PieceData} from "./PieceData.ts";
import {Colors} from "../Colors.ts";
import whiteLogo from "../../assets/pieces/wP.png";
import blackLogo from "../../assets/pieces/bP.png";

export class PawnData extends PieceData {
    constructor(color: Colors) {
        super(color);

        this.logo = color === Colors.WHITE ? whiteLogo : blackLogo;
    }
}