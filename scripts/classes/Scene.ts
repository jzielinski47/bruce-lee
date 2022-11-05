import { ctx } from "../app.js"
import { SceneInspector, SpriteDimensions2D, SpritePositionIndex } from "../types/types"

export class Scene {

    position: SpritePositionIndex
    image: HTMLImageElement
    width: number
    height: number

    constructor(inspector: SceneInspector) {
        this.position = inspector.position
        this.width = inspector.dimensions.width
        this.height = inspector.dimensions.height
        this.image = new Image()
        this.image.src = inspector.imageSrc
    }

    render() {
        ctx.drawImage(this.image, this.position.x, this.position.y)
    }

    update() {
        this.render()        
    }
}