import { ctx } from "../main.js";
export class Scene {
    constructor(transform, scene) {
        this.position = transform.position;
        this.scale = transform.scale;
        this.image = new Image();
        this.image.src = scene.texture;
    }
    render() {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.scale.width, this.scale.height);
    }
    update() {
        this.render();
    }
}
