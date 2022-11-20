import { Transform } from "./types/types";

export function onCollison(object: Transform, collider) {
    return (object.position.y + object.scale.height >= collider.y && object.position.y <= (collider.y + collider.height)
        && object.position.x <= (collider.x + collider.width) && object.position.x + object.scale.width >= collider.x)
}