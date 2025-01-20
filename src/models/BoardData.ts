import {CellData} from "./CellData.ts";
import {Colors} from "./Colors";
import {PawnData} from "./pieces/PawnData.ts";
import {KingData} from "./pieces/KingData.ts";
import {KnightData} from "./pieces/KnightData.ts";
import {RookData} from "./pieces/RookData.ts";
import {BishopData} from "./pieces/BishopData.ts";
import {QueenData} from "./pieces/QueenData.ts";

export class BoardData {
    readonly width: number;
    readonly height: number;
    cells: CellData[][];

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
        this.cells = [];
        this.createBoard(width, height)
    }

    createBoard(width: number, height: number) {
        this.cells = [];

        for (let i = 0; i < height; i++) {
            const row: CellData[] = [];
            for (let j = 0; j < width; j++) {
                const color = (i + j) % 2 === 0 ? Colors.BLACK : Colors.WHITE;
                row.push(new CellData(i, j, color));
            }
            this.cells.push(row);
        }
    }

    fillBoard() {
        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                if (i === 1) {
                    this.cells[i][j].setFigure(new PawnData(Colors.BLACK));
                } else if (i === this.height - 2) {
                    this.cells[i][j].setFigure(new PawnData(Colors.WHITE));
                } else if (i === 0 || i === this.height - 1) {
                    const pieceColor = i === 0 ? Colors.BLACK : Colors.WHITE;
                    switch (j) {
                        case 4:
                            this.cells[i][j].setFigure(new KingData(pieceColor));
                            break;
                        case 3:
                            this.cells[i][j].setFigure(new QueenData(pieceColor));
                            break;
                        case 0:
                        case this.width - 1:
                            this.cells[i][j].setFigure(new RookData(pieceColor));
                            break;
                        case 1:
                        case this.width - 2:
                            this.cells[i][j].setFigure(new KnightData(pieceColor));
                            break;
                        case 2:
                        case this.width - 3:
                            this.cells[i][j].setFigure(new BishopData(pieceColor));
                            break;
                    }
                }
            }
        }
    }
}