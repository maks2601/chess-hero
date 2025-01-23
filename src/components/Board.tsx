import Square from "./Square.tsx";
import {BoardData} from "../models/BoardData.ts";
import {FC, useState} from "react";
import styles from "../styles/Board.module.css"
import {SquareData} from "../models/SquareData.ts";

interface BoardProps {
    board: BoardData;
}

const Board: FC<BoardProps> = ({board}) => {
    const [selectedSquare, setSelectedSquare] = useState<SquareData | null>(null);

    const selectSquare = (square: SquareData) => {
        board.squares.forEach(row => row.forEach(square => square.isAvailable = false));

        if (selectedSquare === square) {
            setSelectedSquare(null);
            return;
        }

        if (selectedSquare?.piece
            && !selectedSquare.coordinates.equals(square.coordinates)
            && selectedSquare.piece.isPossibleMove(board, square.coordinates)) {
            selectedSquare.piece.move(board, square.coordinates);
            setSelectedSquare(null);
            return;
        }

        if (square.piece) {
            square.piece.getAvailableSquares(board).forEach(square => square.isAvailable = true);
        }

        setSelectedSquare(square);
    }

    const transposedBoard = board.playingWhite ?
        board.squares[0].map((_, colIndex) => board.squares.map(row => row[board.height - colIndex - 1]))
        : board.squares[0].map((_, colIndex) => board.squares.map(row => row[colIndex]));

    return (
        <div className={styles.board} style={{
            gridTemplateColumns: `repeat(${board.width}, 1fr)`,
            gridTemplateRows: `repeat(${board.height}, 1fr)`,
            aspectRatio: `${board.width}/${board.height}`,
        }}>
            {transposedBoard.map(row => row.map(square =>
                <Square
                    square={square}
                    selected={selectedSquare === square}
                    onClick={selectSquare}
                    key={square.id}
                />
            ))}
        </div>
    );
};

export default Board;