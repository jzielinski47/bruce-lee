export interface Transform {
    position: { x: number; y: number; };
    scale: { width: number; height: number; };
    velocity?: { x: number; y: number; };
}

export interface SpriteInterface {
    scale: { width: number; height: number; };
    position: { x: number; y: number; };
    velocity: { x: number; y: number; };
}

export interface Setup {
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D
}

export interface Material {
    texture: string;
}

export interface Level {
    id: number;
    sprite: string;
    colliders: Collider[];
    lanterns: { id: number; x: number; y: number; taken: boolean; }[]
}

export interface Collider {
    left: number;
    right: number;
    top: number;
    bottom: number;
}