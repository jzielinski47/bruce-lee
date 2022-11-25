import { Transform } from "../types/types";
import { Sprite } from "./Sprite";

export class Door extends Sprite {

    id: number; transform: Transform; opened: boolean;

    constructor(id: number, transform: Transform) {
        super(transform, { texture: '../assets/sprites/door/model-1.png' }, 1, { idle: { frameRate: 1, frameBuffer: 30, loop: true, imageSrc: '../assets/sprites/door/model-1.png' } })

        this.id = id; this.scale = transform.scale; this.position = transform.position;
        this.opened = false
    }

    update() { if (!this.opened) this.render(); this.onOpen() }

    onOpen() {

    }
}