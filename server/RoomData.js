export class RoomData {
    board;
    showHints;
    moves;

    constructor(board, showHints) {
        this.board = board;
        this.showHints = showHints;
        this.moves = [];
    }

    addMove(move) {
        this.moves.push(move);
    }
}