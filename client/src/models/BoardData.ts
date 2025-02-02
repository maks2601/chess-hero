import {SquareData} from "./SquareData.ts";
import {Colors} from "./Colors";
import {PawnData} from "./pieces/PawnData.ts";
import {KingData} from "./pieces/KingData.ts";
import {KnightData} from "./pieces/KnightData.ts";
import {RookData} from "./pieces/RookData.ts";
import {BishopData} from "./pieces/BishopData.ts";
import {QueenData} from "./pieces/QueenData.ts";
import {Coordinates} from "./Coordinates.ts";
import {createPiece} from "./pieces/PieceFactory.tsx";
import {SimplifiedPiece} from "./pieces/PieceData.ts";
import {Move} from "./Move.ts";

export class BoardData {
    readonly width: number;
    readonly height: number;
    squares: SquareData[][];
    playingWhite: boolean;
    sideToMove: Colors;
    moves: Move[];

    constructor(width: number, height: number, playingWhite: boolean) {
        this.width = width;
        this.height = height;
        this.squares = [];
        this.playingWhite = playingWhite;
        this.sideToMove = Colors.WHITE;
        this.moves = [];
        this.createBoard(width, height)
    }

    createBoard(width: number, height: number) {
        this.squares = Array.from({length: width}, () => Array(height).fill(null));

        for (let i = 0; i < width; i++) {
            for (let j = 0; j < height; j++) {
                const color = (i + j) % 2 === 0 ? Colors.BLACK : Colors.WHITE;
                this.squares[i][j] = new SquareData(new Coordinates(i, j), color);
            }
        }
    }

    getSquare(coordinates: Coordinates) {
        if (coordinates.x >= 0 && coordinates.x < this.width && coordinates.y >= 0 && coordinates.y <= this.height) {
            return this.squares[coordinates.x][coordinates.y];
        }

        return null;
    }

    fillBoardDefault() {
        for (let i = 0; i < this.width; i++) {
            for (let j = 0; j < this.height; j++) {
                const square = this.squares[i][j];
                if (j === 1) {
                    square.setPiece(new PawnData(Colors.WHITE, square.coordinates));
                } else if (j === this.height - 2) {
                    square.setPiece(new PawnData(Colors.BLACK, square.coordinates));
                } else if (j === 0 || j === this.height - 1) {
                    const pieceColor = j === 0 ? Colors.WHITE : Colors.BLACK;
                    switch (i) {
                        case 4:
                            square.setPiece(new KingData(pieceColor, square.coordinates));
                            break;
                        case 3:
                            square.setPiece(new QueenData(pieceColor, square.coordinates));
                            break;
                        case 0:
                        case this.width - 1:
                            square.setPiece(new RookData(pieceColor, square.coordinates));
                            break;
                        case 1:
                        case this.width - 2:
                            square.setPiece(new KnightData(pieceColor, square.coordinates));
                            break;
                        case 2:
                        case this.width - 3:
                            square.setPiece(new BishopData(pieceColor, square.coordinates));
                            break;
                    }
                }
            }
        }
    }

    fillBoard(pieces: SimplifiedPiece[]) {
        pieces.forEach((piece) => {
            const square = this.getSquare(piece.coordinates);
            if (square) {
                square.setPiece(createPiece(piece));
            }
        })
    }

    switchTurn() {
        this.sideToMove = this.sideToMove === Colors.WHITE ? Colors.BLACK : Colors.WHITE;
    }

    addMove(move: Move) {
        this.moves.push(move);
    }

    syncMoves(moves: Move[]): boolean {
        let updated = false;

        for (let i = this.moves.length; i < moves.length; i++) {
            const move = moves[i];
            this.moves.push(move);
            const square = this.getSquare(move.startPosition);
            if (square && square.piece) {
                square.piece.move(this, move.endPosition);
            }

            updated = true;
        }

        return updated;
    }

    static toJSON(board: BoardData): string {
        const pieces: SimplifiedPiece[] = [];
        for (let i = 0; i < board.width; i++) {
            for (let j = 0; j < board.height; j++) {
                const square = board.getSquare(new Coordinates(i, j));
                if (square && square.piece) {
                    pieces.push(square.piece);
                }
            }
        }

        return JSON.stringify({width: board.width, height: board.height, pieces: pieces});
    }

    static fromJSON(json: string): BoardData {
        const data = JSON.parse(json);
        const board = new BoardData(data.width, data.height, true);
        board.fillBoard(data.pieces);

        return board;
    }
}