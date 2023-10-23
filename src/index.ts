import { canvas, config } from "./config"
import { drawColliders, scenes } from "./scenes"
import { Background } from "./sprites/Background"
import { Door } from "./sprites/Door"
import { Latnern } from "./sprites/Lantern"
import { Enemy } from "./sprites/Enemy"
import { Player } from "./sprites/Player"
import { Prefab } from "./sprites/Prefab"
import { updateUserInterface } from "./userinterface"
import { getRandomFloat, vectorDistance } from "./utils"
import { Trap } from "./sprites/Trap"

export const player = new Player({ position: scenes[config.dev.currentScene].defaultPlayerPosition, velocity: { x: 0, y: 0 }, scale: { width: 15, height: 22 } },
    {
        idle: { frameRate: 1, frameBuffer: 2, loop: true, imageSrc: '../assets/sprites/brucelee/idleRight.jpg' },
        idleRight: { frameRate: 1, frameBuffer: 2, loop: true, imageSrc: '../assets/sprites/brucelee/idleRight.jpg' },
        idleLeft: { frameRate: 1, frameBuffer: 2, loop: false, imageSrc: '../assets/sprites/brucelee/idleLeft.jpg' },
        walkLeft: { frameRate: 2, frameBuffer: 6, loop: false, imageSrc: '../assets/sprites/brucelee/walkLeft.jpg' },
        walkRight: { frameRate: 2, frameBuffer: 6, loop: false, imageSrc: '../assets/sprites/brucelee/walkRight.jpg' },
        jump: { frameRate: 3, frameBuffer: 8, loop: true, imageSrc: '../assets/sprites/brucelee/jump.jpg' },
        jumpLeft: { frameRate: 2, frameBuffer: 16, loop: true, imageSrc: '../assets/sprites/brucelee/jumpLeft.jpg' },
        jumpRight: { frameRate: 2, frameBuffer: 16, loop: true, imageSrc: '../assets/sprites/brucelee/jumpRight.jpg' },
        fall: { frameRate: 1, frameBuffer: 2, loop: true, imageSrc: '../assets/sprites/brucelee/fall.jpg' },
        climb1: { frameRate: 1, frameBuffer: 2, loop: true, imageSrc: '../assets/sprites/brucelee/climb1.jpg' },
        climb2: { frameRate: 1, frameBuffer: 2, loop: true, imageSrc: '../assets/sprites/brucelee/climb2.jpg' },
        lieLeft: { frameRate: 1, frameBuffer: 2, loop: true, imageSrc: '../assets/sprites/brucelee/lieLeft.jpg' },
        lieRight: { frameRate: 1, frameBuffer: 2, loop: true, imageSrc: '../assets/sprites/brucelee/lieRight.jpg' },
        attackLeft: { frameRate: 1, frameBuffer: 2, loop: true, imageSrc: '../assets/sprites/brucelee/attackLeft.jpg' },
        attackRight: { frameRate: 1, frameBuffer: 2, loop: true, imageSrc: '../assets/sprites/brucelee/attackRight.jpg' },
        attack2Left: { frameRate: 2, frameBuffer: 16, loop: true, imageSrc: '../assets/sprites/brucelee/attack2Left.jpg' },
        attack2Right: { frameRate: 2, frameBuffer: 16, loop: true, imageSrc: '../assets/sprites/brucelee/attack2Right.jpg' },
        hitLeft: { frameRate: 2, frameBuffer: 14, loop: true, imageSrc: '../assets/sprites/brucelee/hitLeft.jpg' },
        hitRight: { frameRate: 2, frameBuffer: 14, loop: true, imageSrc: '../assets/sprites/brucelee/hitRight.jpg' },
    })

export const ninja = new Enemy('ninja', { position: { x: 270, y: 20 }, velocity: { x: 0, y: 0 }, scale: { width: 28, height: 21 } },
    {
        idle: { frameRate: 1, frameBuffer: 2, loop: true, imageSrc: '../assets/sprites/ninja/idleRight.jpg' },
        idleRight: { frameRate: 1, frameBuffer: 2, loop: true, imageSrc: '../assets/sprites/ninja/idleRight.jpg' },
        idleLeft: { frameRate: 1, frameBuffer: 2, loop: false, imageSrc: '../assets/sprites/ninja/idleLeft.jpg' },
        walkLeft: { frameRate: 2, frameBuffer: 16, loop: false, imageSrc: '../assets/sprites/ninja/walkLeft.jpg' },
        walkRight: { frameRate: 2, frameBuffer: 16, loop: false, imageSrc: '../assets/sprites/ninja/walkRight.jpg' },
        fall: { frameRate: 1, frameBuffer: 2, loop: true, imageSrc: '../assets/sprites/ninja/fall.jpg' },
        attackLeft: { frameRate: 2, frameBuffer: 14, loop: true, imageSrc: '../assets/sprites/ninja/attackLeft.jpg' },
        attackRight: { frameRate: 2, frameBuffer: 14, loop: true, imageSrc: '../assets/sprites/ninja/attackRight.jpg' },
        hitLeft: { frameRate: 2, frameBuffer: 14, loop: true, imageSrc: '../assets/sprites/ninja/hitLeft.jpg' },
        hitRight: { frameRate: 2, frameBuffer: 14, loop: true, imageSrc: '../assets/sprites/ninja/hitRight.jpg' },
    })

