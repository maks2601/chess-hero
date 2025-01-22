import {FC} from "react";
import {CellData} from "../models/CellData.ts";
import styles from "../styles/Board.module.css";
import Piece from "./Piece.tsx";

interface CellProps {
    cell: CellData;
    selected: boolean;
    onClick: (cell: CellData) => void;
}

const Cell: FC<CellProps> = ({cell, selected, onClick}) => {
    const cellClassName = [styles.cell, styles[cell.color], selected ? styles.selected : ""].join(" ");

    return (
        <div onClick={() => onClick(cell)} className={cellClassName}>
            <div className={cell.isAvailable ? styles.available : ""}/>
            {cell.piece && <Piece piece={cell.piece}/>}
        </div>
    );
};

export default Cell;