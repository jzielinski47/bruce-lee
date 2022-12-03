import { player } from "..";
import { config, ctx } from "../config";
import { Animations, Transform } from "../interfaces/interfaces";
import { scenes } from "../scenes";
import { onCollison } from "../utils";
import { Sprite } from "./Sprite";

export class Ninja extends Sprite {

    name: string;

    scale: { width: number; height: number; };
    position: { x: number; y: number; };
    velocity: { x: number; y: number; };

    gravity: number;
    jumpHeight: number;
    climbSpeed: number;
    onWaterSpeed: number;

    sprite: HTMLImageElement;
    hitbox: Transform;
    triggers: { onLadder: boolean; onWater: boolean; };
    health: number;

    constructor(transform: Transform, animations: Animations) {
        super(transform, animations, 1)
        this.name = 'ninja'

        this.scale = transform.scale;
        this.position = transform.position;
        this.velocity = transform.velocity;

        this.gravity = config.physics.gravityScale;
        this.jumpHeight = config.physics.jumpHeight;
        this.climbSpeed = config.physics.climbSpeed;
        this.onWaterSpeed = config.physics.onWaterSpeed;

        this.sprite = new Image()
        this.sprite.src = '';

        this.triggers = { onLadder: false, onWater: false };
        this.health = 100;
    }

    update() {
        this.render()

        this.position.x += this.velocity.x;

        if (this.velocity.x === 0 && player.position.x > this.position.x) this.switchSprite('idleRight')
        if (this.velocity.x === 0 && player.position.x < this.position.x) this.switchSprite('idleLeft')



        this.updateHitbox()
        this.horizontalCollisionDetection()

        this.applyGravity()

        this.drawHitbox()

        this.updateHitbox()
        this.verticalCollisionDetection();

    }

    horizontalCollisionDetection = (arr = scenes[config.dev.currentScene].colliders) => {
        arr.map(collider => {
            if (onCollison(this.hitbox, collider)) {
                if (this.velocity.x > 0) {
                    const offset = this.hitbox.position.x - this.position.x + this.hitbox.scale.width
                    this.position.x = collider.x - offset - 0.01

                    console.log(this.name + ' collides with ' + collider.name, 'right')
                }

                if (this.velocity.x < -0) {
                    const offset = this.hitbox.position.x - this.position.x
                    this.position.x = (collider.x + collider.width) - offset + 0.01

                    console.log(this.name + ' collides with ' + collider.name, 'left')
                }
            }
        })
    }

    verticalCollisionDetection = (arr = scenes[config.dev.currentScene].colliders) => {
        arr.map(collider => {

            if (onCollison(this.hitbox, collider)) {

                if (this.velocity.y > 0) {
                    this.velocity.y = 0
                    const offset = this.hitbox.position.y - this.position.y + this.hitbox.scale.height
                    this.position.y = collider.y - offset - 0.1

                    console.log('player collides with ' + collider.name, 'bottom')
                }

                if (this.velocity.y < 0) {
                    this.velocity.y = 0
                    const offset = this.hitbox.position.y - this.position.y
                    this.position.y = (collider.y + collider.height) - offset + 0.1

                    console.log('player collides with ' + collider.name, 'up')
                }

            }

        })

    }

    applyGravity = () => {
        this.position.y += this.velocity.y;
        this.velocity.y += this.gravity;
    }

    updateHitbox = () => {
        this.hitbox = {
            position: { x: this.position.x + 1, y: this.position.y + 2 },
            scale: { width: 16, height: 19 }
        }
    }

    drawHitbox = () => {
        ctx.fillStyle = 'rgba(122,0,0,0.5)'
        ctx.fillRect(this.hitbox.position.x, this.hitbox.position.y, this.hitbox.scale.width, this.hitbox.scale.height)
    }

    switchSprite = (sprite: string) => {
        if (this.image === this.animations[sprite].image || !this.loaded) return
        // this.currentFrame = 0
        this.image = this.animations[sprite].image
        this.frameRate = this.animations[sprite].frameRate
        this.frameBuffer = this.animations[sprite].frameBuffer
    }
}