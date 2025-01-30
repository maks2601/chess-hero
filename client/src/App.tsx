import {useEffect, useState} from 'react';
import './App.css';
import Board from "./components/Board.tsx";
import {BoardData} from "./models/BoardData.ts";
import BoardForm from "./components/BoardForm.tsx";

function App() {
    const [board, setBoard] = useState(new BoardData(8, 8, true));
    const [showHints, setShowHints] = useState(false);
    const [roomId, setRoomId] = useState(0);

    useEffect(() => {
        fetch(API_ENDPOINT).then(res => {
            res.json().then((json) => {
                setRoomId(json.roomId)
            })
        });
    }, [board]);

    const createBoard = (width: number, height: number, playingWhite: boolean, showHints: boolean) => {
        const newBoard = new BoardData(width, height, playingWhite);
        newBoard.fillBoard();
        setBoard(newBoard);
        setShowHints(showHints);
    }

    return (
        <div className="App">
            <p>Room id: {roomId}</p>
            <BoardForm createBoard={createBoard}/>
            <Board board={board} showHints={showHints}/>
        </div>
    );
}

export const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;

export default App;
