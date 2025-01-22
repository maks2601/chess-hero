import {Colors} from "../Colors.ts";
import Logo from "../../assets/pieces/wP.png";
import {CellData} from "../CellData.ts";
import {BoardData} from "../BoardData.ts";
import {Coordinates} from "../Coordinates.ts";

export class PieceData {
    color: Colors;
    logo: typeof Logo;
    coordinates : Coordinates;

    constructor(color: Colors, coordinates : Coordinates) {
        this.color = color;
        this.logo = Logo;
        this.coordinates = coordinates;
    }

    // @ts-ignore
    getAvailableCells(board : BoardData): CellData[] {
        return [];
    }
}