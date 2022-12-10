import { canvas, config } from "./config"
import { input, lastKey } from "./controls"
import { drawColliders, scenes } from "./scenes"
import { Background } from "./sprites/Background"
import { Door } from "./sprites/Door"
import { Latnern } from "./sprites/Lantern"
import { Enemy } from "./sprites/Enemy"
import { Player } from "./sprites/Player"
import { Prefab } from "./sprites/Prefab"
import { updateUserInterface } from "./userinterface"
import { vectorDistance } from "./utils"

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
        lieLeft: { frameRate: 1, frameBuffer: 2, loop: true, imageSrc: '../assets/sprites/brucelee/lieLeft.png' },
        lieRight: { frameRate: 1, frameBuffer: 2, loop: true, imageSrc: '../assets/sprites/brucelee/lieRight.png' },
        attackLeft: { frameRate: 1, frameBuffer: 2, loop: true, imageSrc: '../assets/sprites/brucelee/attackLeft.png' },
        attackRight: { frameRate: 1, frameBuffer: 2, loop: true, imageSrc: '../assets/sprites/brucelee/attackRight.png' },
        attack2Left: { frameRate: 2, frameBuffer: 16, loop: true, imageSrc: '../assets/sprites/brucelee/attack2Left.png' },
        attack2Right: { frameRate: 2, frameBuffer: 16, loop: true, imageSrc: '../assets/sprites/brucelee/attack2Right.png' },
    })

const ninja = new Enemy('ninja', { position: { x: 270, y: 20 }, velocity: { x: 0, y: 0 }, scale: { width: 28, height: 21 } },
    {
        idle: { frameRate: 1, frameBuffer: 2, loop: true, imageSrc: '../assets/sprites/ninja/idleRight.png' },
        idleRight: { frameRate: 1, frameBuffer: 2, loop: true, imageSrc: '../assets/sprites/ninja/idleRight.png' },
        idleLeft: { frameRate: 1, frameBuffer: 2, loop: false, imageSrc: '../assets/sprites/ninja/idleLeft.png' },
        walkLeft: { frameRate: 2, frameBuffer: 16, loop: false, imageSrc: '../assets/sprites/ninja/walkLeft.png' },
        walkRight: { frameRate: 2, frameBuffer: 16, loop: false, imageSrc: '../assets/sprites/ninja/walkRight.png' },
        fall: { frameRate: 1, frameBuffer: 2, loop: true, imageSrc: '../assets/sprites/ninja/fall.png' },
        attackLeft: { frameRate: 2, frameBuffer: 14, loop: true, imageSrc: '../assets/sprites/ninja/attackLeft.png' },
        attackRight: { frameRate: 2, frameBuffer: 14, loop: true, imageSrc: '../assets/sprites/ninja/attackRight.png' },
    })

const sumo = new Enemy('sumo', { position: { x: 230, y: 20 }, velocity: { x: 0, y: 0 }, scale: { width: 28, height: 21 } },
    {
        idle: { frameRate: 2, frameBuffer: 2, loop: true, imageSrc: '../assets/sprites/sumo/idleRight.png' },
        idleRight: { frameRate: 2, frameBuffer: 60, loop: true, imageSrc: '../assets/sprites/sumo/idleRight.png' },
        idleLeft: { frameRate: 2, frameBuffer: 60, loop: false, imageSrc: '../assets/sprites/sumo/idleLeft.png' },
        walkLeft: { frameRate: 2, frameBuffer: 16, loop: false, imageSrc: '../assets/sprites/sumo/walkLeft.png' },
        walkRight: { frameRate: 2, frameBuffer: 16, loop: false, imageSrc: '../assets/sprites/sumo/walkRight.png' },
        fall: { frameRate: 1, frameBuffer: 2, loop: true, imageSrc: '../assets/sprites/sumo/fall.png' },
        attackLeft: { frameRate: 2, frameBuffer: 14, loop: true, imageSrc: '../assets/sprites/sumo/attackLeft.png' },
        attackRight: { frameRate: 2, frameBuffer: 14, loop: true, imageSrc: '../assets/sprites/sumo/attackRight.png' },
    })

const scene = new Background({ position: { x: 0, y: 0 }, scale: { width: canvas.width, height: canvas.height } })

export const temp = { lanterns: [], doors: [], waterfalls: [] }

const start = () => {
    updateUserInterface()
    loadScenePresets()
}

const update = () => {
    window.requestAnimationFrame(update)

    if (player.updateLevel) resetScene()
    scene.update()

    temp.lanterns.map(lantern => lantern.update())
    temp.doors.map(door => door.update())
    temp.waterfalls.map(water => water.update())

    sumo.update()
    ninja.update()
    player.update()

    config.dev.inDevelopmendMode ? drawColliders(config.dev.currentScene) : null

}

export function loadScenePresets() {

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
    config.dev.currentScene = player.levelToLoad;
    console.warn('change');
    player.updateLevel = false;
    temp.lanterns = []
    temp.doors = []
    temp.waterfalls = []
    loadScenePresets()
}

start()
update()