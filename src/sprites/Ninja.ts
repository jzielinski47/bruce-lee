import { player } from "..";
import { canvas, config, ctx } from "../config";
import { Animations, Transform } from "../interfaces/interfaces";
import { scenes } from "../scenes";
import { onCollison, onCollisonBottom, vectorDistance } from "../utils";
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
    date: Date;
    actionCooldown: number;
    lastAction: number;
    facingRight: boolean;
    inAir: boolean;
    waterDirection: string;
    distance: number;

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
        this.waterDirection

        this.sprite = new Image()
        this.sprite.src = '';

        this.triggers = { onLadder: false, onWater: false };
        this.health = 100;

        this.date = new Date();
        this.actionCooldown = 2000
        this.lastAction

        this.facingRight = false
        this.inAir = (this.velocity.y > config.physics.gravityScale + 0.1 || this.velocity.y < 0)

        this.distance = -4
    }

    update() {
        this.render()
        this.updateHitbox()

        this.inAir = (this.velocity.y > config.physics.gravityScale + 0.1 || this.velocity.y < 0)

        this.triggers.onLadder = false;
        this.triggers.onWater = false;

        this.smartMovementDetecion()

        this.position.x += this.velocity.x;

        this.updateHitbox()
        this.triggerCollisionDetection()

        this.updateHitbox()
        this.trapCollisionDetection()

        this.updateHitbox()
        this.horizontalCollisionDetection()

        if (this.triggers.onLadder && this.triggers.onWater) { this.applyWaterMovement() }
        else if (this.triggers.onLadder) { this.applyLadderMovement() }
        else { this.applyGravity(); }


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

    triggerCollisionDetection = () => {
        if (scenes[config.dev.currentScene].triggers) {
            scenes[config.dev.currentScene].triggers.map(trigger => {
                if (onCollison(this.hitbox, trigger)) {
                    switch (trigger.mode) {
                        case 'ladder': this.triggers.onLadder = true; break;
                        case 'water':
                            this.triggers.onWater = true;
                            this.triggers.onLadder = true;
                            this.waterDirection = trigger.dir
                            break;
                        case 'door':
                            if (!trigger.opened) {
                                this.updateHitbox()
                                switch (trigger.model) {
                                    case 0: this.createVirtualCollider(trigger, 'v'); break;
                                    case 1: this.createVirtualCollider(trigger, 'h'); break;
                                    case 2: this.createVirtualCollider(trigger, 'v'); break;
                                    case 3: this.createVirtualCollider(trigger, 'v'); break;
                                }

                            }
                            break;
                    }
                }
            })
        }
    }

    trapCollisionDetection = () => {
        if (scenes[config.dev.currentScene].traps) {
            scenes[config.dev.currentScene].traps.map(trap => {
                if (onCollison(this.hitbox, trap)) {
                    this.health -= trap.dmg;
                }
            })
        }
    }

    platformCollisionDetection = () => {

        scenes[config.dev.currentScene].platforms.map(platform => {

            if (onCollisonBottom(this.hitbox, platform)) {

                if (this.velocity.y > 0) {
                    this.velocity.y = 0
                    const offset = this.hitbox.position.y - this.position.y + this.hitbox.scale.height
                    this.position.y = platform.y - offset - 0.1

                    console.log('player collides with ' + platform.name, 'bottom')
                }

            }

        })

    }

    createVirtualCollider(object, mode) {
        this.updateHitbox()
        switch (mode) {
            case 'h': this.horizontalCollisionDetection(scenes[config.dev.currentScene].triggers); break;
            case 'v': this.verticalCollisionDetection(scenes[config.dev.currentScene].triggers); this.updateHitbox(); this.horizontalCollisionDetection(scenes[config.dev.currentScene].triggers); break;
        }
    }

    applyGravity = () => {
        this.position.y += this.velocity.y;
        this.velocity.y += this.gravity;
    }

    applyLadderMovement = () => {
        this.position.y += this.velocity.y;
        this.updateHitbox()
        this.verticalCollisionDetection()
        this.velocity.y = 0
    }

    applyWaterMovement = () => {
        this.position.y += this.velocity.y;
        this.updateHitbox()
        this.verticalCollisionDetection()
        this.velocity.y = this.waterDirection == 'up' ? -this.onWaterSpeed : this.onWaterSpeed

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

    smartMovementDetecion = () => {




    }
}