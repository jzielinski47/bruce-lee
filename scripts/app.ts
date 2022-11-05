import { Scene } from "./classes/Scene.js";
import { Sprite } from "./classes/Sprite.js";

export const canvas: HTMLCanvasElement = document.querySelector('#canvas')
export const ctx: CanvasRenderingContext2D = canvas.getContext('2d');

export const gravity: number = 0.5;

const velocity: number = 1.5;
const jumpHeight: number = 5;

export const sceneHeight = 10

canvas.width = 320
canvas.height = 190

ctx.fillRect(0, 0, canvas.width, canvas.height)

const player = new Sprite({
    position: { x: 30, y: 0 },
    velocity: { x: 0, y: 4 },
    dimensions: { width: 16, height: 24 }
})

const background = new Scene(
    {
        position: { x: 0, y: 0 },
        dimensions: { width: canvas.width, height: canvas.height },
        imageSrc: './assets/map/levels/level_1_test_2.png'
    }

)

const keys = {
    a: { pressed: false },
    d: { pressed: false },
    w: { pressed: false },
    s: { pressed: false },
}
let lastKey: string

function update() {
    window.requestAnimationFrame(update)
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    background.update()


    player.update()
    console.log(player.position)
    player.velocity.x = 0

    if (keys.a.pressed && lastKey === 'a') player.velocity.x = -velocity
    if (keys.d.pressed && lastKey === 'd') player.velocity.x = velocity

    console.log(lastKey)
}

update()

window.onkeydown = e => {
    switch (e.key) {
        case "a": case "ArrowLeft": keys.a.pressed = true; lastKey = 'a'; break;
        case "d": case "ArrowRight": keys.d.pressed = true; lastKey = 'd'; break;
        case "w": case "ArrowUp": player.velocity.y = -jumpHeight; break;
    }
}

window.onkeyup = e => {
    switch (e.key) {
        case "a": case "ArrowLeft": keys.a.pressed = false; break;
        case "d": case "ArrowRight": keys.d.pressed = false; break;
        case "w": case "ArrowUp": keys.w.pressed = false; break;
    }
}

