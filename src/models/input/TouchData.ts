import {TouchState} from "./TouchState.ts";

export class TouchData {
    x: number;
    y: number;
    state: TouchState;

    constructor(x: number, y: number, state: TouchState) {
        this.x = x;
        this.y = y;
        this.state = state;
    }
}