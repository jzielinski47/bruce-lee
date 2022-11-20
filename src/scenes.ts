import { canvas, ctx } from "./setup";

// { id: 0, player: true, ninja: false, green: false }

export const levels = [
    {
        id: 0, sprite: '../assets/map/level_0.png', colliders: [
            { id: 0, name: 'floor', x: 0, y: canvas.height - 6, width: canvas.width, height: 6 },
            { id: 1, name: 'fence', x: 0, y: canvas.height - 68, width: 8, height: 68 },
            { id: 2, name: 'fence', x: canvas.width - 8, y: canvas.height - 42, width: 8, height: 36 },
            { id: 3, name: 'platform', x: 0, y: canvas.height - 72, width: 32, height: 8 },
            { id: 4, name: 'platform', x: canvas.width - 118, y: canvas.height - 56, width: 118, height: 14 },
            { id: 5, name: 'platform', x: 0, y: 76, width: 136, height: 4 },
            { id: 6, name: 'platform', x: 176, y: 76, width: 32, height: 4 },
            { id: 7, name: 'platform', x: canvas.width - 70, y: 72, width: 70, height: 16 },
            { id: 8, name: 'prop', x: 10, y: 48, width: 20, height: 32 },
            { id: 9, name: 'border-top', left: 0, y: 0, width: canvas.width, height: 0 },
            { id: 10, name: 'border-left', left: 0, y: 0, width: 0, height: canvas.height }
        ], lanterns: [

        ], triggers: [
            { id: 0, name: 'ladder', x: 144, y: 80, width: 24, height: 58, mode: 'ladder' },
            { id: 1, name: 'loader', x: canvas.width, y: 0, width: 0, height: canvas.height, mode: 'loader', level: 1, dir: 'right' }
        ]
    },
    {
        id: 1, sprite: '../assets/map/level_1.png', colliders: [
            { id: 0, name: 'floor', x: 0, y: canvas.height - 6, width: 150, height: 6 },
            { id: 1, name: 'floor', x: 170, y: canvas.height - 6, width: canvas.width - 170, height: 6 },
            { id: 2, name: 'fence', x: 0, y: canvas.height - 42, width: 8, height: 36 },
            { id: 3, name: 'fence', x: canvas.width - 16, y: canvas.height - 42, width: 8, height: 36 },
            { id: 4, name: 'fence', x: 304, y: 86, width: 8, height: 36 },
            { id: 5, name: 'platform', x: 0, y: 120, width: 126, height: 14 },
            { id: 6, name: 'platform', x: 194, y: 120, width: 126, height: 14 },
            { id: 7, name: 'platform', x: 0, y: 72, width: 78, height: 14 },
            { id: 8, name: 'platform', x: 120, y: 76, width: 24, height: 4 },
            { id: 9, name: 'platform', x: 176, y: 76, width: 24, height: 4 },
            { id: 7, name: 'platform', x: 242, y: 72, width: 78, height: 14 },

        ], lanterns: [

        ], triggers: [
            { id: 0, name: 'ladder', x: 152, y: 80, width: 16, height: 8, mode: 'ladder' },
            { id: 1, name: 'ladder', x: 152, y: 114, width: 16, height: 26, mode: 'ladder' },

            { id: 3, name: 'loader', dir: 'left', x: 0, y: 0, width: 0, height: canvas.height, mode: 'loader', level: 0 },
            { id: 4, name: 'loader', dir: 'right', x: canvas.width, y: 0, width: 0, height: canvas.height, mode: 'loader', level: 2 },
            { id: 5, name: 'loader', dir: 'down', x: 0, y: canvas.height, width: canvas.width, height: 20, mode: 'loader', level: 3, hatch: { x: 56, y: 0, width: 32, heigth: 16 } },

            { id: 6, name: 'door', x: 152, y: canvas.height - 10, width: 20 - 4, height: 10, mode: 'door' },

        ]
    },
    {
        id: 2, sprite: '../assets/map/level_2.png', colliders: [
            { id: 0, name: 'floor', x: 0, y: canvas.height - 6, width: canvas.width, height: 6 },
            { id: 1, name: 'fence', x: 0, y: canvas.height - 42, width: 8, height: 36 },
            { id: 1, name: 'fence', x: 0, y: 86, width: 8, height: 36 },
            { id: 2, name: 'platform', x: 0, y: 120, width: 46, height: 14 },
            { id: 2, name: 'platform', x: 74, y: 120, width: 52, height: 14 },
            { id: 2, name: 'platform', x: 170, y: 120, width: 52, height: 14 },
            { id: 2, name: 'platform', x: 0, y: 72, width: 80, height: 14 },
            { id: 2, name: 'weird-platform', x: 80, y: 74, width: 24, height: 6 },
            { id: 2, name: 'platform', x: 178, y: 72, width: 36, height: 14 },
            { id: 2, name: 'fence', x: 248, y: 80, width: 8, height: 48 },
            { id: 2, name: 'fence', x: 248, y: 80, width: 8, height: 48 },
            { id: 2, name: 'fence', x: 240, y: 74, width: 80, height: 6 },
            { id: 2, name: 'fence', x: canvas.width - 8, y: 80, width: 8, height: 48 },
            { id: 2, name: 'fence', x: canvas.width - 8, y: 80 + 48, width: 8, height: 48 },
            { id: 2, name: 'prop', x: 274, y: 48, width: 20, height: 32 },


        ], lanterns: [

        ], triggers: [
            { id: 0, name: 'ladder', x: 136, y: 78, width: 24, height: 60, mode: 'ladder' },
            { id: 0, name: 'loader', dir: 'left', x: 0, y: 0, width: 0, height: canvas.height, mode: 'loader', level: 1 },
        ]
    },
    {
        id: 3, sprite: '../assets/map/level_3.png', colliders: [
            { id: 0, name: 'platform', x: 32, y: 56, width: 236, height: 6 },
            { id: 0, name: 'platform', x: 8, y: 104, width: 204, height: 6 },
            { id: 0, name: 'floor', x: 0, y: canvas.height - 8, width: canvas.width, height: 8 },
        ], lanterns: [], triggers: []
    }

]



export const drawColliders = (num) => {
    levels[num].colliders.map(col => {
        ctx.fillStyle = 'rgba(0,255,0,0.5)'
        ctx.fillRect(col.x, col.y, col.width, col.height)
    })

    levels[num].triggers.map(col => {
        ctx.fillStyle = 'rgba(0,0,255,0.5)'
        ctx.fillRect(col.x, col.y, col.width, col.height)
    })
}




