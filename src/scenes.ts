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
            { id: 0, name: 'ladder', x: 144, y: 80, width: 8, height: 58, mode: 'ladder' },
            { id: 1, name: 'loader', x: canvas.width, y: 0, width: 0, height: canvas.height, mode: 'loader', level: 1, dir: 'right' }
        ]
    },
    {
        id: 1, sprite: '../assets/map/level_1.png', colliders: [
            { id: 0, left: 0, right: 150, top: canvas.height - 6, bottom: canvas.height }, // floor 1 on level 1
            { id: 1, left: 170, right: canvas.width, top: canvas.height - 6, bottom: canvas.height }, // floor 2 on level 1
            { id: 2, left: 0, right: 8, top: canvas.height - 42, bottom: canvas.height }, // left collider
            { id: 3, left: 0, right: 124, top: canvas.height - 56, bottom: canvas.height - 42 }, // left platform (bottom)    
            { id: 4, left: 0, right: 78, top: 72, bottom: 86 }, // left platform (top)      
            { id: 4, left: canvas.width - 78, right: canvas.width, top: 72, bottom: 86 }, // right platform (top)
            { id: 4, left: 112 + 8, right: 144, top: 76, bottom: 80 }, // middle platform (top-left)
            { id: 4, left: 176, right: canvas.width - 112 - 8, top: 76, bottom: 80 }, // middle platform (top-right)
            { id: 4, left: canvas.width - 124, right: canvas.width, top: 120, bottom: canvas.height - 42 }, // right platform (bottom)
            { id: 0, left: canvas.width - 16, right: canvas.width - 8, top: 86, bottom: 120 }, // right collider (top)
            { id: 0, left: canvas.width - 16, right: canvas.width - 8, top: 134, bottom: canvas.height - 6 }, // right collider (bottom)
            { id: 0, left: 0, right: 0, top: 0, bottom: 0 },
            // { id: 4, left: 0, right: canvas.width, top: 0, bottom: 0 }, // top 

        ], lanterns: [

        ], triggers: [
            { id: 0, left: 152, right: 168, top: canvas.height - 64, bottom: canvas.height - 36, mode: 'ladder' },
            { id: 1, left: 152, right: 168, top: 80, bottom: 86, mode: 'ladder' },
            { id: 3, left: 0, right: 0, top: 0, bottom: canvas.height, mode: 'loader', level: 0, dir: 'left' }, // left 
            { id: 4, left: canvas.width, right: canvas.width, top: 0, bottom: canvas.height, mode: 'loader', level: 2, dir: 'right' },
            { id: 5, left: 0, right: canvas.width, top: canvas.height, bottom: canvas.height, mode: 'loader', level: 3, dir: 'down', hatch: { x: 56, y: 0, width: 32, heigth: 16 } },
            { id: 6, left: 152, right: 168, top: canvas.height - 10, bottom: canvas.height, mode: 'door' }
        ]
    },
    {
        id: 2, sprite: '../assets/map/level_2.png', colliders: [
            { id: 0, left: 0, right: canvas.width, top: canvas.height - 6, bottom: canvas.height }, // floor 1 on level 1
        ], lanterns: [

        ], triggers: [
            { id: 2, left: 0, right: 0, top: 0, bottom: canvas.height, mode: 'loader', level: 1, dir: 'l' }, // left 
        ]
    },
    {
        id: 3, sprite: '../assets/map/level_3.png', colliders: [
            { id: 0, left: 0, right: canvas.width, top: canvas.height - 6, bottom: canvas.height }, // floor 1 on level 1
        ], lanterns: [

        ], triggers: [
            { id: 2, left: 0, right: 0, top: 0, bottom: canvas.height, mode: 'loader', level: 1, dir: 'l' }, // left 
        ]
    }

]



export const drawColliders = () => {
    levels[0].colliders.map(col => {
        ctx.fillStyle = 'rgba(255,0,0,0.5)'
        ctx.fillRect(col.left, col.top, col.right, col.bottom)
    })
}




