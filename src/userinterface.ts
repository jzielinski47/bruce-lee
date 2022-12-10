import { config } from "./config";
import { formatNumber } from "./utils";

const ui: HTMLDivElement = document.querySelector('#ui');
const uiCanvas: HTMLCanvasElement = document.querySelector('#canvas') as HTMLCanvasElement;
ui.style.width = uiCanvas.style.width + 'px';

export const updateUserInterface = () => {
    ui.innerHTML = ''
    const info = [config.dev.currentScene, formatNumber(config.stats.score, 6), 'top', formatNumber(config.stats.topScore, 6), 'falls', formatNumber(config.stats.lives, 2)]
    info.map(i => {
        const div = document.createElement('div')
        div.innerHTML = i.toString().toUpperCase();
        ui.append(div)
    })
}

