import { gravityScale } from "..";
import { colliders } from "../scenes";
import { canvas, ctx } from "../setup";
import { Setup, SpriteInterface, Transform } from "../types/types";
import { onCollison } from "../utils";

export class Player implements SpriteInterface {

    scale: { width: number; height: number; };
    position: { x: number; y: number; };
    velocity: { x: number; y: number; };

    jumpHeight: number;
    gravity: number;

    sprite: HTMLImageElement;

    constructor(transform: Transform) {
        this.scale = transform.scale;
        this.position = transform.position;
        this.velocity = transform.velocity;

        this.gravity = gravityScale;
        this.sprite = new Image()
        this.sprite.src = '../assets/sprites/brucelee/bruce-lee.png';

        this.jumpHeight = 2.5
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

                console.log('col -h')

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

                console.log('col -v')

            }
        })
    }

    jump = () => this.velocity.y = -2
}