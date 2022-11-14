export const canvas: HTMLCanvasElement = document.querySelector('#canvas')
export const ctx: CanvasRenderingContext2D = canvas.getContext('2d');

const settings = { width: 320, height: 176 }

canvas.width = settings.width;
canvas.height = settings.height

const bar: HTMLDivElement = document.querySelector('#bar')
bar.style.width = settings.width + 'px';

const score = '000000'
const top = '000000'
const falls = '00'

const data = ['1UP', score, 'TOP', top, 'FALLS', falls]
data.map(el => {
    const div = document.createElement('div')
    div.innerHTML = el
    bar.append(div)
})

