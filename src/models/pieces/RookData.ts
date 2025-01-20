import {PieceData} from "./PieceData.ts";
import {Colors} from "../Colors.ts";
import whiteLogo from "../../assets/pieces/wR.png";
import blackLogo from "../../assets/pieces/bR.png";

export class RookData extends PieceData {
    constructor(color: Colors) {
        super(color);

        this.logo = color === Colors.WHITE ? whiteLogo : blackLogo;
    }
}