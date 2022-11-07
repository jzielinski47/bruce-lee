export interface Transform {
    position: { x: number, y: number };
    velocity?: { x: number, y: number };
    scale: { width: number, height: number };
}

export interface SpriteInterface {
    texture: string;
}

export interface SceneInterface {
    id: number;
    texture: string;
    surface: number;

    left?: number;
    right?: number;
}

export interface Sprites {
    brucelee: SpriteInterface;

}