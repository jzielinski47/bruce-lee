import { player } from ".";

export const input = {
    a: { pressed: false },
    d: { pressed: false },
    w: { pressed: false },
    s: { pressed: false },
}
export let lastKey: string;

window.onkeydown = (e: KeyboardEvent) => {
    console.log(e.key)

    switch (e.key) {
        case "a": case "ArrowLeft": input.a.pressed = true; lastKey = 'a'; player.climbAnimVariant = (player.climbAnimVariant === 1) ? 2 : 1; break;
        case "d": case "ArrowRight": input.d.pressed = true; lastKey = 'd'; player.climbAnimVariant = (player.climbAnimVariant === 1) ? 2 : 1; break;
        case "w": case "ArrowUp": player.jump(); break;
        case "s": case "ArrowDown": input.s.pressed = true; player.down(); break;
        case "Control": player.attack(); break;
    }
}

window.onkeyup = (e: KeyboardEvent) => {
    switch (e.key) {
        case "a": case "ArrowLeft": input.a.pressed = false; break;
        case "d": case "ArrowRight": input.d.pressed = false; break;
        case "s": case "ArrowDown": input.s.pressed = false; player.triggers.isCrouch = false; break;
    }
}