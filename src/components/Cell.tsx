import {FC} from "react";
import {CellData} from "../models/CellData.ts";
import styles from "../styles/Board.module.css"

interface CellProps {
    cell: CellData;
}

const Cell : FC<CellProps> = ({cell}) => {
    return (
        <div className={`${styles.cell} ${styles[cell.color]}`}>
        </div>
    );
};

export default Cell;