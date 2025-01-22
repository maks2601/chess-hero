import {FC} from "react";
import {SquareData} from "../models/SquareData.ts";
import styles from "../styles/Board.module.css";
import Piece from "./Piece.tsx";

interface SquareProps {
    square: SquareData;
    selected: boolean;
    onClick: (cell: SquareData) => void;
}

const Square: FC<SquareProps> = ({square, selected, onClick}) => {
    const squareClassName = [styles.square, styles[square.color], selected ? styles.selected : ""].join(" ");

    return (
        <div onClick={() => onClick(square)} className={squareClassName}>
            <div className={square.isAvailable ? styles.available : ""}/>
            {square.piece && <Piece piece={square.piece}/>}
        </div>
    );
};

export default Square;