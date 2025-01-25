import {FC} from "react";
import {SquareData} from "../models/SquareData.ts";
import styles from "../styles/Board.module.css";
import Piece from "./Piece.tsx";
import {PieceData} from "../models/pieces/PieceData.ts";
import {squares} from "./Board.tsx";
import {TouchData} from "../models/input/TouchData.ts";

interface SquareProps {
    square: SquareData;
    selected: boolean;
    onClick: (square: SquareData) => void;
    onTouch: (piece: PieceData, touch: TouchData) => void;
}

const Square: FC<SquareProps> = ({square, selected, onClick, onTouch}) => {
    const squareClassName = [styles.square, styles[square.color]].join(" ");
    const highlightClassName = [
        square.isAvailable ? styles.available : "",
        selected ? styles.selected : "",
        square.piece ? styles.occupied : styles.free
    ].join(" ");

    return (
        <div
            ref={(node)=> squares.set(node, square)}
            onClick={() => onClick(square)}
            className={squareClassName}
        >
            {square.piece && <Piece piece={square.piece} onTouch={onTouch}/>}
            <div className={highlightClassName}/>
        </div>
    );
};

export default Square;