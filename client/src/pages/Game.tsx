import {useEffect, useState} from "react";
import {BoardData} from "../models/BoardData.ts";
import Board from "../components/Board.tsx";
import {API_ENDPOINT} from "../App.tsx";
import axios from "axios";
import {useLocation} from "react-router-dom";
import {Move} from "../models/Move.ts";

const Game = () => {
    const location = useLocation();

    const [board, setBoard] = useState(new BoardData(8, 8, true));
    const [showHints, setShowHints] = useState(false);
    const [roomId, setRoomId] = useState(0);
    const [, setMoves] = useState<Move[]>([]);

    useEffect(() => {
        const requestUrl = API_ENDPOINT + "/room/" + location.state.roomId;

        if (roomId === location.state.roomId) {
            return;
        }

        setRoomId(location.state.roomId);

        axios.get(requestUrl).then(res => {
            setBoard(BoardData.fromJSON(res.data.board));
            setShowHints(res.data.showHints);
        });
    }, [roomId]);

    useEffect(() => {
        const syncMoves = () => {
            const requestUrl = API_ENDPOINT + "/room/" + location.state.roomId + "/moves";
            axios.get(requestUrl).then(res => {
                if (board.syncMoves(res.data)) {
                    setMoves(res.data);
                }
            });
        }

        const interval = setInterval(syncMoves, 500);

        return () => clearInterval(interval);
    });

    const onMove = (move: Move) => {
        const requestUrl = API_ENDPOINT + "/room/" + location.state.roomId + "/moves";
        setMoves(prev => prev.concat(move));
        axios.put(requestUrl, move).then(res => res);
    }


    return (
        <div className="App">
            <p>Room id: {roomId}</p>
            <Board board={board} showHints={showHints} onMove={onMove}/>
        </div>
    );
}

export default Game;