import { Transform } from "../types/types";
import { Sprite } from "./Sprite";

export class Ninja {
    position: { x: number; y: number; };
    constructor(transform: Transform) {
        this.position = transform.position
    }
}