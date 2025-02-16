import Square from "./Square.tsx";
import {BoardData} from "../models/BoardData.ts";
import {FC, useState} from "react";
import styles from "../styles/Board.module.css"
import {SquareData} from "../models/SquareData.ts";
import {PieceData} from "../models/pieces/PieceData.ts";
import {TouchState} from "../models/input/TouchState.ts";
import {TouchData} from "../models/input/TouchData.ts";
import Timer from "./Timer.tsx";
import {Colors} from "../models/Colors.ts";
import {Move} from "../models/Move.ts";

interface BoardProps {
    board: BoardData;
    showHints: boolean;
    onMove: (move: Move) => void;
}

const squares = new Map<any, SquareData>();

const Board: FC<BoardProps> = ({board, showHints, onMove}) => {
    const [selectedSquare, setSelectedSquare] = useState<SquareData | null>(null);
    const [currentSquare, setCurrentSquare] = useState<SquareData | null>(null);

    const selectSquare = (square: SquareData) => {
        let squareToSelect = null;

        if (selectedSquare === square) {
            setSelectedSquare(null);
        } else if (selectedSquare?.piece
            && selectedSquare.piece.isPossibleMove(board, square.coordinates)) {
            onMove(new Move(selectedSquare.coordinates, square.coordinates));
            setSelectedSquare(null);
        } else {
            squareToSelect = square;
            setSelectedSquare(square);
        }

        updateAvailableSquares(squareToSelect ? squareToSelect.piece : null);
    }

    const touchPiece = (piece: PieceData, touch: TouchData) => {
        const elements = document.elementsFromPoint(touch.x, touch.y);
        elements.forEach(element => {
            if (element.className.includes(styles.square)) {
                const square = squares.get(element);
                if (square) {
                    if (touch.state === TouchState.END) {
                        if (piece.isPossibleMove(board, square.coordinates)) {
                            onMove(new Move(piece.coordinates, square.coordinates));
                            setCurrentSquare(null);
                        }
                    } else {
                        setCurrentSquare(square);
                    }

                    updateAvailableSquares(piece);
                }
            }
        })
    }

    const updateAvailableSquares = (piece: PieceData | null) => {
        board.squares.forEach(row => row.forEach(square => square.isAvailable = false));

        if (piece) {
            piece.getAvailableSquares(board).forEach(square => {
                if (piece.isPossibleMove(board, square.coordinates))
                    square.isAvailable = true
            });
        }
    }

    const transposedBoard = board.playingWhite ?
        board.squares[0].map((_, colIndex) => board.squares.map(row => row[board.height - colIndex - 1]))
        : board.squares[0].map((_, colIndex) => board.squares.map(row => row[colIndex]));

    return (
        <div>
            <Timer startTime={300} side={board.playingWhite ? Colors.BLACK : Colors.WHITE} sideToMove={board.sideToMove}/>
            <div className={styles.board} style={{
                gridTemplateColumns: `repeat(${board.width}, 1fr)`,
                gridTemplateRows: `repeat(${board.height}, 1fr)`,
                aspectRatio: `${board.width}/${board.height}`,
            }}>
                {transposedBoard.map(row => row.map(square =>
                    <Square
                        square={square}
                        selected={(square === selectedSquare && square.piece !== null) || (square === currentSquare && square.isAvailable)}
                        showHints={showHints}
                        onTouch={selectSquare}
                        onTouchPiece={touchPiece}
                        key={square.id}
                    />
                ))}
            </div>
            <Timer startTime={300} side={board.playingWhite ? Colors.WHITE : Colors.BLACK} sideToMove={board.sideToMove}/>
        </div>
    );
};

export default Board;
export {squares};