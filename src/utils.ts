import { Transform } from "./types/types";

export function onCollison(object: Transform, collider) {
    return (object.position.y + object.scale.height >= collider.top && object.position.y <= collider.bottom
        && object.position.x <= collider.right && object.position.x + object.scale.width >= collider.left)
}