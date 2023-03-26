function StartTarget () {
    game2 = 1
    scene.setBackgroundImage(assets.image`wildWest`)
    myBall = carnival.create(assets.image`ball-yellow`, SpriteKind.Player)
    myBall.setPosition(80, 90)
    myBall.controlBallWithArrowKeys()
    myBall.setTraceMulti(carnival.Tracers.Cross)
    myBooth = sprites.create(assets.image`booth`, SpriteKind.Booth)
    myBooth.z = 20
    statusbar = statusbars.create(120, 6, StatusBarKind.Energy)
    statusbar.setColor(5, 10)
    statusbar.setBarBorder(2, 1)
    statusbar.bottom = 115
    myBall.variablePower(statusbar, 30, 80)
    carnival.startCountdownGame(30, carnival.WinTypes.Score)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (game2 == 0) {
        if (selectedgame == 1) {
            StartTarget()
        } else {
        	
        }
    } else {
        if (game2 == 1) {
            myBall2 = carnival.createProjectileBallFromSprite(assets.image`ball-blue`, myBall)
        } else {
        	
        }
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Booth, function (sprite, otherSprite) {
    if (game2 == 1) {
        sprite.destroy()
        info.changeScoreBy(-1)
    } else {
    	
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (game2 == 1) {
        otherSprite.destroy()
        sprite.destroy()
        info.changeScoreBy(1)
        music.baDing.play()
    } else {
    	
    }
})
let projectile: Sprite = null
let myBall2: Ball = null
let statusbar: StatusBarSprite = null
let myBooth: Sprite = null
let myBall: Ball = null
let selectedgame = 0
let game2 = 0
game2 = 0
selectedgame = 1
forever(function () {
    if (game2 == 1) {
        projectile = sprites.createProjectileFromSide(assets.image`target`, 50, 0)
        projectile.bottom = 56
        projectile.setKind(SpriteKind.Enemy)
        pause(randint(500, 2000))
    } else {
    	
    }
})
