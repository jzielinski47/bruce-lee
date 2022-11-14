import { gravityScale, player } from "..";
import { levels } from "../scenes";
import { canvas, ctx } from "../setup";
import { Anim, Animations, Setup, SpriteInterface, Transform } from "../types/types";
import { onCollison } from "../utils";
import { Sprite } from "./Sprite";

export class Player extends Sprite implements SpriteInterface {

    scale: { width: number; height: number; };
    position: { x: number; y: number; };
    velocity: { x: number; y: number; };

    jumpHeight: number;
    gravity: number;

    sprite: HTMLImageElement;

    constructor(transform: Transform, animations: Animations) {
        super(transform, { texture: '../assets/sprites/brucelee/idle.png' }, 1, animations)
        this.scale = transform.scale;
        this.position = transform.position;
        this.velocity = transform.velocity;

        this.gravity = gravityScale;
        this.jumpHeight = 2.5

        this.sprite = new Image()
        this.sprite.src = '../assets/sprites/brucelee/brucelee-anim.png';
    }

    update() {
        this.render()

        this.position.x += this.velocity.x;
        this.horizontalCollisionDetection()
        this.applyGravity()
        this.verticalCollisionDetection()

    }

    horizontalCollisionDetection = () => {
        levels[0].colliders.map(collider => {
            if (onCollison(this, collider)) {
                if (this.velocity.x > 0) {
                    this.velocity.x = 0
                    this.position.x = collider.left - this.scale.width - 0.01
                }

                if (this.velocity.x < 0) {
                    this.velocity.x = 0
                    this.position.x = collider.right + 0.01
                }
            }
        })
    }

    applyGravity() {
        this.position.y += this.velocity.y;
        this.velocity.y += this.gravity;
    }

    verticalCollisionDetection = () => {
        levels[0].colliders.map(collider => {
            if (onCollison(this, collider)) {
                if (this.velocity.y > 0) {
                    this.velocity.y = 0
                    this.position.y = collider.top - this.scale.height - 0.1
                }

                if (this.velocity.y < 0) {
                    this.velocity.y = 0
                    this.position.y = collider.bottom + 0.1
                }
            }
        })
    }

    jump = () => {
        if (this.velocity.y === 0 || this.velocity.y === this.gravity) {
            this.velocity.y = -this.jumpHeight
        }

    }

    switchSprite = (sprite: string) => {
        if (this.image === this.animations[sprite].image) return
        this.currentFrame = 0
        this.image = this.animations[sprite].image
        this.frameRate = this.animations[sprite].frameRate
        this.frameBuffer = this.animations[sprite].frameBuffer
    }
}
