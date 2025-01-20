import {PieceData} from "./PieceData.ts";
import {Colors} from "../Colors.ts";
import whiteLogo from "../../assets/pieces/wK.png";
import blackLogo from "../../assets/pieces/bK.png";

export class KingData extends PieceData {
    constructor(color: Colors) {
        super(color);

        this.logo = color === Colors.WHITE ? whiteLogo : blackLogo;
    }
}