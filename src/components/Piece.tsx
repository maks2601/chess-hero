import {PieceData} from "../models/pieces/PieceData.ts";
import {FC} from "react";
import styles from "../styles/Board.module.css"

interface PieceProps {
    piece: PieceData;
}

const Piece: FC<PieceProps> = ({piece}) => {
    console.log(piece);
    return (
        <img className={styles.piece} src={piece.logo} alt=""/>
    );
};

export default Piece;