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
    onTouch: (square: SquareData) => void;
    onTouchPiece: (piece: PieceData, touch: TouchData) => void;
}

const Square: FC<SquareProps> = ({square, selected, onTouch, onTouchPiece}) => {
    const squareClassName = [styles.square, styles[square.color]].join(" ");
    const highlightOptions: string[] = [];
    square.piece ? highlightOptions.push(styles.occupied) : highlightOptions.push(styles.free);
    if (selected) {
        highlightOptions.push(styles.selected)
    } else {
        square.isAvailable && highlightOptions.push(styles.available);
    }

    return (
        <div
            ref={(node) => squares.set(node, square)}
            onTouchEnd={() => onTouch(square)}
            className={squareClassName}
        >
            {square.piece && <Piece piece={square.piece} onTouch={onTouchPiece}/>}
            <div className={highlightOptions.join(" ")}/>
        </div>
    );
};

export default Square;