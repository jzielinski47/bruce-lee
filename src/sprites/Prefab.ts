import { Sprite } from "./Sprite";

export class Prefab extends Sprite {
    constructor(transform, animations) {
        super(transform, animations, animations.idle.frameRate)
    }

    update() {
        this.render()
    }
}