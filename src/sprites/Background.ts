import { config, ctx } from "../config";
import { Animations, Transform } from "../interfaces/interfaces";
import { scenes } from "../scenes";

export class Background {

    position: { x: number; y: number }
    scale: { width: number; height: number }
    image: HTMLImageElement
    frameRate: number;
    currentFrame: number;
    elapsedFrames: number;
    frameBuffer: number;
    animations: Animations;

    constructor(transform: Transform) {
        this.position = transform.position
        this.scale = transform.scale

        this.image = new Image()
        this.image.onload = () => {
            this.scale.width = this.image.width
            this.scale.height = this.image.height
        }

        this.image.src = scenes[config.dev.currentScene].sprite;

    }

    render() {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.scale.width, this.scale.height)
    }

    update() {
        this.render()
        this.image.src = scenes[config.dev.currentScene].sprite;
        // console.error(currentScene)
    }
}