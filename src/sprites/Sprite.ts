import { ctx } from "../setup";
import { Material, Setup, Transform } from "../types/types";

export class Sprite {

    position: { x: number; y: number }
    scale: { width: number; height: number }
    image: HTMLImageElement
    frameRate: number;

    constructor(transform: Transform, material: Material, frameRate: number = 1) {
        this.position = transform.position
        this.scale = transform.scale

        this.image = new Image()
        this.image.onload = () => {
            this.scale.width = this.image.width
            this.scale.height = this.image.height
        }

        this.image.src = material.texture;
    }

    render() {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.scale.width, this.scale.height)
    }

    update() {
        this.render()
    }
}