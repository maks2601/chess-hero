import {PieceData} from "./PieceData.ts";
import {Colors} from "../Colors.ts";
import whiteLogo from "../../assets/pieces/wQ.png";
import blackLogo from "../../assets/pieces/bQ.png";

export class QueenData extends PieceData {
    constructor(color: Colors) {
        super(color);

        this.logo = color === Colors.WHITE ? whiteLogo : blackLogo;
    }
}