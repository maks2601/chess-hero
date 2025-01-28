import {PieceData} from "../models/pieces/PieceData.ts";
import React, {FC, useEffect, useState} from "react";
import styles from "../styles/Board.module.css"
import {TouchState} from "../models/input/TouchState.ts";
import {TouchData} from "../models/input/TouchData.ts";

interface PieceProps {
    piece: PieceData;
    onTouch: (piece: PieceData, touch: TouchData) => void;
}

interface Position {
    x: number;
    y: number;
}

const Piece: FC<PieceProps> = ({piece, onTouch}) => {
    const [position, setPosition] = useState<Position>({x: 0, y: 0});
    const [startPosition, setStartPosition] = useState<Position>({x: 0, y: 0});
    const [dragging, setDragging] = useState<boolean>(false);

    const handlePointerDown = (e: React.PointerEvent<HTMLImageElement>): void => {
        e.currentTarget.setPointerCapture(e.pointerId);
        setDragging(true);
        setStartPosition({x: e.clientX, y: e.clientY});

        onTouch(piece, new TouchData(e.clientX, e.clientY, TouchState.START));
    };

    const handlePointerMove = (e: PointerEvent): void => {
        if (dragging) {
            setPosition({x: e.clientX, y: e.clientY});
            onTouch(piece, new TouchData(e.clientX, e.clientY, TouchState.PROGRESS));
        }
    };

    const handlePointerUp = (e: PointerEvent): void => {
        setDragging(false);
        onTouch(piece, new TouchData(e.clientX, e.clientY, TouchState.END));
        setPosition({x: 0, y: 0});
        setStartPosition({x: 0, y: 0});
    };

    useEffect(() => {
        if (dragging) {
            window.addEventListener("pointermove", handlePointerMove);
            window.addEventListener("pointerup", handlePointerUp);
        } else {
            window.removeEventListener("pointermove", handlePointerMove);
            window.removeEventListener("pointerup", handlePointerUp);
        }

        return () => {
            window.removeEventListener("pointermove", handlePointerMove);
            window.removeEventListener("pointerup", handlePointerUp);
        };
    }, [dragging]);

    return (
        <img className={styles.piece} src={piece.logo} alt=""
             style={{
                 position: "absolute",
                 left: position.x - startPosition.x,
                 top: position.y - startPosition.y,
                 cursor: dragging ? "grabbing" : "grab",
                 userSelect: "none",
                 zIndex: 1,
             }}
             onPointerDown={(e) => handlePointerDown(e)}
        />
    );
};

export default Piece;