import {PieceType} from "./PieceType.tsx";
import {PawnData} from "./PawnData.ts";
import {KnightData} from "./KnightData.ts";
import {BishopData} from "./BishopData.ts";
import {RookData} from "./RookData.ts";
import {QueenData} from "./QueenData.ts";
import {KingData} from "./KingData.ts";
import {SimplifiedPiece} from "./PieceData.ts";

export const createPiece = (piece: SimplifiedPiece) => {
    switch (piece.type) {
        case PieceType.PAWN:
            return new PawnData(piece.color, piece.coordinates);
        case PieceType.KNIGHT:
            return new KnightData(piece.color, piece.coordinates);
        case PieceType.BISHOP:
            return new BishopData(piece.color, piece.coordinates);
        case PieceType.ROOK:
            return new RookData(piece.color, piece.coordinates);
        case PieceType.QUEEN:
            return new QueenData(piece.color, piece.coordinates);
        case PieceType.KING:
            return new KingData(piece.color, piece.coordinates);
        default:
            return null;
    }
}