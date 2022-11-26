import { input, lastKey } from "./inputListener";
import { ctx, canvas } from "./setup";
import { Player } from "./sprites/Player";
import { Background } from "./sprites/Background";
import { drawColliders, levels } from "./scenes";
import { Latnern } from "./sprites/Lantern";
import { Door } from "./sprites/Door";

const developmentMode: boolean = false
export let currentScene: number = 3

export const gravityScale: number = 0.1;
export const velocity: number = 1.3;
export const setCurrentScene = (num: number) => currentScene = num

export const player = new Player({ position: { x: 30, y: 150 }, velocity: { x: 0, y: 0 }, scale: { width: 15, height: 22 } },
    {
        idle: { frameRate: 1, frameBuffer: 2, loop: true, imageSrc: '../assets/sprites/brucelee/idleRight.png' },
        idleRight: { frameRate: 1, frameBuffer: 2, loop: true, imageSrc: '../assets/sprites/brucelee/idleRight.png' },
        idleLeft: { frameRate: 1, frameBuffer: 2, loop: false, imageSrc: '../assets/sprites/brucelee/idleLeft.png' },
        walkLeft: { frameRate: 2, frameBuffer: 8, loop: false, imageSrc: '../assets/sprites/brucelee/walkLeft.png' },
        walkRight: { frameRate: 2, frameBuffer: 8, loop: false, imageSrc: '../assets/sprites/brucelee/walkRight.png' },
        jump: { frameRate: 3, frameBuffer: 8, loop: true, imageSrc: '../assets/sprites/brucelee/jump.png' },
        jumpLeft: { frameRate: 2, frameBuffer: 30, loop: true, imageSrc: '../assets/sprites/brucelee/jumpLeft.png' },
        jumpRight: { frameRate: 2, frameBuffer: 30, loop: true, imageSrc: '../assets/sprites/brucelee/jumpRight.png' },
        fall: { frameRate: 1, frameBuffer: 2, loop: true, imageSrc: '../assets/sprites/brucelee/fall.png' },
        climb1: { frameRate: 1, frameBuffer: 2, loop: true, imageSrc: '../assets/sprites/brucelee/climb1.png' },
        climb2: { frameRate: 1, frameBuffer: 2, loop: true, imageSrc: '../assets/sprites/brucelee/climb2.png' },
        lie: { frameRate: 1, frameBuffer: 2, loop: true, imageSrc: '../assets/sprites/brucelee/lie.png' },
    })

const scene = new Background({ position: { x: 0, y: 0 }, scale: { width: canvas.width, height: canvas.height } })
export const temp = { lanterns: [], doors: [] }

renderPrefabs()

function update() {
    window.requestAnimationFrame(update)

    if (player.updateLevel) resetScene()

    scene.update()
    player.update()

    temp.lanterns.map(lantern => lantern.update())
    temp.doors.map(door => door.update())

    if (developmentMode) { drawColliders(currentScene); player.drawHitbox() }

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

export function renderPrefabs() {
    levels[currentScene].lanterns.map(lantern => {
        if (!lantern.collected) {
            const lanternObject = new Latnern(lantern.id, { position: { x: lantern.x, y: lantern.y }, scale: { width: 6, height: 10 } })
            temp.lanterns.push(lanternObject)
        }
    })

    levels[currentScene].triggers.map(trigger => {
        if (trigger.name === 'door') {
            const door = new Door({ position: { x: trigger.x, y: trigger.y }, scale: { width: trigger.width, height: trigger.height } }, { id: trigger.id, model: trigger.model, key: trigger.key })
            temp.doors.push(door)
        }
    })
}

function resetScene() {
    currentScene = player.levelToLoad;
    console.warn('change');
    player.updateLevel = false;
    temp.lanterns = []
    temp.doors = []
    renderPrefabs()
}

update()




