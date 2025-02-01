import {PieceData} from "./PieceData.ts";
import {Colors} from "../Colors.ts";
import whiteLogo from "../../assets/pieces/wP.png";
import blackLogo from "../../assets/pieces/bP.png";
import {SquareData} from "../SquareData.ts";
import {BoardData} from "../BoardData.ts";
import {Coordinates} from "../Coordinates.ts";
import {PieceType} from "./PieceType.tsx";

export class PawnData extends PieceData {
    constructor(color: Colors, coordinates: Coordinates) {
        super(color, coordinates);

        this.logo = color === Colors.WHITE ? whiteLogo : blackLogo;
        this.type = PieceType.PAWN;
    }

    getAvailableSquares(board: BoardData): SquareData[] {
        const squares = super.getAvailableSquares(board);

        const direction = this.getDirection();
        let nextSquare = board.getSquare(Coordinates.add(this.coordinates, direction));

        if (nextSquare && !nextSquare.piece) {
            squares.push(nextSquare);

            if (this.isStartPosition(board)) {
                nextSquare = board.getSquare(Coordinates.add(this.coordinates, direction.multiply(2)));
                if (nextSquare && !nextSquare.piece) {
                    squares.push(nextSquare);
                }
            }
        }

        return squares;
    }

    getDirection() {
        return this.color === Colors.WHITE ? Coordinates.up : Coordinates.down;
    }

    isStartPosition(board: BoardData): boolean {
        if (this.color === Colors.WHITE) {
            return this.coordinates.y === 1;
        }

        return this.coordinates.y === board.height - 2;
    }
}