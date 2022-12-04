export interface Transform {
    position: { x: number; y: number; };
    scale: { width: number; height: number; };
    velocity?: { x: number; y: number; };
}

interface Anim {
    frameRate: number;
    frameBuffer: number;
    loop: boolean;
    imageSrc: string;
}

export interface Animations {
    idle: Anim;
    idleRight?: Anim;
    idleLeft?: Anim;
    walkLeft?: Anim;
    walkRight?: Anim;
    jump?: Anim;
    inAir?: Anim;
    jumpLeft?: Anim;
    jumpRight?: Anim;
    climb1?: Anim;
    climb2?: Anim;
    fall?: Anim;
    lie?: Anim;
    attackLeft?: Anim;
    attackRight?: Anim;
}