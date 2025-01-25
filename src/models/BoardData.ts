import {SquareData} from "./SquareData.ts";
import {Colors} from "./Colors";
import {PawnData} from "./pieces/PawnData.ts";
import {KingData} from "./pieces/KingData.ts";
import {KnightData} from "./pieces/KnightData.ts";
import {RookData} from "./pieces/RookData.ts";
import {BishopData} from "./pieces/BishopData.ts";
import {QueenData} from "./pieces/QueenData.ts";
import {Coordinates} from "./Coordinates.ts";

export class BoardData {
    readonly width: number;
    readonly height: number;
    squares: SquareData[][];
    playingWhite: boolean;
    sideToMove: Colors;

    constructor(width: number, height: number, playingWhite: boolean) {
        this.width = width;
        this.height = height;
        this.squares = [];
        this.playingWhite = playingWhite;
        this.sideToMove = Colors.WHITE;
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

    fillBoard() {
        for (let i = 0; i < this.width; i++) {
            for (let j = 0; j < this.height; j++) {
                const square = this.squares[i][j];
                if (j === 1) {
                    square.setFigure(new PawnData(Colors.WHITE, square.coordinates));
                } else if (j === this.height - 2) {
                    square.setFigure(new PawnData(Colors.BLACK, square.coordinates));
                } else if (j === 0 || j === this.height - 1) {
                    const pieceColor = j === 0 ? Colors.WHITE : Colors.BLACK;
                    switch (i) {
                        case 4:
                            square.setFigure(new KingData(pieceColor, square.coordinates));
                            break;
                        case 3:
                            square.setFigure(new QueenData(pieceColor, square.coordinates));
                            break;
                        case 0:
                        case this.width - 1:
                            square.setFigure(new RookData(pieceColor, square.coordinates));
                            break;
                        case 1:
                        case this.width - 2:
                            square.setFigure(new KnightData(pieceColor, square.coordinates));
                            break;
                        case 2:
                        case this.width - 3:
                            square.setFigure(new BishopData(pieceColor, square.coordinates));
                            break;
                    }
                }
            }
        }
    }

    switchTurn() {
        this.sideToMove = this.sideToMove === Colors.WHITE ? Colors.BLACK : Colors.WHITE;
    }
}