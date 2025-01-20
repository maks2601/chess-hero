import {FC, FormEvent, useState} from "react";

interface BoardFormProps {
    createBoard(width: number, height: number): void;
}

const BoardForm: FC<BoardFormProps> = ({createBoard}) => {
    const [width, setWidth] = useState(8);
    const [height, setHeight] = useState(8);

    const processForm = (e: FormEvent) => {
        e.preventDefault();
        createBoard(width, height);
    }

    return (
        <form onSubmit={processForm}>
            <label>
                Width:
                <input
                    type="number"
                    value={width}
                    min="1"
                    onChange={(e) => setWidth(parseInt(e.target.value))}
                />
            </label>
            <label>
                Height:
                <input
                    type="number"
                    value={height}
                    min="1"
                    onChange={(e) => setHeight(parseInt(e.target.value))}
                />
            </label>
            <button type="submit">Apply</button>
        </form>
    );
};

export default BoardForm;