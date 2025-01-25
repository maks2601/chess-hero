import {PieceData} from "../models/pieces/PieceData.ts";
import {FC, Touch, useState} from "react";
import styles from "../styles/Board.module.css"
import {TouchState} from "../models/input/TouchState.ts";
import {TouchData} from "../models/input/TouchData.ts";

interface PieceProps {
    piece: PieceData;
    onTouch: (piece: PieceData, touch: TouchData) => void;
}

const Piece: FC<PieceProps> = ({piece, onTouch}) => {
    const [startPosition, setStartPosition] = useState({x: 0, y: 0});
    const [touchPosition, setTouchPosition] = useState({x: 0, y: 0});

    const handleTouchStart = (touch: Touch) => {
        setStartPosition({
            x: touch.clientX,
            y: touch.clientY,
        });
        setTouchPosition({
            x: touch.clientX,
            y: touch.clientY,
        });
        onTouch(piece, new TouchData(touch.clientX, touch.clientY, TouchState.START));
    };

    const handleTouchMove = (touch: Touch) => {
        setTouchPosition({
            x: touch.clientX,
            y: touch.clientY,
        });
        onTouch(piece, new TouchData(touch.clientX, touch.clientY, TouchState.PROGRESS));
    };

    const handleTouchEnd = () => {
        onTouch(piece, new TouchData(touchPosition.x, touchPosition.y, TouchState.END));
        setStartPosition({
            x: 0,
            y: 0,
        });
        setTouchPosition({
            x: 0,
            y: 0,
        });
    };

    return (
        <img className={styles.piece} src={piece.logo} alt=""
             style={{
                 position: "absolute",
                 left: `${touchPosition.x - startPosition.x}px`,
                 top: `${touchPosition.y - startPosition.y}px`,
                 touchAction: "none",
             }}
             onTouchStart={(e) => handleTouchStart(e.touches.item(0))}
             onTouchMove={(e) => handleTouchMove(e.touches.item(0))}
             onTouchEnd={handleTouchEnd}
        />
    );
};

export default Piece;