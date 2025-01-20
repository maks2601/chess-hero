import {Colors} from "../Colors.ts";
import Logo from "../../assets/pieces/wP.png";

export class PieceData {
    color: Colors;
    logo: typeof Logo;

    constructor(color: Colors) {
        this.color = color;
        this.logo = Logo;
    }
}