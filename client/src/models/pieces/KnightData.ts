import {PieceData} from "./PieceData.ts";
import {Colors} from "../Colors.ts";
import whiteLogo from "../../assets/pieces/wN.png";
import blackLogo from "../../assets/pieces/bN.png";
import {SquareData} from "../SquareData.ts";
import {Coordinates} from "../Coordinates.ts";
import {BoardData} from "../BoardData.ts";
import {PieceType} from "./PieceType.tsx";

export class KnightData extends PieceData {
    constructor(color: Colors, coordinates: Coordinates) {
        super(color, coordinates);

        this.logo = color === Colors.WHITE ? whiteLogo : blackLogo;
        this.type = PieceType.KNIGHT;
    }

    getAvailableSquares(board: BoardData): SquareData[] {
        const squares = super.getAvailableSquares(board);

        const possibleJumps = [Coordinates.files.flatMap(file => Coordinates.ranks.flatMap(rank => [Coordinates.add(rank.multiply(2), file), Coordinates.add(rank, file.multiply(2))]))].flat();

        possibleJumps.forEach(jump => {
            const square = board.getSquare(Coordinates.add(this.coordinates, jump));
            if (square && (!square.piece || square.piece.color !== this.color)) {
                squares.push(square);
            }
        })

        return squares;
    }
}