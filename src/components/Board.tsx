import Cell from "./Cell.tsx";
import {BoardData} from "../models/BoardData.ts";
import {FC} from "react";
import styles from "../styles/Board.module.css"

interface BoardProps {
    board: BoardData;
}

const Board: FC<BoardProps> = ({board}) => {
    return (
        <div className={styles.board} style={{
            gridTemplateColumns: `repeat(${board.width}, 1fr)`,
            aspectRatio: `${board.width}/${board.height}`,
        }}>
            {board.cells.map(row => row.map(cell =>{
                return <Cell cell={cell}/>;
            }))}
        </div>
    );
};

export default Board;