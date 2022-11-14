import { ctx } from "../setup";
import { Material, Setup, Transform } from "../types/types";

export class Sprite {

    position: { x: number; y: number }
    scale: { width: number; height: number }
    image: HTMLImageElement
    frameRate: number;
    currentFrame: number;
    elapsedFrames: number;
    frameBuffer: number;

    constructor(transform: Transform, material: Material, frameRate: number = 1) {
        this.position = transform.position
        this.scale = transform.scale

        this.image = new Image()
        this.image.onload = () => {
            this.scale.width = this.image.width / frameRate
            this.scale.height = this.image.height
        }

        this.image.src = material.texture;

        // animation
        this.frameRate = frameRate
        this.currentFrame = 0

        this.elapsedFrames = 0
        this.frameBuffer = 8
    }

    render() {
        const cropbox = {
            position: { x: this.scale.width * this.currentFrame, y: 0 },
            width: this.scale.width, height: this.scale.height
        }

        ctx.drawImage(this.image, cropbox.position.x, cropbox.position.y, cropbox.width, cropbox.height, this.position.x, this.position.y, this.scale.width, this.scale.height)

        this.anim()
        // ctx.drawImage(this.image, this.position.x, this.position.y)
        // ctx.drawImage(this.image, this.position.x, this.position.y, this.scale.width, this.scale.height)
    }

    update() {
        this.render()
    }

    anim() {
        this.elapsedFrames++

        if (this.elapsedFrames % this.frameBuffer === 0) {
            (this.currentFrame < this.frameRate - 1) ? this.currentFrame++ : this.currentFrame = 0
        }

    }
}