import { ctx, currentScene } from "../main.js";
import { scenes } from "../scenes.js";
export class Scene {
    constructor(transform) {
        this.position = transform.position;
        this.scale = transform.scale;
        this.image = new Image();
        this.image.src = scenes[currentScene].texture;
    }
    render() {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.scale.width, this.scale.height);
    }
    update() {
        this.render();
    }
}
