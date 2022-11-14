export const canvas: HTMLCanvasElement = document.querySelector('#canvas')
export const ctx: CanvasRenderingContext2D = canvas.getContext('2d');

const settings = { width: 320, height: 176 }

canvas.width = settings.width;
canvas.height = settings.height

const bar: HTMLDivElement = document.querySelector('#bar')
bar.style.width = settings.width + 'px';
