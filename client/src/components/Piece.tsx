import {PieceData} from "../models/pieces/PieceData.ts";
import {FC, useState} from "react";
import styles from "../styles/Board.module.css"
import {TouchState} from "../models/input/TouchState.ts";
import {TouchData} from "../models/input/TouchData.ts";
import Draggable, {DraggableData} from 'react-draggable';

interface PieceProps {
    piece: PieceData;
    onTouch: (piece: PieceData, touch: TouchData) => void;
}

const Piece: FC<PieceProps> = ({piece, onTouch}) => {
    const [position, setPosition] = useState({x: 0, y: 0});

    const handleDragStart = (data: DraggableData): void => {
        const pos = data.node.getBoundingClientRect();
        onTouch(piece, new TouchData(pos.x, pos.y, TouchState.START));
    };

    const handleDrag = (data: DraggableData): void => {
        const pos = data.node.getBoundingClientRect();
        setPosition({x: data.x, y: data.y});
        onTouch(piece, new TouchData(pos.x, pos.y, TouchState.PROGRESS));
    };

    const handleDragStop = (data: DraggableData): void => {
        setPosition({x: 0, y: 0});
        const pos = data.node.getBoundingClientRect();
        onTouch(piece, new TouchData(pos.x, pos.y, TouchState.END));
    };

    return (
        <Draggable
            position={position}
            onStart={(_, data) => handleDragStart(data)}
            onDrag={(_, data) => handleDrag(data)}
            onStop={(_, data) => handleDragStop(data)}
        >
            <img className={styles.piece} src={piece.logo} alt=""
                 style={{
                     userSelect: "none",
                     zIndex: 1,
                 }}
            />
        </Draggable>
    );
};

export default Piece;