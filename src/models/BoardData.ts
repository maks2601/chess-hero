import {CellData} from "./CellData.ts";
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
    cells: CellData[][];
    playingWhite: boolean;

    constructor(width: number, height: number, playingWhite: boolean) {
        this.width = width;
        this.height = height;
        this.cells = [];
        this.playingWhite = playingWhite;
        this.createBoard(width, height)
    }

    createBoard(width: number, height: number) {
        this.cells = Array.from({length: width}, () => Array(height).fill(null));

        for (let i = 0; i < width; i++) {
            for (let j = 0; j < height; j++) {
                const color = (i + j) % 2 === 0 ? Colors.BLACK : Colors.WHITE;
                this.cells[i][j] = new CellData(new Coordinates(i, j), color);
            }
        }
    }

    getCell(coordinates: Coordinates) {
        return this.cells[coordinates.x][coordinates.y];
    }

    fillBoard() {
        for (let i = 0; i < this.width; i++) {
            for (let j = 0; j < this.height; j++) {
                const cell = this.cells[i][j];
                if (j === 1) {
                    cell.setFigure(new PawnData(Colors.WHITE, cell.coordinates));
                } else if (j === this.height - 2) {
                    cell.setFigure(new PawnData(Colors.BLACK, cell.coordinates));
                } else if (j === 0 || j === this.height - 1) {
                    const pieceColor = j === 0 ? Colors.WHITE : Colors.BLACK;
                    switch (i) {
                        case 4:
                            cell.setFigure(new KingData(pieceColor, cell.coordinates));
                            break;
                        case 3:
                            cell.setFigure(new QueenData(pieceColor, cell.coordinates));
                            break;
                        case 0:
                        case this.width - 1:
                            cell.setFigure(new RookData(pieceColor, cell.coordinates));
                            break;
                        case 1:
                        case this.width - 2:
                            cell.setFigure(new KnightData(pieceColor, cell.coordinates));
                            break;
                        case 2:
                        case this.width - 3:
                            cell.setFigure(new BishopData(pieceColor, cell.coordinates));
                            break;
                    }
                }
            }
        }
    }
}