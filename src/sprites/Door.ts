import { currentScene, temp } from "..";
import { levels } from "../scenes";
import { gameData } from "../setup";
import { Animations, Transform } from "../types/types";
import { Sprite } from "./Sprite";

export class Door extends Sprite {

    id: number; transform: Transform; model: number; opened: boolean; key: number; keyOpened: boolean;


    constructor(transform: Transform, { id, model, key, keyOpened }) {

        super(transform, { idle: { frameRate: 1, frameBuffer: 30, loop: true, imageSrc: '../assets/sprites/door/model-' + model + '.png' } })

        this.id = id; this.model = model; this.key = key; this.opened = false; this.keyOpened = keyOpened;
        this.scale = transform.scale; this.position = transform.position;

    }

    update() { if (!this.opened) { this.render(); } this.onOpen() }

    onOpen() {

        if (this.keyOpened) {
            levels[currentScene].triggers.map(trig => {
                if (trig.id === this.id) {
                    this.opened = trig.opened
                }
            })
        }

        if (!this.keyOpened && gameData.collectedLanterns >= this.key) this.opened = true

        // console.log(this.opened)

        if (this.opened) {
            temp.doors = temp.doors.filter(door => door.id !== this.id)
            levels[currentScene].triggers.map(trig => trig.id === this.id ? trig.opened = true : null)
        }
        // console.error('open', gameData.collectedLanterns, this.key)
    }


}