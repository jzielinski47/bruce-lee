export interface SpritePositionIndex {
    x: number;
    y: number;
}

export interface SpriteDimensions2D {
    width: number
    height: number
}

export interface SceneInspector {
    position: SpritePositionIndex;
    dimensions: SpriteDimensions2D;
    imageSrc?: string
}