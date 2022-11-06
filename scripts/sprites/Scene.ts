import { Transform } from "../types/types"
import { ctx, canvas } from "../main.js";

export class Scene {

    position: { x: number; y: number }
    scale: { width: number; height: number }
    image: HTMLImageElement


    constructor(transform: Transform, src: string) {
        this.position = transform.position
        this.scale = transform.scale
        this.image = new Image()
        this.image.src = src
    }

    render() {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.scale.width, this.scale.height)
    }

    update() {
        this.render()
    }
}