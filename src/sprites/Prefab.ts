import { Animations, Transform } from "../interfaces/interfaces";
import { Sprite } from "./Sprite";

export class Prefab extends Sprite {
    constructor(transform: Transform, animations: Animations) { super(transform, animations, animations.idle.frameRate) }
    update = () => this.render()
}