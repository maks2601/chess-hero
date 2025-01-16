import React, {useState} from 'react';
import './App.css';
import BoardComponent from "./components/BoardComponent";
import {Board} from "./models/Board";

function App() {
    const [board, setBoard] = useState(new Board(8, 8));
    return (
        <div className="App">
            <BoardComponent board={board}/>
        </div>
    );
}

export default App;
