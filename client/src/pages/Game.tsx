import {useEffect, useState} from "react";
import {BoardData} from "../models/BoardData.ts";
import Board from "../components/Board.tsx";
import {API_ENDPOINT} from "../App.tsx";
import axios from "axios";
import {useLocation} from "react-router-dom";

const Game = () => {
    const location = useLocation();

    const [board, setBoard] = useState(new BoardData(8, 8, true));
    const [showHints, setShowHints] = useState(false);
    const [roomId, setRoomId] = useState(0);

    useEffect(() => {
        const requestUrl = API_ENDPOINT + "/" + location.state.roomId;

        if (roomId === location.state.roomId) {
            return;
        }

        setRoomId(location.state.roomId);

        axios.get(requestUrl).then(res => {
            setBoard(res.data.board);
            setShowHints(res.data.showHints);
        });
    }, [roomId]);


    return (
        <div className="App">
            <p>Room id: {roomId}</p>
            <Board board={board} showHints={showHints}/>
        </div>
    );
}

export default Game;