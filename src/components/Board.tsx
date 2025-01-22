import Cell from "./Cell.tsx";
import {BoardData} from "../models/BoardData.ts";
import {FC, useState} from "react";
import styles from "../styles/Board.module.css"
import {CellData} from "../models/CellData.ts";

interface BoardProps {
    board: BoardData;
}

const Board: FC<BoardProps> = ({board}) => {
    const [selectedCell, setSelectedCell] = useState<CellData | null>(null);

    const selectCell = (cell: CellData) => {
        board.cells.forEach(row => row.forEach(cell => cell.isAvailable = false));

        if (cell.piece) {
            cell.piece.getAvailableCells(board).forEach(cell => cell.isAvailable = true);
        }

        setSelectedCell(cell);
    }

    const transposedBoard = board.playingWhite ?
        board.cells[0].map((_, colIndex) => board.cells.map(row => row[board.height - colIndex - 1]))
        : board.cells[0].map((_, colIndex) => board.cells.map(row => row[colIndex]));

    return (
        <div className={styles.board} style={{
            gridTemplateColumns: `repeat(${board.width}, 1fr)`,
            gridTemplateRows: `repeat(${board.height}, 1fr)`,
            aspectRatio: `${board.width}/${board.height}`,
        }}>
            {transposedBoard.map(row => row.map(cell =>
                <Cell
                    cell={cell}
                    selected={selectedCell === cell}
                    onClick={selectCell}
                    key={cell.id}
                />
            ))}
        </div>
    );
};

export default Board;