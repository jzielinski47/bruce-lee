import { Player } from "./sprites/Player.js";
import { Scene } from "./sprites/Scene.js";

export const canvas: HTMLCanvasElement = document.querySelector('#canvas');
export const ctx: CanvasRenderingContext2D = canvas.getContext('2d');

canvas.width = 320
canvas.height = 190

export const gravityScale = 0.2;

const velocity: number = 1.5;
const jumpHeight: number = 2.5;

// Scene Setup
const player = new Player({
    position: { x: 30, y: 0 },
    velocity: { x: 0, y: 0 },
    scale: { width: 16, height: 22 }
}, './assets/sprites/bruce-lee.png')

const scene = new Scene({
    position: { x: 0, y: 0 },
    scale: { width: canvas.width, height: canvas.height }
}, './assets/map/levels/map_level_1.png')


function update() {

    window.requestAnimationFrame(update)
    scene.update() // Background update


    // Player Update actions
    player.update()
    player.velocity.x = 0

    if (input.a.pressed && lastKey === 'a') player.velocity.x = -velocity
    if (input.d.pressed && lastKey === 'd') player.velocity.x = velocity

}

const input = {
    a: { pressed: false },
    d: { pressed: false },
    w: { pressed: false },
    s: { pressed: false },
}
let lastKey: string

window.onkeydown = e => {
    switch (e.key) {
        case "a": case "ArrowLeft": input.a.pressed = true; lastKey = 'a'; break;
        case "d": case "ArrowRight": input.d.pressed = true; lastKey = 'd'; break;
        case "w": case "ArrowUp": player.velocity.y = -jumpHeight; break;
    }
}

window.onkeyup = e => {
    switch (e.key) {
        case "a": case "ArrowLeft": input.a.pressed = false; break;
        case "d": case "ArrowRight": input.d.pressed = false; break;
        case "w": case "ArrowUp": input.w.pressed = false; break;
    }
}

update()