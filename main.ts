controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`Bullet`, ship, 0, -140)
    projectile.startEffect(effects.coolRadial, 100)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    animation.runImageAnimation(
    otherSprite,
    [img`
        . . . . . . . . . 
        . . . . . . . . . 
        . . . . . . . . . 
        . . . . . . . . . 
        . . . . 2 . . . . 
        . . . . . . . . . 
        . . . . . . . . . 
        . . . . . . . . . 
        . . . . . . . . . 
        `,img`
        . . . . . . . . . 
        . . . . . . . . . 
        . . . . . . . . . 
        . . . . . . . . . 
        . . . . 2 . . . . 
        . . . . 2 . . . . 
        . . . . . . . . . 
        . . . . . . . . . 
        . . . . . . . . . 
        `,img`
        . . . . . . . . . 
        . . . . . . . . . 
        . . . . . . . . . 
        . . . . 2 2 . . . 
        . . . . 2 . . . . 
        . . . . . . . . . 
        . . . . . . . . . 
        . . . . . . . . . 
        . . . . . . . . . 
        `,img`
        . . . . . . . . . 
        . . . . . . . . . 
        . . . . . . . . . 
        . . . . 2 2 . . . 
        . . . . 2 2 . . . 
        . . . . . . . . . 
        . . . . . . . . . 
        . . . . . . . . . 
        . . . . . . . . . 
        `,img`
        . . . . . . . . . 
        . . . . . . . . . 
        . . . . . . . . . 
        . . . . 2 2 . . . 
        . . . . 2 2 . . . 
        . . . . 2 . . . . 
        . . . . . . . . . 
        . . . . . . . . . 
        . . . . . . . . . 
        `,img`
        . . . . . . . . . 
        . . . . . . . . . 
        . . . . . . . . . 
        . . . . 2 2 . . . 
        . . . . 2 2 . . . 
        . . . . 2 . 2 . . 
        . . . . . . . . . 
        . . . . . . . . . 
        . . . . . . . . . 
        `,img`
        . . . . . . . . . 
        . . . . . . . . . 
        . . . 2 . . . 2 . 
        . . . 2 . 2 2 . . 
        . . . 2 2 2 . . . 
        . . . 2 2 2 . 2 . 
        . . . . . . . . . 
        . . . . . . . . . 
        . . . . . . . . . 
        `],
    500,
    false
    )
    otherSprite.destroy(effects.fire)
    info.changeLifeBy(-1)
    console.log("Life-1")
    info.changeScoreBy(-1)
    console.log("Score-1")
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    scene.cameraShake(4, 500)
    sprite.startEffect(effects.halo, 200)
})
let projectile: Sprite = null
let ship: Sprite = null
let asteroids = [
sprites.castle.heroFrontAttack4,
sprites.castle.heroFrontAttack3,
sprites.castle.heroFrontAttack1,
sprites.castle.skellyFront
]
ship = sprites.create(sprites.space.spaceRedShip, SpriteKind.Player)
ship.setStayInScreen(true)
ship.bottom = 120
controller.moveSprite(ship, 100, 100)
info.setLife(5)
effects.starField.startScreenEffect()
forever(function () {
	
})
forever(function () {
    pause(1000)
    info.changeScoreBy(1)
})
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectileFromSide(asteroids[randint(0, asteroids.length - 1)], 0, 75)
    projectile.setKind(SpriteKind.Enemy)
    projectile.x = randint(10, 150)
})
