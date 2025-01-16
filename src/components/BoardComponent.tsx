import React, {FC} from 'react';
import CellComponent from "./CellComponent";
import {Board} from "../models/Board";
import styles from "../styles/BoardComponent.module.css";

interface BoardProps {
    board: Board;
}

const BoardComponent: FC<BoardProps> = ({board}) => {
    return (
        <div className={styles.board}>
            {board.cells.map(row => row.map(cell =>{
                return <CellComponent/>;
            }))}
        </div>
    );
};

export default BoardComponent;