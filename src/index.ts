import { input, lastKey } from "./inputListener";
import { ctx, canvas } from "./setup";
import { Player } from "./sprites/Player";
import { Sprite } from "./sprites/Sprite";

export const gravityScale = 0.2;
export const velocity: number = 1.3;

export const player = new Player({ position: { x: 30, y: 150 }, velocity: { x: 0, y: 0 }, scale: { width: 15, height: 22 } }, 16)
const scene = new Sprite({ position: { x: 0, y: 0 }, scale: { width: canvas.width, height: canvas.height } }, { texture: '../assets/map/level_0.png' })

function update() {
    window.requestAnimationFrame(update)

    scene.update()
    player.update()

    player.velocity.x = 0
    if (input.a.pressed && lastKey === 'a') player.velocity.x = -velocity
    else if (input.d.pressed && lastKey === 'd') player.velocity.x = velocity

}

update()


