export interface Transform {
    position: { x: number, y: number };
    velocity?: { x: number, y: number };
    scale: { width: number, height: number };
}

export interface SpriteInterface {
    texture: string;
}

export interface SceneInterface {
    background: string;
    surfaceHeight: number;

    borderLeft?: number;
    borderRight?: number;
}