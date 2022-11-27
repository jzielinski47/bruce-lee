import { temp, player, currentScene } from "..";
import { levels } from "../scenes";
import { gameData, updateStats } from "../setup";
import { Transform } from "../types/types";
import { onCollison, refinedOnCollison as advancedCollision } from "../utils";
import { Sprite } from "./Sprite";

export class Latnern extends Sprite {

    id: number; collected: boolean; door: number;

    constructor(transform: Transform, { id, door }) {
        super(transform, { idle: { frameRate: 3, frameBuffer: 30, loop: true, imageSrc: '../assets/sprites/lantern/lantern.png' } }, 3)

        this.id = id;
        this.door = door
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

            gameData.score += 100
            gameData.collectedLanterns += 1
            updateStats()

            if (this.door !== null) {
                levels[currentScene].triggers.map(trig => { if (trig.id === this.door) trig.opened = true })
            }

            temp.lanterns = temp.lanterns.filter(lant => lant.id !== this.id)
            levels[currentScene].lanterns.map(lantern => { if (lantern.id === this.id && !lantern.collected) lantern.collected = true })
        }
    }
}