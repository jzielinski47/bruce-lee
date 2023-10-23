import { player, temp } from "..";
import { config } from "../config";
import { Transform } from "../interfaces/interfaces";
import { scenes } from "../scenes";
import { updateUserInterface } from "../userinterface";
import { refinedOnCollison } from "../utils";
import { Sprite } from "./Sprite";

export class Latnern extends Sprite {

    id: number; collected: boolean; door: number;

    constructor(transform: Transform, { id, door }) {
        super(transform, { idle: { frameRate: 3, frameBuffer: 30, loop: true, imageSrc: '../assets/sprites/lantern/lantern.jpg' } }, 3)

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
        if (refinedOnCollison(this, player)) {
            this.collected = true

            config.stats.score += 125
            config.stats.collectedLanterns += 1
            config.stats.topScore = config.stats.score
            updateUserInterface()

            if (this.door !== null) {
                scenes[config.dev.currentScene].triggers.map(trig => { if (trig.id === this.door) trig.opened = true })
            }

            temp.lanterns = temp.lanterns.filter(lant => lant.id !== this.id)
            scenes[config.dev.currentScene].lanterns.map(lantern => { if (lantern.id === this.id && !lantern.collected) lantern.collected = true })
        }
    }
}