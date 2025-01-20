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

    return (
        <div className={styles.board} style={{
            gridTemplateColumns: `repeat(${board.width}, 1fr)`,
            gridTemplateRows: `repeat(${board.height}, 1fr)`,
            aspectRatio: `${board.width}/${board.height}`,
        }}>
            {board.cells.map(row => row.map(cell =>
                <Cell
                    cell={cell}
                    selected={selectedCell === cell}
                    onClick={setSelectedCell}
                    key={cell.id}
                />
            ))}
        </div>
    );
};

export default Board;