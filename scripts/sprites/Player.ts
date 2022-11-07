import { ctx, canvas, gravityScale, currentScene } from "../main.js";
import { scenes } from "../scenes.js";
import { SpriteInterface, Transform } from "../types/types";


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
        ctx.drawImage(this.sprite, this.position.x, this.position.y, this.scale.width, this.scale.height)
    }

    update() {
        this.render()
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        if (this.position.y + this.scale.height + this.velocity.y >= canvas.height - scenes[currentScene].surface) {
            this.velocity.y = 0;
        } else {
            this.velocity.y += this.gravity;
        }

        // Left Collider {}
        if (this.position.x + this.velocity.x <= scenes[currentScene].left) {
            this.velocity.x = 0;
        }

        // Right Collider {}
        if (this.position.x + this.velocity.x >= scenes[currentScene].right) {
            this.velocity.x = 0;
        }

    }
}