import {Colors} from "../Colors.ts";
import Logo from "../../assets/pieces/wP.png";
import {SquareData} from "../SquareData.ts";
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
    getAvailableSquares(board : BoardData): SquareData[] {
        return [];
    }

    isPossibleMove(board: BoardData, coords: Coordinates) {
        return this.getAvailableSquares(board).find(square => square.coordinates.equals(coords));
    }

    move(board : BoardData, coords : Coordinates) {
        board.getSquare(this.coordinates).piece = null;
        this.coordinates = coords;
        board.getSquare(this.coordinates).piece = this;
    }
}