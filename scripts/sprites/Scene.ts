import { SceneInterface, Transform } from "../types/types"
import { ctx, canvas, currentScene } from "../main.js";
import { scenes } from "../scenes.js";

export class Scene {

    position: { x: number; y: number }
    scale: { width: number; height: number }
    image: HTMLImageElement

    constructor(transform: Transform) {
        this.position = transform.position
        this.scale = transform.scale
        this.image = new Image()
        this.image.src = scenes[currentScene].texture;
    }

    render() {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.scale.width, this.scale.height)
    }

    update() {
        this.render()
    }
}