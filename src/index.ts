import { input, lastKey } from "./inputListener";
import { ctx, canvas } from "./setup";
import { Player } from "./sprites/Player";
import { Background } from "./sprites/Background";
import { drawColliders, levels } from "./scenes";

export const gravityScale = 0.1;
export const velocity: number = 1.3;
export let currentScene = 0
export const setCurrentScene = (num: number) => currentScene = num

export const player = new Player({ position: { x: 30, y: 150 }, velocity: { x: 0, y: 0 }, scale: { width: 15, height: 22 } },
    {
        idleRight: { frameRate: 1, frameBuffer: 2, loop: true, imageSrc: '../assets/sprites/brucelee/idleRight.png' },
        idleLeft: { frameRate: 1, frameBuffer: 2, loop: false, imageSrc: '../assets/sprites/brucelee/idleLeft.png' },
        walkLeft: { frameRate: 2, frameBuffer: 8, loop: false, imageSrc: '../assets/sprites/brucelee/walkLeft.png' },
        walkRight: { frameRate: 2, frameBuffer: 8, loop: false, imageSrc: '../assets/sprites/brucelee/walkRight.png' },
        jump: { frameRate: 3, frameBuffer: 8, loop: true, imageSrc: '../assets/sprites/brucelee/jump.png' },
        jumpLeft: { frameRate: 2, frameBuffer: 12, loop: true, imageSrc: '../assets/sprites/brucelee/jumpLeft.png' },
        jumpRight: { frameRate: 2, frameBuffer: 12, loop: true, imageSrc: '../assets/sprites/brucelee/jumpRight.png' },
        fall: { frameRate: 1, frameBuffer: 2, loop: true, imageSrc: '../assets/sprites/brucelee/fall.png' },
        climb1: { frameRate: 1, frameBuffer: 2, loop: true, imageSrc: '../assets/sprites/brucelee/climb1.png' },
        climb2: { frameRate: 1, frameBuffer: 2, loop: true, imageSrc: '../assets/sprites/brucelee/climb2.png' },
    })

const scene = new Background({ position: { x: 0, y: 0 }, scale: { width: canvas.width, height: canvas.height } })

function update() {
    window.requestAnimationFrame(update)

    // console.log(player.updateLevel)
    if (player.updateLevel) { currentScene = player.levelToLoad; console.warn('change'); player.updateLevel = false; }

    scene.update()
    player.update()

    // drawColliders()
    player.velocity.x = 0
    if (input.a.pressed && lastKey === 'a') { player.velocity.x = -velocity; player.switchSprite('walkLeft') }
    else if (input.d.pressed && lastKey === 'd') { player.velocity.x = velocity; player.switchSprite('walkRight') }

    if (player.velocity.y < 0 && input.a.pressed && lastKey === 'a') { player.switchSprite('jumpLeft') }
    else if (player.velocity.y < 0 && input.d.pressed && lastKey === 'd') { player.switchSprite('jumpRight') }
    else if (player.velocity.y < 0) { player.switchSprite('fall') }
    else if (player.velocity.y > gravityScale + 0.3) { player.switchSprite('fall') }

    if (player.triggers.onLadder && player.climbAnimVariant === 1) { player.switchSprite('climb2'); }
    else if (player.triggers.onLadder && player.climbAnimVariant === 2) { player.switchSprite('climb1'); }



}

update()




