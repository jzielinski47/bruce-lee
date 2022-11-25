import { temp, player } from "..";
import { levels } from "../scenes";
import { stats, updateStats } from "../setup";
import { Transform } from "../types/types";
import { refinedOnCollison as advancedCollision } from "../utils";
import { Sprite } from "./Sprite";

export class Latnern extends Sprite {

    id: number; collected: boolean;

    constructor(id: number, transform: Transform) {
        super(transform, { texture: '../assets/sprites/lantern/lantern.png' }, 3, { idle: { frameRate: 3, frameBuffer: 30, loop: true, imageSrc: '../assets/sprites/lantern/lantern.png' } })

        this.id = id;
        this.scale = transform.scale;
        this.position = transform.position;

        this.collected = false
    }

    update() {
        if (!this.collected) this.render()
        this.onCollect()
    }

    onCollect() {
        if (advancedCollision(this, player)) {
            this.collected = true

            stats.score += 100
            updateStats()

            temp.lanterns = temp.lanterns.filter(lant => lant.id !== this.id)
        }
    }
}