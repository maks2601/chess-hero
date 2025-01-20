import {PieceData} from "./PieceData.ts";
import {Colors} from "../Colors.ts";
import whiteLogo from "../../assets/pieces/wB.png";
import blackLogo from "../../assets/pieces/bB.png";

export class BishopData extends PieceData {
    constructor(color: Colors) {
        super(color);

        this.logo = color === Colors.WHITE ? whiteLogo : blackLogo;
    }
}