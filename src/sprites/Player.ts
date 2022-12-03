import { player } from "..";
import { ctx, canvas, config } from "../config";
import { lastKey } from "../controls";
import { Transform, Animations } from "../interfaces/interfaces";
import { scenes } from "../scenes";
import { onCollison, onCollisonBottom } from "../utils";
import { Sprite } from "./Sprite";

export class Player extends Sprite {
    name: string;
    scale: { width: number; height: number; };
    position: { x: number; y: number; };
    velocity: { x: number; y: number; };

    jumpHeight: number;
    climbSpeed: number;
    onWaterSpeed: number;
    gravity: number;

    sprite: HTMLImageElement;
    hitbox: Transform;

    triggers: { onLadder: boolean; onWater: boolean };
    cooldowns: { climb: number; jump: number; }
    lastActions: { climb: number; jump: number; }
    climbAnimVariant: number;

    levelToLoad: number;
    updateLevel: boolean;

    date: Date;
    health: number;
    waterDirection: string;

    constructor(transform: Transform, animations: Animations) {
        super(transform, animations, 1)
        this.name = 'player'

        this.scale = transform.scale;
        this.position = transform.position;
        this.velocity = transform.velocity;

        this.gravity = config.physics.gravityScale;
        this.jumpHeight = config.physics.jumpHeight;
        this.climbSpeed = config.physics.climbSpeed;
        this.onWaterSpeed = config.physics.onWaterSpeed;

        this.waterDirection;

        this.sprite = new Image()
        this.sprite.src = '../assets/sprites/brucelee/brucelee-anim.png';

        this.triggers = { onLadder: false, onWater: false };

        this.date = new Date();

        this.cooldowns = { climb: 150, jump: 300 }
        this.lastActions = { climb: this.date.getTime(), jump: this.date.getTime() }
        this.climbAnimVariant = 1;

        this.levelToLoad = config.dev.currentScene;
        this.updateLevel = false;

        this.health = 100;
    }

    update() {
        this.render()

        this.position.x += this.velocity.x;
        this.triggers.onLadder = false;
        this.triggers.onWater = false;

        if (player.velocity.x === 0 && lastKey === 'd') this.switchSprite('idleRight')
        if (player.velocity.x === 0 && lastKey === 'a') this.switchSprite('idleLeft')
        if (player.velocity.x === 0 && lastKey === undefined) this.switchSprite('idleRight')

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

        this.updateHitbox()
        this.platformCollisionDetection();

        if (this.health <= 0) this.playerIsDead()

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
            if (!this.updateLevel) {
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
            }

        })

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
            position: { x: this.position.x + 1, y: this.position.y },
            scale: { width: 16, height: 21 }
        }
    }

    drawHitbox = () => {
        ctx.fillStyle = 'rgba(255,0,0,0.5)'
        ctx.fillRect(this.hitbox.position.x, this.hitbox.position.y, this.hitbox.scale.width, this.hitbox.scale.height)
    }

    switchSprite = (sprite: string) => {
        if (this.image === this.animations[sprite].image || !this.loaded) return
        // this.currentFrame = 0
        this.image = this.animations[sprite].image
        this.frameRate = this.animations[sprite].frameRate
        this.frameBuffer = this.animations[sprite].frameBuffer
    }

    jump = () => {

        this.date = new Date()

        if ((this.velocity.y === 0 || this.velocity.y === this.gravity) && !this.triggers.onLadder) {
            if (this.date.getTime() - this.lastActions.jump < this.cooldowns.jump) return;
            this.velocity.y = -this.jumpHeight
            this.lastActions.jump = this.date.getTime();
        }

        if ((this.velocity.y === 0 && this.triggers.onLadder) || this.triggers.onWater) {
            if (this.date.getTime() - this.lastActions.climb < this.cooldowns.climb) return;
            this.velocity.y = -this.climbSpeed
            this.climbAnimVariant = (this.climbAnimVariant === 1) ? 2 : 1
            this.lastActions.climb = this.date.getTime();
        }
    }

    down = () => {
        this.date = new Date()
        if ((this.velocity.y === 0 && this.triggers.onLadder) || this.triggers.onWater) {
            if (this.date.getTime() - this.lastActions.climb < this.cooldowns.climb) return;
            if (this.triggers.onWater) this.velocity.y += this.onWaterSpeed
            this.velocity.y = this.climbSpeed
            this.climbAnimVariant = (this.climbAnimVariant === 1) ? 2 : 1
            this.lastActions.climb = this.date.getTime();
        }
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
                        case 'loader':

                            this.levelToLoad = trigger.level;
                            this.updateLevel = true;

                            this.velocity.x = 0;
                            this.velocity.y = 0;

                            switch (trigger.dir) {
                                case 'right': this.position.x = 0.1; this.position.y -= this.gravity / 2; break;
                                case 'left': this.position.x = canvas.width - this.scale.width - 0.1; this.position.y -= this.gravity / 2; break;
                                case 'down': this.position.x = (trigger.hatch.x + (trigger.hatch.width / 2) - (this.scale.width / 2)); this.position.y = 0;
                                case 'up': break;
                                case 'custom': this.position.x = trigger.custom.x; this.position.y = trigger.custom.y; break;
                            }

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

    playerIsDead() {
        this.levelToLoad = 9;
        this.updateLevel = true;
        this.health = 100;
        console.log(this.levelToLoad);
        config.stats.lives--;
    }
}