export const sumo = new Enemy('sumo', { position: { x: 230, y: 20 }, velocity: { x: 0, y: 0 }, scale: { width: 28, height: 21 } },
    {
        idle: { frameRate: 2, frameBuffer: 2, loop: true, imageSrc: '../assets/sprites/sumo/idleRight.jpg' },
        idleRight: { frameRate: 2, frameBuffer: 60, loop: true, imageSrc: '../assets/sprites/sumo/idleRight.jpg' },
        idleLeft: { frameRate: 2, frameBuffer: 60, loop: false, imageSrc: '../assets/sprites/sumo/idleLeft.jpg' },
        walkLeft: { frameRate: 2, frameBuffer: 16, loop: false, imageSrc: '../assets/sprites/sumo/walkLeft.jpg' },
        walkRight: { frameRate: 2, frameBuffer: 16, loop: false, imageSrc: '../assets/sprites/sumo/walkRight.jpg' },
        fall: { frameRate: 1, frameBuffer: 2, loop: true, imageSrc: '../assets/sprites/sumo/fall.jpg' },
        attackLeft: { frameRate: 2, frameBuffer: 14, loop: true, imageSrc: '../assets/sprites/sumo/attackLeft.jpg' },
        attackRight: { frameRate: 2, frameBuffer: 14, loop: true, imageSrc: '../assets/sprites/sumo/attackRight.jpg' },
        hitLeft: { frameRate: 2, frameBuffer: 14, loop: true, imageSrc: '../assets/sprites/sumo/hitLeft.jpg' },
        hitRight: { frameRate: 2, frameBuffer: 14, loop: true, imageSrc: '../assets/sprites/sumo/hitRight.jpg' },
    })

while (Math.abs(sumo.safeDistance - ninja.safeDistance) < 6) {
    sumo.safeDistance = 15 + getRandomFloat(0, 15, 3)
    ninja.safeDistance = 15 + getRandomFloat(0, 15, 3)
}

const scene = new Background({ position: { x: 0, y: 0 }, scale: { width: canvas.width, height: canvas.height } })
export const temp = { lanterns: [], doors: [], waterfalls: [], traps: [] }

const start = () => {
    updateUserInterface()
    loadScenePresets()

    ninja.destroy()
    sumo.destroy()

    update()
}

const update = () => {
    window.requestAnimationFrame(update)

    if (player.updateLevel) resetScene()

    scene.update()

    if (config.dev.launched) {
        if (!config.dev.paused) {
            temp.lanterns.map(lantern => lantern.update())
            temp.doors.map(door => door.update())
            temp.waterfalls.map(water => water.update())
            temp.traps.map(trap => trap.update())

            ninja.update()
            sumo.update()
            player.update()

            config.dev.inDevelopmendMode ? drawColliders(config.dev.currentScene) : null
        } else {
            config.stats.lives > 0 ? setTimeout(() => openLastLoadedScene(), 3000) : loadStartScreen()
        }
    } else { loadStartScreen() }

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
                { idle: { frameRate: 9, frameBuffer: 10, loop: true, imageSrc: '../assets/sprites/water/water-' + trigger.model + '-' + trigger.dir + '.jpg' } })
            temp.waterfalls.push(waterObject)
        }
    })

    scenes[config.dev.currentScene].traps.map(trap => {
        if (trap.mode === 'trap') {
            const trapObject = new Trap({ position: { x: trap.x, y: trap.y }, scale: { width: trap.width, height: trap.height } },
                { idle: { frameRate: 1, frameBuffer: 2, loop: true, imageSrc: '../assets/sprites/trap/model_' + trap.model + '.jpg' } }, trap.dmg, trap.timeout)
            temp.traps.push(trapObject)
        }
    })

}

function resetScene() {
    player.levelToLoad !== 9 ? config.dev.lastPossibleScene = player.levelToLoad : null
    config.dev.currentScene = player.levelToLoad;
    config.stats.visited.push(config.dev.currentScene)
    console.warn('scene change');
    config.stats.score += !config.stats.visited.includes(config.dev.currentScene) ? 2000 : 0
    player.updateLevel = false;
    temp.lanterns = []
    temp.doors = []
    temp.waterfalls = []
    temp.traps = []
    config.stats.topScore = config.stats.score
    ninja.destroy()
    sumo.destroy()

    updateUserInterface()
    loadScenePresets()
}

const openLastLoadedScene = () => {
    config.dev.paused = false
    config.dev.currentScene = config.dev.lastPossibleScene
    player.updateLevel = false;
    console.log('player is about to be revived');
    player.revive()
    temp.lanterns = []
    temp.doors = []
    temp.waterfalls = []
    temp.traps = []
    ninja.destroy()
    sumo.destroy()

    updateUserInterface()
    loadScenePresets()
}

const loadStartScreen = () => { config.dev.currentScene = 10; updateUserInterface() }


// !config.dev.launched ? window.onclick = () => (document.querySelector('#soundtrack') as HTMLAudioElement).play()
// : (document.querySelector('#soundtrack') as HTMLAudioElement).pause()


start()

