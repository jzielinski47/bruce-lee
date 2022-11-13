import { canvas } from "./setup";

export const colliders = {
    level0: [
        { id: 0, left: 0, right: 8, top: canvas.height - 72, bottom: canvas.height },
        { id: 1, left: canvas.width - 8, right: canvas.width, top: canvas.height - 46, bottom: canvas.height },
        { id: 2, left: 0, right: canvas.width, top: canvas.height - 10, bottom: canvas.height },
        { id: 3, left: 204, right: canvas.width, top: canvas.height - 60, bottom: canvas.height - 46 },
        { id: 4, left: 0, right: 32, top: canvas.height - 76, bottom: canvas.height - 68 },
        { id: 5, left: 0, right: 136, top: 86, bottom: 90 },
        { id: 6, left: 176, right: 208, top: 86, bottom: 90 },
        { id: 7, left: 10, right: 30, top: 58, bottom: 90 },
        { id: 8, left: canvas.width - 68, right: canvas.width, top: 82, bottom: 96 }
    ]
}

