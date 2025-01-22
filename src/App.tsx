import {useState} from 'react';
import './App.css';
import Board from "./components/Board.tsx";
import {BoardData} from "./models/BoardData.ts";
import BoardForm from "./components/BoardForm.tsx";

function App() {
    const [board, setBoard] = useState(new BoardData(8, 8, true));

    const createBoard = (width: number, height: number, playingWhite: boolean) => {
        const newBoard = new BoardData(width, height, playingWhite);
        newBoard.fillBoard();
        setBoard(newBoard);
    }

    return (
        <div className="App">
            <BoardForm createBoard={createBoard}/>
            <Board board={board}/>
        </div>
    );
}

export default App;
