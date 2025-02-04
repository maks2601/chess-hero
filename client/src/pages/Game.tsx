import {useEffect, useState} from "react";
import {BoardData} from "../models/BoardData.ts";
import Board from "../components/Board.tsx";
import {API_ENDPOINT} from "../App.tsx";
import axios from "axios";
import {useLocation} from "react-router-dom";
import {Move} from "../models/Move.ts";

const Game = () => {
    const location = useLocation();
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
            BoardData.current = BoardData.fromJSON(res.data.board);
            setShowHints(res.data.showHints);
            listenMoves();
        });

        let eventSource: EventSource | null = null;

        const listenMoves = () => {
            const requestUrl = API_ENDPOINT + "/room/" + location.state.roomId + "/moves";
            eventSource = new EventSource(requestUrl);

            eventSource.onmessage = (event) => {
                const moves = JSON.parse(event.data);
                if (BoardData.current.syncMoves(moves)) {
                    setMoves(moves);
                }
            };

            eventSource.onerror = (error) => {
                console.error("SSE error:", error);
                eventSource?.close();
            };
        }

        return () => eventSource?.close();
    }, [roomId]);

    const onMove = (move: Move) => {
        const requestUrl = API_ENDPOINT + "/room/" + location.state.roomId + "/moves";
        axios.put(requestUrl, move).then(res => res);
    }

    return (
        <div className="App">
            <p>Room id: {roomId}</p>
            {BoardData.current && <Board board={BoardData.current} showHints={showHints} onMove={onMove}/>}
        </div>
    );
}

export default Game;