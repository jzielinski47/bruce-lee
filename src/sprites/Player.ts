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
    hitbox: Transform;

    constructor(transform: Transform, animations: Animations) {
        super(transform, { texture: '../assets/sprites/brucelee/idle.png' }, 1, animations)
        this.scale = transform.scale;
        this.position = transform.position;
        this.velocity = transform.velocity;

        this.gravity = gravityScale;
        this.jumpHeight = 2.2

        this.sprite = new Image()
        this.sprite.src = '../assets/sprites/brucelee/brucelee-anim.png';
    }

    update() {
        this.render()

        this.position.x += this.velocity.x;


        this.updateHitbox()
        this.horizontalCollisionDetection()
        this.applyGravity()

        this.updateHitbox()
        // this.drawHitbox()
        this.verticalCollisionDetection()

        console.log(this.position)

    }

    horizontalCollisionDetection = () => {
        levels[0].colliders.map(collider => {
            if (onCollison(this.hitbox, collider)) {
                if (this.velocity.x > 0) {
                    // this.velocity.x = 0
                    const offset = this.hitbox.position.x - this.position.x + this.hitbox.scale.width
                    this.position.x = collider.left - offset - 0.01
                }

                if (this.velocity.x < -0) {
                    // this.velocity.x = 0
                    const offset = this.hitbox.position.x - this.position.x
                    this.position.x = collider.right - offset + 0.01
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
            if (onCollison(this.hitbox, collider)) {
                if (this.velocity.y > 0) {
                    this.velocity.y = 0
                    const offset = this.hitbox.position.y - this.position.y + this.hitbox.scale.height
                    this.position.y = collider.top - offset - 0.1
                }

                if (this.velocity.y < 0) {
                    this.velocity.y = 0
                    const offset = this.hitbox.position.y - this.position.y
                    this.position.y = collider.bottom - offset + 0.1
                }
            }
        })
    }

    updateHitbox = () => {
        this.hitbox = {
            position: { x: this.position.x + 1, y: this.position.y },
            scale: { width: 16, height: 21 }
        }
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

    drawHitbox = () => {
        ctx.fillStyle = 'rgba(255,0,0,0.5)'
        ctx.fillRect(this.hitbox.position.x, this.hitbox.position.y, this.hitbox.scale.width, this.hitbox.scale.height)
    }
}
