import { currentScene, gravityScale, player } from "..";
import { lastKey } from "../inputListener";
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
    climbSpeed: number;
    gravity: number;

    sprite: HTMLImageElement;
    hitbox: Transform;

    triggers: { onLadder: boolean; };
    facingRight: boolean;
    climbAnimVariant: number;
    climbCooldown: number;

    constructor(transform: Transform, animations: Animations) {
        super(transform, { texture: '../assets/sprites/brucelee/idleRight.png' }, 1, animations)
        this.scale = transform.scale;
        this.position = transform.position;
        this.velocity = transform.velocity;

        this.gravity = gravityScale;
        // this.jumpHeight = 2.5
        this.jumpHeight = 2.5
        this.climbSpeed = 5

        this.sprite = new Image()
        this.sprite.src = '../assets/sprites/brucelee/brucelee-anim.png';

        this.triggers = {
            onLadder: false,
        };

        this.climbAnimVariant = 1
        this.climbCooldown = 1000
    }

    update() {
        this.render()

        this.position.x += this.velocity.x;

        if (player.velocity.x === 0 && lastKey === 'd') { this.switchSprite('idleRight') }
        if (player.velocity.x === 0 && lastKey === 'a') { this.switchSprite('idleLeft') }

        this.updateHitbox()

        this.triggers.onLadder = false
        this.onTriggerEnter()

        this.updateHitbox()
        this.horizontalCollisionDetection()

        if (this.triggers.onLadder) { this.applyLadderMovement() } else { this.applyGravity() }

        this.updateHitbox()
        // this.drawHitbox()
        this.verticalCollisionDetection()

        console.log('velocity', this.velocity.y)

    }

    horizontalCollisionDetection = () => {
        levels[currentScene].colliders.map(collider => {
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
        levels[currentScene].colliders.map(collider => {
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

    onTriggerEnter = () => {
        levels[currentScene].triggers.map(trigger => {
            if (onCollison(this.hitbox, trigger)) {
                switch (trigger.mode) {
                    case 'ladder': this.triggers.onLadder = true; break;
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
        if ((this.velocity.y === 0 || this.velocity.y === this.gravity) && !this.triggers.onLadder) {
            this.velocity.y = -this.jumpHeight
        }
        // this.velocity.y = -this.jumpHeight // flying
        if (this.triggers.onLadder) {
            if (this.velocity.y === 0) {
                this.velocity.y = -this.climbSpeed
                console.error(this.velocity.y)
                this.climbAnimVariant = (this.climbAnimVariant === 1) ? 2 : 1
            }
        }
    }

    down = () => {
        if (this.triggers.onLadder) {
            this.velocity.y = this.climbSpeed
            console.error(this.velocity.y)
            this.climbAnimVariant = (this.climbAnimVariant === 1) ? 2 : 1
        }
        console.log('down');

    }

    switchSprite = (sprite: string) => {
        if (this.image === this.animations[sprite].image || !this.loaded) return
        // this.currentFrame = 0
        this.image = this.animations[sprite].image
        this.frameRate = this.animations[sprite].frameRate
        this.frameBuffer = this.animations[sprite].frameBuffer
    }

    drawHitbox = () => {
        ctx.fillStyle = 'rgba(255,0,0,0.5)'
        ctx.fillRect(this.hitbox.position.x, this.hitbox.position.y, this.hitbox.scale.width, this.hitbox.scale.height)
    }

    applyLadderMovement = () => {

        if (this.velocity.y < 0) {
            console.warn(this.velocity.y)
            this.position.y += this.velocity.y;
            this.velocity.y = 0
        } else if (this.velocity.y > this.gravity) {
            console.warn(this.velocity.y)
            this.position.y += this.velocity.y;
            this.velocity.y = 0
        }
    }
}
