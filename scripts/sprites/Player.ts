import { ctx, canvas, gravityScale, currentScene } from "../main.js";
import { SceneInterface, SpriteInterface, Transform } from "../types/types";
import { Scene } from "./Scene.js";

export class Player {

    scale: { width: number; height: number; };
    position: { x: number; y: number; };
    velocity: { x: number; y: number; };
    sprite: HTMLImageElement;
    gravity: number;

    constructor(transform: Transform, sprite: SpriteInterface) {
        this.scale = transform.scale;
        this.position = transform.position;
        this.velocity = transform.velocity;

        this.gravity = gravityScale;

        this.sprite = new Image()
        this.sprite.src = sprite.texture;
    }

    render() {
        // ctx.fillStyle = 'blue'
        // ctx.fillRect(this.position.x, this.position.y, this.scale.width, this.scale.height)
        ctx.drawImage(this.sprite, this.position.x, this.position.y, this.scale.width, this.scale.height)
    }

    update() {
        this.render()
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        if (this.position.y + this.scale.height + this.velocity.y >= canvas.height - 10) {
            this.velocity.y = 0;
        } else {
            this.velocity.y += this.gravity;
        }

        console.log(currentScene)
    }
}