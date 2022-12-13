import { player } from ".";
import { config } from "./config";
import { updateUserInterface } from "./userinterface";

export const input = {
    a: { pressed: false },
    d: { pressed: false },
    w: { pressed: false },
    s: { pressed: false },
}
export let lastKey: string;

window.onkeydown = (e: KeyboardEvent) => {

    switch (e.key.toLowerCase()) {
        case "a": case "arrowleft": if (player.velocity.y === 0 || player.velocity.y === config.physics.gravityScale || player.triggers.onLadder) { input.a.pressed = true; lastKey = 'a'; } player.climbAnimVariant = (player.climbAnimVariant === 1) ? 2 : 1; break;
        case "d": case "arrowright": if (player.velocity.y === 0 || player.velocity.y === config.physics.gravityScale || player.triggers.onLadder) { input.d.pressed = true; lastKey = 'd'; } player.climbAnimVariant = (player.climbAnimVariant === 1) ? 2 : 1; break;
        case "w": case "arrowup": input.w.pressed = true; player.jump(); break;
        case "s": case "arrowdown": input.s.pressed = true; player.down(); break;
        case "f": player.attack(); break;
        case " ": case "Spacebar": if (!config.dev.launched) {
            setTimeout(() => {
                config.dev.currentScene = 0;
                config.dev.launched = true;
                config.dev.paused = false;
                updateUserInterface()
            }, 100);
        } break;
    }

    // key combinations
    e.ctrlKey && e.key === 'q' ? config.dev.inDevelopmendMode = !config.dev.inDevelopmendMode : null

}

window.onkeyup = (e: KeyboardEvent) => {
    switch (e.key) {
        case "w": case "ArrowUp": input.w.pressed = false; break;
        case "a": case "ArrowLeft": input.a.pressed = false; break;
        case "d": case "ArrowRight": input.d.pressed = false; break;
        case "s": case "ArrowDown": input.s.pressed = false; player.triggers.isCrouch = false; break;
    }
}