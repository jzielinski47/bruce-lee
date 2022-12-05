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

export const vectorDistance = (object1, object2) => {
    const vector = {
        horizontal: ((object1.position.x + object1.scale.width) / 2) - ((object2.position.x + object2.scale.width) / 2),
        vertical: ((object1.position.y + object1.scale.height)) - ((object2.position.y + object2.scale.height))
    }
    // console.log(vector)
    return vector;
}