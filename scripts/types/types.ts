export interface Transform {
    position: { x: number, y: number };
    velocity?: { x: number, y: number };
    scale: { width: number, height: number };
}