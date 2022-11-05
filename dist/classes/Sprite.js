import { canvas, ctx, gravity, sceneHeight } from "../app.js";
export class Sprite {
    constructor({ position, velocity, dimensions }) {
        this.dimensions = dimensions;
        this.position = position;
        this.velocity = velocity;
        this.gravity = gravity;
        this.inAir = false;
    }
    render() {
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.position.x, this.position.y, this.dimensions.width, this.dimensions.height);
    }
    update() {
        this.render();
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        if (this.position.y + this.dimensions.height + this.velocity.y >= canvas.height - sceneHeight) {
            this.velocity.y = 0;
            this.inAir = false;
        }
        else {
            this.velocity.y += this.gravity;
            this.inAir = true;
        }
    }
}
