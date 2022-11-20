import { currentScene, gravityScale, player, setCurrentScene } from "..";
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
    levelToLoad: number;
    updateLevel: boolean;
    lastPos: { x: number; y: number; };

    constructor(transform: Transform, animations: Animations) {
        super(transform, { texture: '../assets/sprites/brucelee/idleRight.png' }, 1, animations)
        this.scale = transform.scale;
        this.position = transform.position;
        this.velocity = transform.velocity;

        this.gravity = gravityScale;
        // this.jumpHeight = 2.5
        this.jumpHeight = 1.8
        this.climbSpeed = 4

        this.sprite = new Image()
        this.sprite.src = '../assets/sprites/brucelee/brucelee-anim.png';

        this.triggers = {
            onLadder: false,
        };

        this.climbAnimVariant = 1
        this.climbCooldown = 1000

        this.levelToLoad = currentScene
        this.updateLevel = false

        this.lastPos = { x: this.position.x, y: this.position.y }
    }

    update() {
        this.render()

        this.position.x += this.velocity.x;

        if (player.velocity.x === 0 && lastKey === 'd') { this.switchSprite('idleRight') }
        if (player.velocity.x === 0 && lastKey === 'a') { this.switchSprite('idleLeft') }

        this.updateHitbox()

        this.triggers.onLadder = false
        this.onTriggerEnter()
        this.checkForLaterns()

        this.updateHitbox()
        this.horizontalCollisionDetection()

        if (this.triggers.onLadder) { this.applyLadderMovement() } else { this.applyGravity() }

        this.updateHitbox()
        // this.drawHitbox()

        this.verticalCollisionDetection()


    }

    horizontalCollisionDetection = () => {
        levels[currentScene].colliders.map(collider => {
            if (onCollison(this.hitbox, collider)) {
                if (this.velocity.x > 0) {
                    // this.velocity.x = 0
                    const offset = this.hitbox.position.x - this.position.x + this.hitbox.scale.width
                    this.position.x = collider.x - offset - 0.01
                }

                if (this.velocity.x < -0) {
                    // this.velocity.x = 0
                    const offset = this.hitbox.position.x - this.position.x
                    this.position.x = (collider.x + collider.width) - offset + 0.01
                }
                console.log('player collides with ' + collider.name)
            }
        })
    }

    applyGravity() {
        this.position.y += this.velocity.y;
        this.velocity.y += this.gravity;
    }

    verticalCollisionDetection = () => {
        levels[currentScene].colliders.map(collider => {
            if (!this.updateLevel) {
                if (onCollison(this.hitbox, collider)) {
                    if (this.velocity.y > 0) {
                        this.velocity.y = 0
                        const offset = this.hitbox.position.y - this.position.y + this.hitbox.scale.height
                        this.position.y = collider.y - offset - 0.1
                    }

                    if (this.velocity.y < 0) {
                        this.velocity.y = 0
                        const offset = this.hitbox.position.y - this.position.y
                        this.position.y = (collider.y + collider.height) - offset + 0.1
                    }
                    console.log('player collides with ' + collider.name)
                }
            }

        })


    }

    onTriggerEnter = () => {
        if (levels[currentScene].triggers) {
            levels[currentScene].triggers.map(trigger => {
                if (onCollison(this.hitbox, trigger)) {
                    switch (trigger.mode) {
                        case 'ladder': this.triggers.onLadder = true; break;
                        case 'loader':

                            this.levelToLoad = trigger.level;
                            this.updateLevel = true;

                            this.velocity.x = 0; this.velocity.y = 0;
                            switch (trigger.dir) {
                                case 'right': this.position.x = 0.1; this.position.y -= this.gravity / 2; break;
                                case 'left': this.position.x = canvas.width - this.scale.width - 0.1; this.position.y -= this.gravity / 2; break;
                                case 'down': this.position.x = (trigger.hatch.x + (trigger.hatch.width / 2) - (this.scale.width / 2)); this.position.y = 0;
                            }

                            break;
                        case 'door':

                            break;
                    }
                }
            })
        }
    }

    checkForLaterns = () => {

        levels[currentScene].lanterns.map(lattern => {
            if (onCollison(this.hitbox, lattern)) {
                lattern.collected = true
                console.log('collected ' + lattern.name + ' ' + lattern.id)
            }
            // console.log(lattern)
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
                // console.error(this.velocity.y)
                this.climbAnimVariant = (this.climbAnimVariant === 1) ? 2 : 1
            }
        }
    }

    down = () => {
        if (this.triggers.onLadder) {
            this.velocity.y = this.climbSpeed
            // console.error(this.velocity.y)
            this.climbAnimVariant = (this.climbAnimVariant === 1) ? 2 : 1
        }
        // console.log('down');

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
            // console.warn(this.velocity.y)
            this.position.y += this.velocity.y;
            this.velocity.y = 0
        } else if (this.velocity.y > this.gravity) {
            // console.warn(this.velocity.y)
            this.position.y += this.velocity.y;
            this.velocity.y = 0
        }
    }

}
