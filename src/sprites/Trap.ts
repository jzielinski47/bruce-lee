import { ninja, player, sumo } from "..";
import { config, ctx } from "../config";
import { Animations, Transform } from "../interfaces/interfaces";
import { refinedOnCollison } from "../utils";
import { Sprite } from "./Sprite";

export class Trap extends Sprite {
    date: Date;
    cooldowns: { activation: number; };
    lastActions: { activation: number; };
    triggers: { active: boolean; };
    hitbox: { position: { x: number; y: number; }; scale: { width: number; height: number; }; };
    start: { position: { x: number; y: number; }; scale: { width: number; height: number; }; };
    dmg: number;
    timeout: number;

    constructor(transform: Transform, animations: Animations, damage: number, timeout: number = 240) {
        super(transform, animations, animations.idle.frameRate)

        this.start = { position: transform.position, scale: transform.scale }

        this.position = { x: transform.position.x - transform.scale.width, y: transform.position.y }
        this.scale = transform.scale

        this.date = new Date()
        this.triggers = { active: false }
        this.cooldowns = { activation: 1700 }
        this.lastActions = { activation: this.date.getTime() }

        this.timeout = timeout

        this.hitbox = { position: this.position, scale: this.scale }
        this.dmg = damage
    }

    update = () => {
        this.render();
        this.activate()
        this.updateHitbox()

        config.dev.inDevelopmendMode ? this.drawHitbox() : null
        // this.position.x = this.triggers.active ? this.start.position.x : this.start.position.x - this.start.scale.width;

        this.triggers.active ? this.position.x += 2 : this.position.x = this.start.position.x - this.start.scale.width;
        // console.log(this.triggers.active)
        this.triggers.active ? this.checkForHitboxCollision() : null

    }

    activate = () => {
        this.date = new Date()

        if (this.date.getTime() - this.lastActions.activation < this.cooldowns.activation) return;
        this.triggers.active = true
        this.lastActions.activation = this.date.getTime()
        setTimeout(() => this.triggers.active = false, this.timeout)
    }

    public updateHitbox() {
        this.hitbox = { position: this.position, scale: this.scale }
    }

    drawHitbox() {
        ctx.fillStyle = 'rgba(255,0,0,0.5)'
        ctx.fillRect(this.hitbox.position.x, this.hitbox.position.y, this.hitbox.scale.width, this.hitbox.scale.height)
    }

    checkForHitboxCollision() {
        this.damage(player)
    }

    damage(enemy) {
        if (refinedOnCollison(this.hitbox, enemy.hitbox)) {
            if (enemy) {
                console.error('enemy ', enemy.health)
                enemy.health -= this.dmg;
                console.error('enemy ', enemy.health)
                this.triggers.active = false
            }
        }
    }
}