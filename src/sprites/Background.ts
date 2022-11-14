import { ctx } from "../setup";
import { Animations, Material, Setup, Transform } from "../types/types";

export class Background {

    position: { x: number; y: number }
    scale: { width: number; height: number }
    image: HTMLImageElement
    frameRate: number;
    currentFrame: number;
    elapsedFrames: number;
    frameBuffer: number;
    animations: Animations;

    constructor(transform: Transform, material: Material) {
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

        // ctx.drawImage(this.image, this.position.x, this.position.y)
        // ctx.drawImage(this.image, this.position.x, this.position.y, this.scale.width, this.scale.height)
    }

    update() {
        this.render()
    }
}