import { ctx } from "../setup";
import { Material, Setup, Transform } from "../types/types";

export class Scene {

    position: { x: number; y: number }
    scale: { width: number; height: number }
    image: HTMLImageElement
    texture: string;

    constructor(transform: Transform, material: Material) {
        this.position = transform.position
        this.scale = transform.scale
        this.image = new Image()
        this.image.src = material.texture;

        this.texture = material.texture
    }

    render() {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.scale.width, this.scale.height)
    }

    update() {
        this.render()
    }
}