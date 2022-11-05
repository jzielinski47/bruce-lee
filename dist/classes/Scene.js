import { ctx } from "../app.js";
export class Scene {
    constructor(inspector) {
        this.position = inspector.position;
        this.width = inspector.dimensions.width;
        this.height = inspector.dimensions.height;
        this.image = new Image();
        this.image.src = inspector.imageSrc;
    }
    render() {
        ctx.drawImage(this.image, this.position.x, this.position.y);
    }
    update() {
        this.render();
    }
}
