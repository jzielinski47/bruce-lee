import { canvas, config } from "./config"
import { input, lastKey } from "./controls"
import { drawColliders, scenes } from "./scenes"
import { Background } from "./sprites/Background"
import { Door } from "./sprites/Door"
import { Latnern } from "./sprites/Lantern"
import { Ninja } from "./sprites/Ninja"
import { Player } from "./sprites/Player"
import { Prefab } from "./sprites/Prefab"
import { updateUserInterface } from "./userinterface"

export const player = new Player({ position: { x: 30, y: 150 }, velocity: { x: 0, y: 0 }, scale: { width: 15, height: 22 } },
    {
        idle: { frameRate: 1, frameBuffer: 2, loop: true, imageSrc: '../assets/sprites/brucelee/idleRight.png' },
        idleRight: { frameRate: 1, frameBuffer: 2, loop: true, imageSrc: '../assets/sprites/brucelee/idleRight.png' },
        idleLeft: { frameRate: 1, frameBuffer: 2, loop: false, imageSrc: '../assets/sprites/brucelee/idleLeft.png' },
        walkLeft: { frameRate: 2, frameBuffer: 6, loop: false, imageSrc: '../assets/sprites/brucelee/walkLeft.png' },
        walkRight: { frameRate: 2, frameBuffer: 6, loop: false, imageSrc: '../assets/sprites/brucelee/walkRight.png' },
        jump: { frameRate: 3, frameBuffer: 8, loop: true, imageSrc: '../assets/sprites/brucelee/jump.png' },
        jumpLeft: { frameRate: 2, frameBuffer: 16, loop: true, imageSrc: '../assets/sprites/brucelee/jumpLeft.png' },
        jumpRight: { frameRate: 2, frameBuffer: 16, loop: true, imageSrc: '../assets/sprites/brucelee/jumpRight.png' },
        fall: { frameRate: 1, frameBuffer: 2, loop: true, imageSrc: '../assets/sprites/brucelee/fall.png' },
        climb1: { frameRate: 1, frameBuffer: 2, loop: true, imageSrc: '../assets/sprites/brucelee/climb1.png' },
        climb2: { frameRate: 1, frameBuffer: 2, loop: true, imageSrc: '../assets/sprites/brucelee/climb2.png' },
        lie: { frameRate: 1, frameBuffer: 2, loop: true, imageSrc: '../assets/sprites/brucelee/lie.png' },
    })

const ninja = new Ninja({ position: { x: 270, y: 20 }, velocity: { x: 0, y: 0 }, scale: { width: 15, height: 22 } },
    {
        idle: { frameRate: 1, frameBuffer: 2, loop: true, imageSrc: '../assets/sprites/ninja/idleRight.png' },
        idleRight: { frameRate: 1, frameBuffer: 2, loop: true, imageSrc: '../assets/sprites/ninja/idleRight.png' },
        idleLeft: { frameRate: 1, frameBuffer: 2, loop: false, imageSrc: '../assets/sprites/ninja/idleLeft.png' },
    })

const scene = new Background({ position: { x: 0, y: 0 }, scale: { width: canvas.width, height: canvas.height } })
export const temp = { lanterns: [], doors: [], waterfalls: [] }
let lastPossibleScene: number = config.dev.currentScene;
renderPrefabs()

const start = () => {
    updateUserInterface()
}

const update = () => {
    window.requestAnimationFrame(update)

    if (player.updateLevel) resetScene()

    scene.update()

    if (config.dev.currentScene !== 9) {
        temp.lanterns.map(lantern => lantern.update())
        temp.doors.map(door => door.update())
        temp.waterfalls.map(water => water.update())

        player.update()
        ninja.update()

        if (config.dev.inDevelopmendMode) { drawColliders(config.dev.currentScene); player.drawHitbox() }

        player.velocity.x = 0
        ninja.velocity.x = 0

        // && (player.velocity.y === gravityScale || player.velocity.y === 0)
        if (input.a.pressed && lastKey === 'a') { player.velocity.x = -config.physics.velocity; player.switchSprite('walkLeft') }
        else if (input.d.pressed && lastKey === 'd') { player.velocity.x = config.physics.velocity; player.switchSprite('walkRight') }

        if (player.velocity.y < 0 && input.a.pressed && lastKey === 'a') { player.velocity.x = -config.physics.velocity * 0.8; player.switchSprite('jumpLeft') }
        else if (player.velocity.y < 0 && input.d.pressed && lastKey === 'd') { player.velocity.x = config.physics.velocity * 0.8; player.switchSprite('jumpRight') }
        else if (player.velocity.y < 0) { player.switchSprite('fall') }
        else if (player.velocity.y > config.physics.gravityScale + 0.3) { player.switchSprite('fall') }


        if (input.a.pressed && lastKey === 'a' && player.triggers.onLadder) { player.velocity.x = -config.physics.velocity * 0.7; }
        else if (input.d.pressed && lastKey === 'd' && player.triggers.onLadder) { player.velocity.x = config.physics.velocity * 0.7; }
        if (player.triggers.onLadder && player.climbAnimVariant === 1) { player.switchSprite('climb2'); }
        else if (player.triggers.onLadder && player.climbAnimVariant === 2) { player.switchSprite('climb1'); }
    } else {
        setTimeout(() => announceDead(), 3000)
    }

}

export function renderPrefabs() {
    scenes[config.dev.currentScene].lanterns.map(lantern => {
        if (!lantern.collected) {
            const lanternObject = new Latnern({ position: { x: lantern.x, y: lantern.y }, scale: { width: 6, height: 10 } }, { id: lantern.id, door: lantern.door })
            temp.lanterns.push(lanternObject)
        }
    })

    scenes[config.dev.currentScene].triggers.map(trigger => {
        if (trigger.name === 'door') {
            const door = new Door({ position: { x: trigger.x, y: trigger.model === 0 ? trigger.y - 4 : trigger.y }, scale: { width: trigger.width, height: trigger.height } },
                { id: trigger.id, model: trigger.model, key: trigger.key, keyOpened: trigger.keyOpened })

            temp.doors.push(door)
        }
        if (trigger.name === 'water') {
            const waterObject = new Prefab({ position: { x: trigger.x, y: trigger.y }, scale: { width: trigger.width, height: trigger.height } },
                { idle: { frameRate: 9, frameBuffer: 10, loop: true, imageSrc: '../assets/sprites/water/water-' + trigger.model + '-' + trigger.dir + '.png' } })
            temp.waterfalls.push(waterObject)
        }
    })

}

function resetScene() {
    if (player.levelToLoad !== 9) lastPossibleScene = config.dev.currentScene
    config.dev.currentScene = player.levelToLoad;
    console.warn('change');
    player.updateLevel = false;
    temp.lanterns = []
    temp.doors = []
    temp.waterfalls = []
    renderPrefabs()
}

function announceDead() {
    if (config.stats.lives > 0) {
        player.levelToLoad = lastPossibleScene
        config.dev.currentScene = player.levelToLoad;
        console.warn('respawn');
        // player.position.y = 16;
        // player.position.y;
        player.updateLevel = false;
        temp.lanterns = []
        temp.doors = []
        temp.waterfalls = []
        renderPrefabs()
    }
}

start()
update()