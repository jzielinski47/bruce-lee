import { Transform } from "../interfaces/interfaces";

export class Ninja {
    position: { x: number; y: number; };
    constructor(transform: Transform) {
        this.position = transform.position
    }
}