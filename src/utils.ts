export function onCollison(object, collider) {
    return (object.position.y + object.scale.height >= collider.top && object.position.y <= collider.bottom
        && object.position.x <= collider.right && object.position.x + object.scale.width >= collider.left)
}