import { ninja, player, sumo } from "..";
import { canvas, config, ctx } from "../config";
import { Animations, ICooldown, Transform } from "../interfaces/interfaces";
import { scenes } from "../scenes";
import { updateUserInterface } from "../userinterface";
import { checkIfBetween, getRandomFloat, getRandomInt, onCollison, onCollisonBottom, refinedOnCollison, vectorDistance } from "../utils";
import { Sprite } from "./Sprite";

export class Enemy extends Sprite {

    name: string;
    date: Date;
    velocity: { x: number; y: number; };
    gravity: number;
    jumpHeight: number;
    climbSpeed: number;
    sprite: HTMLImageElement;
    hitbox: Transform;
    triggers: { onLadder: boolean; onWater: boolean; inAttack: boolean; isDead: boolean; shocked: boolean; attackBoxDisplay: boolean; isCrouch: boolean; };
    cooldowns: ICooldown;
    lastActions: ICooldown;
    health: number;
    inAir: boolean;
    facingRight: boolean;
    onWaterSpeed: number;
    distance: number;
    waterDirection: string;
    attackRange: number;
    heightDifference: number;
    safeDistance: number;
    attackBox: Transform;

    constructor(name: string, transform: Transform, animations: Animations) {

        super(transform, animations, 1)

        this.name = name // enemy or sumo
        this.date = new Date()

        this.scale = transform.scale;
        this.position = transform.position;
        this.velocity = transform.velocity;

        this.gravity = config.physics.gravityScale;
        this.jumpHeight = config.physics.jumpHeight;
        this.climbSpeed = config.physics.climbSpeed;

        this.sprite = new Image()
        this.sprite.src = '';

        this.triggers = { onLadder: false, onWater: false, inAttack: false, isDead: false, shocked: false, attackBoxDisplay: false, isCrouch: false };
        this.cooldowns = { climb: 150, jump: 500, attack: this.name === 'sumo' ? 5000 : 2500 }
        this.lastActions = { climb: this.date.getTime(), jump: this.date.getTime(), attack: this.date.getTime() }

        this.health = this.name === 'sumo' ? 120 : 99;

        this.facingRight = false
        this.inAir = (this.velocity.y > config.physics.gravityScale + 0.1 || this.velocity.y < 0)

        this.onWaterSpeed = config.physics.onWaterSpeed;

        this.attackRange = this.name === 'sumo' ? 12 : 6
        this.safeDistance = 22 + getRandomFloat(0, 10, 3)
        this.heightDifference = 15

        this.attackBox = { position: this.position, scale: { width: 14, height: 10 } }
    }

    update() {

        if (!this.triggers.isDead) {
            this.render()

            this.position.x += this.velocity.x;

            this.attackBox = { position: this.position, scale: { width: 14, height: 10 } }

            this.updateHitbox()
            this.facingRight = vectorDistance(this.hitbox, player).horizontal > 0
            this.inAir = (this.velocity.y > config.physics.gravityScale + 0.1 || this.velocity.y < 0)

            this.triggers.onLadder = false;
            this.triggers.onWater = false;

            this.updateHitbox()
            this.triggerCollisionDetection()

            this.updateHitbox()
            this.trapCollisionDetection()

            this.updateHitbox()
            this.horizontalCollisionDetection()

            if (this.triggers.onLadder && this.triggers.onWater) this.applyWaterMovement()
            else if (this.triggers.onLadder) this.applyLadderMovement()
            else this.applyGravity();

            this.updateHitbox()
            this.verticalCollisionDetection();

            this.updateHitbox()
            config.dev.inDevelopmendMode ? this.drawHitbox() : null

            if (!this.triggers.inAttack) this.velocity.x = 0
            if (this.triggers.attackBoxDisplay) this.attackBoxCollisionDetection()

            this.applyAiControls()

            if (this.health <= 0) this.destroy()
        }

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

                    config.dev.inColDetectionMode ? console.log(this.name + ' collides with ' + collider.name, 'bottom') : null
                }

                if (this.velocity.y < 0) {
                    this.velocity.y = 0
                    const offset = this.hitbox.position.y - this.position.y
                    this.position.y = (collider.y + collider.height) - offset + 0.1

                    config.dev.inColDetectionMode ? console.log(this.name + ' collides with ' + collider.name, 'up') : null
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
                        case 'loader':

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

        ctx.fillStyle = 'rgba(255,255,0,0.5)'
        if (this.triggers.attackBoxDisplay) ctx.fillRect(this.attackBox.position.x + (this.facingRight ? 10 : -10), this.attackBox.position.y, this.attackBox.scale.width, this.attackBox.scale.height)
    }

