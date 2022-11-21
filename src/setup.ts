import { Stats } from "./types/types";

export const canvas: HTMLCanvasElement = document.querySelector('#canvas')
export const ctx: CanvasRenderingContext2D = canvas.getContext('2d');

const settings = { width: 320, height: 176 }

canvas.width = settings.width;
canvas.height = settings.height

const bar: HTMLDivElement = document.querySelector('#bar')
bar.style.width = settings.width + 'px';

export const stats: Stats = { score: 0, top: 0, falls: 0 }

let data = ['1UP', resetZeros(stats.score, 6), 'TOP', resetZeros(stats.top, 6), 'FALLS', resetZeros(stats.falls, 2)]
data.map(el => {
    const div = document.createElement('div')
    div.innerHTML = el
    bar.append(div)
})

export function updateStats() {
    bar.innerHTML = ''
    let data = ['1UP', resetZeros(stats.score, 6), 'TOP', resetZeros(stats.top, 6), 'FALLS', resetZeros(stats.falls, 2)]
    data.map(el => {
        const div = document.createElement('div')
        div.innerHTML = el
        bar.append(div)
    })
}

function resetZeros(num: number, max: number) {
    let string: string = ''
    if (num.toString().length < max) {
        for (let i = 0; i < max - num.toString().length; i++) {
            string += '0'
        }
    }
    string += num.toString()
    return string
}