import {FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {API_ENDPOINT} from "../App.tsx";
import styles from "../styles/Menu.module.css"

const JoinRoomForm = () => {
    const navigate = useNavigate();

    const [roomId, setRoomId] = useState(1234);
    const [error, setError] = useState(null);

    const tryJoin = (e: FormEvent) => {
        e.preventDefault();
        axios.get(API_ENDPOINT + "/" + roomId)
            .then(res => {
                console.log(res);
                navigate("/room/play", {state: {roomId: roomId}});
            })
            .catch(err => setError(err.response.data));
    }

    return (
        <form onSubmit={tryJoin}>
            <label>
                Room id
                <input
                    type="number"
                    value={roomId}
                    onChange={(e) => setRoomId(parseInt(e.target.value))}
                />
            </label>
            <button type="submit">Join</button>
            {error && <p className={styles.error}>{error}</p>}
        </form>
    );
};

export default JoinRoomForm;