import { Animations, Transform } from "../interfaces/interfaces";

export class Ninja {
    position: { x: number; y: number; };
    
    constructor(transform: Transform, animations: Animations) {
        this.position = transform.position
    }
}