    switchSprite = (sprite: string) => {
        if (this.image === this.animations[sprite].image || !this.loaded) return
        // this.currentFrame = 0
        this.image = this.animations[sprite].image
        this.frameRate = this.animations[sprite].frameRate
        this.frameBuffer = this.animations[sprite].frameBuffer
    }

    attack = () => {
        this.date = new Date()

        if (this.date.getTime() - this.lastActions.attack < this.cooldowns.attack) return;

        this.triggers.inAttack = true;
        this.triggers.attackBoxDisplay = true;
        this.switchSprite(this.facingRight ? 'attackRight' : 'attackLeft')
        setTimeout(() => this.triggers.attackBoxDisplay = false, this.name === 'sumo' ? 600 : 400)
        setTimeout(() => this.triggers.inAttack = false, this.name === 'sumo' ? 600 : 400)
        this.lastActions.attack = this.date.getTime();
    }

    applyAiControls() {
        this.updateHitbox()

        if (!this.triggers.shocked) {
            if (this.inAir) this.switchSprite('fall')
            else {
                if (!this.triggers.inAttack) this.switchSprite(this.facingRight ? 'idleRight' : 'idleLeft')

                const onSameElevation: boolean = checkIfBetween(-this.heightDifference, this.heightDifference, vectorDistance(this.hitbox, player).vertical)

                if (vectorDistance(this.hitbox, player).horizontal < (onSameElevation ? -this.attackRange : -this.safeDistance)) {
                    this.velocity.x = -config.physics.velocity * (this.name === 'sumo' ? 0.6 : 0.8);
                    this.switchSprite(this.velocity.x < 0 ? 'walkLeft' : 'idleLeft')
                } else if (vectorDistance(this.hitbox, player).horizontal > (onSameElevation ? this.attackRange : this.safeDistance)) {
                    this.velocity.x = config.physics.velocity * (this.name === 'sumo' ? 0.6 : 0.8);
                    this.switchSprite(this.velocity.x > 0 ? 'walkRight' : 'idleRight')
                } else {
                    switch (this.name) {
                        case 'sumo':
                            if (onSameElevation) {
                                if (checkIfBetween(-6, 6, vectorDistance(this.hitbox, player).horizontal)) {
                                    if (this.facingRight) this.velocity.x = -config.physics.velocity * 0.5;
                                    else this.velocity.x = config.physics.velocity * 0.5;
                                } else if (!checkIfBetween(-8, 8, vectorDistance(this.hitbox, player).horizontal)) {
                                    this.attack()
                                    if (this.facingRight) this.velocity.x = config.physics.velocity * 0.5;
                                    else this.velocity.x = -config.physics.velocity * 0.5;
                                }

                            } else { }
                            break;
                        default: onSameElevation ? this.attack() : null; break;
                    }
                }

            }
        }

    }

    destroy = () => {
        this.triggers.isDead = true
        config.stats.score += this.name === 'sumo' ? 450 : 200
        config.stats.topScore = config.stats.score
        updateUserInterface()

        setTimeout(() => this.revive(), this.name === 'sumo' ? 1000 : 2000)

    }

    attackBoxCollisionDetection() {
        player.updateHitbox()
        sumo.updateHitbox()
        ninja.updateHitbox()

        this.damage(player)
        this.damage(this.name === 'sumo' ? ninja : sumo)
    }


    damage(enemy) {
        if (refinedOnCollison(this.attackBox, enemy.hitbox)) {
            if (!enemy.triggers.isCrouch && !enemy.triggers.shocked) {
                enemy.health -= 5;
                // config.stats.score += 75;
                enemy.velocity.x = 0;
                !this.facingRight ? enemy.velocity.x -= config.physics.velocity * 1.2 : enemy.velocity.x += config.physics.velocity * 1.2
                enemy.velocity.y -= 1
                enemy.triggers.shocked = true
                setTimeout(() => enemy.triggers.shocked = false, 1000)
                enemy.switchSprite(this.facingRight ? 'hitRight' : 'hitLeft')
                this.triggers.attackBoxDisplay = false
            }
        }
    }

    revive() {
        this.triggers.isDead = false
        this.health = this.name === 'sumo' ? 120 : 99;

        const random = scenes[config.dev.currentScene].entrances[Math.floor(Math.random() * scenes[config.dev.currentScene].entrances.length)];
        this.position = { x: random.x, y: random.y }
    }

}
