import { currentScene, temp } from "..";
import { levels } from "../scenes";
import { gameData } from "../setup";
import { Transform } from "../types/types";
import { Sprite } from "./Sprite";

export class Door extends Sprite {

    id: number; transform: Transform; opened: boolean; key: number;

    constructor(id: number, transform: Transform, key: number) {
        super(transform, { texture: '../assets/sprites/door/model-1.png' }, 1, { idle: { frameRate: 1, frameBuffer: 30, loop: true, imageSrc: '../assets/sprites/door/model-1.png' } })

        this.id = id; this.key = key; this.opened = false;
        this.scale = transform.scale; this.position = transform.position;

    }

    update() { if (!this.opened) this.render(); this.onOpen() }

    onOpen() {
        this.opened = gameData.collectedLanterns >= this.key

        if (this.opened) {
            temp.lanterns = temp.doors.filter(door => door.id !== this.id)
            if (levels[currentScene].triggers) levels[currentScene].triggers.map(trig => {
                trig.id === this.id ? trig.opened = true : null
            })
        }
        // console.error('open', gameData.collectedLanterns, this.key)
    }
}