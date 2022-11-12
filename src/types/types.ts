export interface Transform {
    scale: { width: number; height: number; };
    position: { x: number; y: number; };
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