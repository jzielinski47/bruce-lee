import { player } from ".";

export const input = {
    a: { pressed: false },
    d: { pressed: false },
    w: { pressed: false },
    s: { pressed: false },
}
export let lastKey: string

window.onkeydown = e => {
    switch (e.key) {
        case "a": case "ArrowLeft": input.a.pressed = true; lastKey = 'a'; player.climbAnimVariant = (player.climbAnimVariant === 1) ? 2 : 1; break;
        case "d": case "ArrowRight": input.d.pressed = true; lastKey = 'd'; player.climbAnimVariant = (player.climbAnimVariant === 1) ? 2 : 1; break;
        case "w": case "ArrowUp": player.jump(); break;
        case "s": case "ArrowDown": player.down(); break;
    }
}

window.onkeyup = e => {
    switch (e.key) {
        case "a": case "ArrowLeft": input.a.pressed = false; break;
        case "d": case "ArrowRight": input.d.pressed = false; break;
    }
}

