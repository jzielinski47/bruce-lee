import { Transform } from "./interfaces/interfaces"

export function onCollison(object: Transform, collider) {
    return (object.position.y + object.scale.height >= collider.y && object.position.y <= (collider.y + collider.height)
        && object.position.x <= (collider.x + collider.width) && object.position.x + object.scale.width >= collider.x)
}

export function refinedOnCollison(object: Transform, collider) {
    return (object.position.y + object.scale.height >= collider.position.y && object.position.y <= (collider.position.y + collider.scale.height)
        && object.position.x <= (collider.position.x + collider.scale.width) && object.position.x + object.scale.width >= collider.position.x)
}

export function onCollisonBottom(object: Transform, collider) {
    return (object.position.y + object.scale.height >= collider.y &&
        object.position.y + object.scale.height <= (collider.y + collider.height) &&
        object.position.x <= (collider.x + collider.width) &&
        object.position.x + object.scale.width >= collider.x)
}

export function formatNumber(num: number, max: number): string {
    let string: string = ''
    if (num.toString().length < max) {
        for (let i = 0; i < max - num.toString().length; i++) {
            string += '0'
        }
    }
    string += num.toString()
    return string;
}