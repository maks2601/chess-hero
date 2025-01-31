import BoardForm from "../components/BoardForm.tsx";
import {BoardData} from "../models/BoardData.ts";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {API_ENDPOINT} from "../App.tsx";

const CreateRoom = () => {
    const navigate = useNavigate();

    const createBoard = (width: number, height: number, playingWhite: boolean, showHints: boolean) => {
        const newBoard = new BoardData(width, height, playingWhite);
        newBoard.fillBoard();
        axios.post(API_ENDPOINT, {board: newBoard, showHints: showHints})
            .then((res) => {
                navigate("/room/play", {state: {roomId: res.data.roomId}});
            })
            .catch((err) => console.log(err));
    }

    return (
        <BoardForm createBoard={createBoard}/>
    );
};

export default CreateRoom;