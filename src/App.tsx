import {useState} from 'react';
import './App.css';
import Board from "./components/Board.tsx";
import {BoardData} from "./models/BoardData.ts";
import BoardForm from "./components/BoardForm.tsx";

function App() {
    const [board, setBoard] = useState(new BoardData(8, 8));

    return (
        <div className="App">
            <BoardForm setBoard={setBoard}/>
            <Board board={board}/>
        </div>
    );
}

export default App;
