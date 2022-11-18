import { input, lastKey } from "./inputListener";
import { ctx, canvas } from "./setup";
import { Player } from "./sprites/Player";
import { Background } from "./sprites/Background";
import { drawColliders, levels } from "./scenes";

export const gravityScale = 0.2;
export const velocity: number = 1.3;
export let currentScene = 0

export const player = new Player({ position: { x: 30, y: 150 }, velocity: { x: 0, y: 0 }, scale: { width: 15, height: 22 } },
    {
        idle: { frameRate: 1, frameBuffer: 2, loop: true, imageSrc: '../assets/sprites/brucelee/idle.png' },
        walkLeft: { frameRate: 2, frameBuffer: 8, loop: true, imageSrc: '../assets/sprites/brucelee/walkLeft.png' },
        walkRight: { frameRate: 2, frameBuffer: 8, loop: true, imageSrc: '../assets/sprites/brucelee/walkRight.png' }
    })

const scene = new Background({ position: { x: 0, y: 0 }, scale: { width: canvas.width, height: canvas.height } })

function update() {
    window.requestAnimationFrame(update)

    scene.update()
    player.update()

    // drawColliders()
    player.velocity.x = 0
    if (input.a.pressed && lastKey === 'a') { player.velocity.x = -velocity; player.switchSprite('walkLeft') }
    else if (input.d.pressed && lastKey === 'd') { player.velocity.x = velocity; player.switchSprite('walkRight') }

}

update()


