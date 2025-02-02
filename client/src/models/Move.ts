import {Coordinates} from "./Coordinates.ts";

export class Move {
    startPosition: Coordinates;
    endPosition: Coordinates;

    constructor(startPosition: Coordinates, endPosition: Coordinates) {
        this.startPosition = startPosition;
        this.endPosition = endPosition;
    }
}