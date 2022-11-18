import { canvas, ctx } from "./setup";

export const levels = [
    {
        id: 0, sprite: '../assets/map/level_0.png', colliders: [
            { id: 0, left: 0, right: canvas.width, top: canvas.height - 6, bottom: canvas.height }, // floor on level 0
            { id: 1, left: 0, right: 8, top: canvas.height - 68, bottom: canvas.height }, // left collider
            { id: 2, left: 0, right: 32, top: canvas.height - 72, bottom: canvas.height - 64 }, // left platform (bottom)
            { id: 3, left: canvas.width - 8, right: canvas.width, top: canvas.height - 52, bottom: canvas.height }, // right collider
            { id: 4, left: canvas.width - 118, right: canvas.width, top: canvas.height - 56, bottom: canvas.height - 40 }, // right platform (bottom)
            { id: 5, left: 0, right: 136, top: 76, bottom: 80 }, // top platform (left)
            { id: 6, left: 176, right: 208, top: 76, bottom: 80 }, // top platform (middle)
            { id: 7, left: canvas.width - 70, right: canvas.width, top: 72, bottom: 86 }, // top platform (right)
            { id: 8, left: 10, right: 30, top: 48, bottom: 80 }, // (ten dziwny lampion duzy),
            { id: 9, left: 0, right: canvas.width, top: 0, bottom: 0 }, // top 
            { id: 9, left: 0, right: 0, top: 0, bottom: canvas.height }, // left 
        ], lanterns: [

        ], triggers: [
            { id: 0, left: 144, right: canvas.width - 152, top: 80, bottom: canvas.height - 34, mode: 'ladder' } // drabina
        ]
    }
]



export const drawColliders = () => {
    levels[0].colliders.map(col => {
        ctx.fillStyle = 'rgba(255,0,0,0.5)'
        ctx.fillRect(col.left, col.top, col.right, col.bottom)
    })
}




