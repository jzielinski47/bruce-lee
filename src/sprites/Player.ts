import { gravityScale } from "..";
import { colliders } from "../scenes";
import { canvas, ctx } from "../setup";
import { Setup, SpriteInterface, Transform } from "../types/types";
import { onCollison } from "../utils";

export class Player implements SpriteInterface {

    scale: { width: number; height: number; };
    position: { x: number; y: number; };
    velocity: { x: number; y: number; };
    gravity: number;
    sprite: HTMLImageElement;
    sides: { bottom: number; };

    constructor(transform: Transform) {
        this.scale = transform.scale;
        this.position = transform.position;
        this.velocity = transform.velocity;

        this.gravity = gravityScale;
        this.sprite = new Image()
        this.sprite.src = '../assets/sprites/brucelee/bruce-lee.png';

        this.sides = {
            bottom: this.position.y + this.scale.height
        }
    }

    render = () => {
        ctx.drawImage(this.sprite, this.position.x, this.position.y, this.scale.width, this.scale.height)
    }

    update() {
        this.render()

        this.position.x += this.velocity.x;
        this.horizontalCollisionDetection()
        this.applyGravity()
        this.verticalCollisionDetection()

        // if (this.velocity.x < 0) this.sprite.style.transform = 'scaleX(-1)';


    }

    horizontalCollisionDetection = () => {
        colliders.level0.map(collider => {
            if (onCollison(this, collider)) {
                if (this.velocity.x > 0) {
                    this.velocity.x = 0
                    this.position.x = collider.left - this.scale.width - 0.01
                }

                if (this.velocity.x < 0) {
                    this.velocity.x = 0
                    this.position.x = collider.right + 0.01
                }

                console.log('col')
                // if (this.velocity.x > 0) this.velocity.x = 0
            }
        })
    }

    applyGravity() {
        this.position.y += this.velocity.y;
        this.velocity.y += this.gravity;
    }

    verticalCollisionDetection = () => {
        colliders.level0.map(collider => {
            if (onCollison(this, collider)) {
                if (this.velocity.y > 0) {
                    this.velocity.y = 0
                    this.position.y = collider.top - this.scale.height - 0.2
                }

                if (this.velocity.y < 0) {
                    this.velocity.y = 0
                    this.position.y = collider.bottom + 0.01
                }

                console.log('col')
                // if (this.velocity.x > 0) this.velocity.x = 0
            }
        })
    }
}