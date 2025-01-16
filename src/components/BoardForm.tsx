import {FC, FormEvent, useState} from "react";
import {BoardData} from "../models/BoardData.ts";

interface BoardFormProps {
    setBoard(board : BoardData) : void;
}

const BoardForm : FC<BoardFormProps> = ({setBoard}) => {
    const [width, setWidth] = useState(8);
    const [height, setHeight] = useState(8);

    const processForm = (e : FormEvent)=>{
        e.preventDefault();
        setBoard(new BoardData(width, height));
    }

    return (
        <form onSubmit={processForm}>
            <label>
                Width:
                <input
                    type="number"
                    value={width}
                    min="1"
                    onChange={(e)=>setWidth(parseInt(e.target.value))}
                />
            </label>
            <label>
                Height:
                <input
                    type="number"
                    value={height}
                    min="1"
                    onChange={(e)=>setHeight(parseInt(e.target.value))}
                />
            </label>
            <button type="submit">Apply</button>
        </form>
    );
};

export default BoardForm;