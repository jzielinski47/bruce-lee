import { Transform } from "../types/types";
import { Sprite } from "./Sprite";

export class Latnern extends Sprite {
    collected: boolean;
    constructor(transform: Transform) {
        super(transform, { texture: '../assets/sprites/lantern/lantern.png' }, 3, { idle: { frameRate: 3, frameBuffer: 30, loop: true, imageSrc: '../assets/sprites/lantern/lantern.png' } })
        this.scale = transform.scale;
        this.position = transform.position;

        this.collected = false
    }

    update(): void {
        this.render()
        // console.log(this.position.x, this.position.y, this.scale.width, this.scale.height)
    }
}