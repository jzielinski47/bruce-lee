// import { input, lastKey } from "./inputListener";
import { ctx, canvas } from "./setup";
import { Player } from "./sprites/Player";
import { Scene } from "./sprites/Scene";

export const gravityScale = 0.2;
export const velocity: number = 1.2;

export const player = new Player({ position: { x: 30, y: 150 }, velocity: { x: 0, y: 0 }, scale: { width: 16, height: 22 } })
const scene = new Scene({ position: { x: 0, y: 0 }, scale: { width: canvas.width, height: canvas.height } }, { texture: '../assets/map/test.png' })

export const input = {
    a: { pressed: false },
    d: { pressed: false },
    w: { pressed: false },
    s: { pressed: false },
}
export let lastKey: string

function update() {
    window.requestAnimationFrame(update)
    scene.update()

    player.update()

    player.velocity.x = 0
    if (input.a.pressed && lastKey === 'a') player.velocity.x = -velocity
    else if (input.d.pressed && lastKey === 'd') player.velocity.x = velocity

}

update()


window.onkeydown = e => {
    switch (e.key) {
        case "a": case "ArrowLeft": input.a.pressed = true; lastKey = 'a'; break;
        case "d": case "ArrowRight": input.d.pressed = true; lastKey = 'd'; break;
        case "w": case "ArrowUp": player.velocity.y = -2; break;
    }
}

window.onkeyup = e => {
    switch (e.key) {
        case "a": case "ArrowLeft": input.a.pressed = false; break;
        case "d": case "ArrowRight": input.d.pressed = false; break;
    }
}

