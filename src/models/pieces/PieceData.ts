import {Colors} from "../Colors.ts";
import Logo from "../../assets/pawn-white.png";

export class PieceData {
    color: Colors;
    logo: typeof Logo;

    constructor(color: Colors) {
        this.color = color;
        this.logo = Logo;
    }
}