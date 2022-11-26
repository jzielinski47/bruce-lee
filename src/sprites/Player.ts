import { currentScene, gravityScale, player, setCurrentScene } from "..";
import { lastKey } from "../inputListener";
import { levels } from "../scenes";
import { canvas, ctx, gameData } from "../setup";
import { Anim, Animations, Setup, SpriteInterface, Transform } from "../types/types";
import { onCollison } from "../utils";
import { Latnern } from "./Lantern";
import { Sprite } from "./Sprite";

export class Player extends Sprite implements SpriteInterface {

    name: string;
    scale: { width: number; height: number; };
    position: { x: number; y: number; };
    velocity: { x: number; y: number; };

    jumpHeight: number;
    climbSpeed: number;
    gravity: number;

    sprite: HTMLImageElement;
    hitbox: Transform;

    triggers: { onLadder: boolean };
    cooldowns: { climb: number; jump: number; }
    lastActions: { climb: number; jump: number; }
    climbAnimVariant: number;

    levelToLoad: number;
    updateLevel: boolean;

    date: Date;
    health: number;

    constructor(transform: Transform, animations: Animations) {
        super(transform, animations, 1)
        this.name = 'player'

        this.scale = transform.scale;
        this.position = transform.position;
        this.velocity = transform.velocity;

        this.gravity = gravityScale;
        this.jumpHeight = 1.8
        this.climbSpeed = 4

        this.sprite = new Image()
        this.sprite.src = '../assets/sprites/brucelee/brucelee-anim.png';

        this.triggers = { onLadder: false };

        this.date = new Date();

        this.cooldowns = { climb: 150, jump: 150 }
        this.lastActions = { climb: this.date.getTime(), jump: this.date.getTime() }
        this.climbAnimVariant = 1;

        this.levelToLoad = currentScene;
        this.updateLevel = false;

        this.health = 100;
    }

    update() {
        this.render()

        this.position.x += this.velocity.x;
        this.triggers.onLadder = false;

        if (player.velocity.x === 0 && lastKey === 'd') this.switchSprite('idleRight')
        if (player.velocity.x === 0 && lastKey === 'a') this.switchSprite('idleLeft')

        this.updateHitbox()
        this.triggerCollisionDetection()
        this.lanternCollisionDetection()

        this.updateHitbox()
        this.horizontalCollisionDetection()

        this.triggers.onLadder ? this.applyLadderMovement() : this.applyGravity();

        this.updateHitbox()
        this.verticalCollisionDetection();
    }

    horizontalCollisionDetection = () => {
        levels[currentScene].colliders.map(collider => {
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

    verticalCollisionDetection = () => {
        levels[currentScene].colliders.map(collider => {
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

        if (this.velocity.y === 0 && this.triggers.onLadder) {
            if (this.date.getTime() - this.lastActions.climb < this.cooldowns.climb) return;
            this.velocity.y = -this.climbSpeed
            this.climbAnimVariant = (this.climbAnimVariant === 1) ? 2 : 1
            this.lastActions.climb = this.date.getTime();
        }
    }

    down = () => {
        this.date = new Date()
        if (this.velocity.y === 0 && this.triggers.onLadder) {
            if (this.date.getTime() - this.lastActions.climb < this.cooldowns.climb) return;
            this.velocity.y = this.climbSpeed
            this.climbAnimVariant = (this.climbAnimVariant === 1) ? 2 : 1
            this.lastActions.climb = this.date.getTime();
        }
    }

    triggerCollisionDetection = () => {
        if (levels[currentScene].triggers) {
            levels[currentScene].triggers.map(trigger => {
                if (onCollison(this.hitbox, trigger)) {
                    switch (trigger.mode) {
                        case 'ladder': this.triggers.onLadder = true; break;
                        case 'loader':

                            this.levelToLoad = trigger.level;
                            this.updateLevel = true;

                            this.velocity.x = 0;
                            this.velocity.y = 0;

                            switch (trigger.dir) {
                                case 'right': this.position.x = 0.1; this.position.y -= this.gravity / 2; break;
                                case 'left': this.position.x = canvas.width - this.scale.width - 0.1; this.position.y -= this.gravity / 2; break;
                                case 'down': this.position.x = (trigger.hatch.x + (trigger.hatch.width / 2) - (this.scale.width / 2)); this.position.y = 0;
                                case 'up': this.position.x = (trigger.hatch.x + (trigger.hatch.width / 2) - (this.scale.width / 2)); this.position.y = canvas.width - this.scale.height - 0.1; break;
                                case 'custom': this.position.x = trigger.custom.x; this.position.y = trigger.custom.y; break;
                            }

                            break;
                        case 'door':
                            if (!trigger.opened) {
                                if (this.velocity.y > 0) {
                                    this.velocity.y = 0
                                    const offset = this.hitbox.position.y - this.position.y + this.hitbox.scale.height
                                    this.position.y = trigger.y - offset - 0.1
                                    console.log('player collides with ' + trigger.name, 'down')
                                }
                                if (this.velocity.y < 0) {
                                    this.velocity.y = 0
                                    const offset = this.hitbox.position.y - this.position.y
                                    this.position.y = (trigger.y + trigger.height) - offset + 0.1
                                    console.log('player collides with ' + trigger.name, 'up')
                                }
                            }
                            break;
                    }
                }
            })
        }
    }

    lanternCollisionDetection = () => {

        levels[currentScene].lanterns.map(lantern => {
            if (onCollison(this.hitbox, lantern)) {
                if (!lantern.collected) {
                    console.log('collected ' + lantern.name + ' ' + lantern.id)
                }
                lantern.collected = true
            }

        })
    }



}
