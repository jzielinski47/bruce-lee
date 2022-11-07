import { ctx, canvas, gravityScale } from "../main.js";
export class Player {
    constructor(transform, sprite) {
        this.scale = transform.scale;
        this.position = transform.position;
        this.velocity = transform.velocity;
        this.gravity = gravityScale;
        this.sprite = new Image();
        this.sprite.src = sprite.texture;
    }
    render() {
        // ctx.fillStyle = 'blue'
        // ctx.fillRect(this.position.x, this.position.y, this.scale.width, this.scale.height)
        ctx.drawImage(this.sprite, this.position.x, this.position.y, this.scale.width, this.scale.height);
    }
    update() {
        this.render();
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        if (this.position.y + this.scale.height + this.velocity.y >= canvas.height - 10) {
            this.velocity.y = 0;
        }
        else {
            this.velocity.y += this.gravity;
        }
    }
}
