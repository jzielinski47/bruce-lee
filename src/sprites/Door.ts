import { currentScene, temp } from "..";
import { levels } from "../scenes";
import { gameData } from "../setup";
import { Animations, Transform } from "../types/types";
import { Sprite } from "./Sprite";

export class Door extends Sprite {

    id: number; transform: Transform; model: number; opened: boolean; key: number;

    constructor(transform: Transform, { id, model, key }) {


        super(transform, { idle: { frameRate: 1, frameBuffer: 30, loop: true, imageSrc: '../assets/sprites/door/model-' + model + '.png' } })

        this.id = id; this.model = model; this.key = key; this.opened = false;
        this.scale = transform.scale; this.position = transform.position;

    }

    update() { if (!this.opened) this.render(); this.onOpen() }

    onOpen() {
        this.opened = gameData.collectedLanterns >= this.key

        if (this.opened) {
            temp.doors = temp.doors.filter(door => door.id !== this.id)
            levels[currentScene].triggers.map(trig => trig.id === this.id ? trig.opened = true : null)
        }
        // console.error('open', gameData.collectedLanterns, this.key)
    }


}