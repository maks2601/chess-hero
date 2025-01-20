import {FC} from "react";
import {CellData} from "../models/CellData.ts";
import styles from "../styles/Board.module.css";
import Piece from "./Piece.tsx";

interface CellProps {
    cell: CellData;
}

const Cell: FC<CellProps> = ({cell}) => {
    return (
        <div className={`${styles.cell} ${styles[cell.color]}`}>
            {cell.piece && <Piece piece={cell.piece}/>}
        </div>
    );
};

export default Cell;