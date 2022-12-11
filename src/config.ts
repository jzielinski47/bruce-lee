export const canvas: HTMLCanvasElement = document.querySelector('#canvas');
export const ctx: CanvasRenderingContext2D = canvas.getContext('2d');

export const config = {
    dev: { inDevelopmendMode: false, inColDetectionMode: false, currentScene: 0, launched: false, paused: false, lastPossibleScene: 0 },
    canvas: { width: 320, height: 176 },
    physics: { gravityScale: 0.1, velocity: 1.2, jumpHeight: 1.6, climbSpeed: 4, onWaterSpeed: 0.182 },
    stats: { score: 0, topScore: 0, lives: 5, collectedLanterns: 0, visited: [0] },
}

canvas.width = config.canvas.width;
canvas.height = config.canvas.height;

