import { input, lastKey } from "./inputListener";
import { ctx, canvas } from "./setup";
import { Player } from "./sprites/Player";
import { Scene } from "./sprites/Scene";



ctx.fillStyle = 'white'
ctx.fillRect(0, 0, canvas.width, canvas.height)

export const gravityScale = 0.2;
export const velocity: number = 1.2;
export const jumpHeight: number = 1.6;

const player = new Player({
    position: { x: 30, y: 150 },
    velocity: { x: 0, y: 0 },
    scale: { width: 16, height: 22 }
})

const scene = new Scene({
    position: { x: 0, y: 0 },
    scale: { width: canvas.width, height: canvas.height }
}, { texture: '../assets/map/test.png' })

function update() {
    window.requestAnimationFrame(update)
    scene.update()

    player.update()
    player.velocity.x = 0

    if (input.a.pressed && lastKey === 'a') player.velocity.x = -velocity
    if (input.d.pressed && lastKey === 'd') player.velocity.x = velocity
    if (input.w.pressed) { player.velocity.y = -jumpHeight; }
}

update()

