import { player } from ".";
import { config } from "./config";

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
        case "a": case "ArrowLeft": if (player.velocity.y === 0 || player.velocity.y === config.physics.gravityScale || player.triggers.onLadder) { input.a.pressed = true; lastKey = 'a'; } player.climbAnimVariant = (player.climbAnimVariant === 1) ? 2 : 1; break;
        case "d": case "ArrowRight": if (player.velocity.y === 0 || player.velocity.y === config.physics.gravityScale || player.triggers.onLadder) { input.d.pressed = true; lastKey = 'd'; } player.climbAnimVariant = (player.climbAnimVariant === 1) ? 2 : 1; break;
        case "w": case "ArrowUp": input.w.pressed = true; player.jump(); break;
        case "s": case "ArrowDown": input.s.pressed = true; player.down(); break;
        case "f": player.attack(); break;
    }
}

window.onkeyup = (e: KeyboardEvent) => {
    switch (e.key) {
        case "w": case "ArrowUp": input.w.pressed = false; break;
        case "a": case "ArrowLeft": input.a.pressed = false; break;
        case "d": case "ArrowRight": input.d.pressed = false; break;
        case "s": case "ArrowDown": input.s.pressed = false; player.triggers.isCrouch = false; break;
    }
}