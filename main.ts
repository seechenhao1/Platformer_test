input.onButtonPressed(Button.A, function () {
    speedx += -0.9
})
input.onButtonPressed(Button.AB, function () {
    if (led.point(spritex, spritey + 1)) {
        speedy += -2
    }
})
input.onButtonPressed(Button.B, function () {
    speedx += 0.9
})
function Reset () {
    spritex = 0
    spritey = 0
    level += 1
    speedx = 0
    speedy = 0
}
let level = 0
let speedx = 0
let speedy = 0
let spritey = 0
let spritex = 0
spritex = 0
spritey = 0
basic.showLeds(`
    # . . . .
    # . . . #
    # . # . #
    # . . . #
    # # # # #
    `)
while (true) {
    led.toggle(spritex, spritey)
    speedy += 0.05
    if (led.point(spritex, spritey + speedy)) {
        speedy = 0
    }
    if (led.point(spritex + speedx, spritey)) {
        speedx = 0
    }
    spritex += speedx
    spritey += speedy
    speedx = speedx * 0.3
    speedy = speedy * 0.3
    led.toggle(spritex, spritey)
    basic.pause(10)
    if (spritex > 5) {
        if (level == 0) {
            Reset()
            basic.pause(100)
            basic.showLeds(`
                . . . . .
                . . . # .
                . # . # .
                . . . # .
                # # # # #
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . . .
                . . # . .
                # . # . .
                . . # . .
                # # # # #
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . . .
                . # . . .
                . # . . .
                . # . . .
                # # # # #
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . . .
                . # . . .
                . # . . .
                . # . . .
                # # # # #
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . . .
                # . . . .
                # . . . .
                # . . . .
                # # # # #
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . . .
                # . . . .
                # . . # .
                # . . . .
                # # # # #
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . . .
                # . . . #
                # . . # #
                # . . . .
                # # # # #
                `)
            basic.pause(100)
            basic.showLeds(`
                # . . . .
                # . . . #
                # . . # #
                # . . . #
                # # # # #
                `)
        } else if (level == 1) {
            Reset()
            basic.pause(100)
            basic.showLeds(`
                . . . . .
                . . . # .
                . . # # .
                . # . # .
                # # # # #
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . . .
                . . # . .
                . . # . .
                . # # . .
                # # # # #
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . . .
                . # . . .
                . # . . .
                . # . . .
                # # # # #
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . . .
                # . . . .
                # . . . .
                # . . . .
                # # # # #
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . . .
                # . . . .
                # . . # #
                # . . # #
                # # # # #
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . . .
                # . . # #
                # . . # #
                # # . . #
                # # # # #
                `)
            basic.pause(100)
            basic.showLeds(`
                # . . . .
                # . . # #
                # # . . #
                # . . . #
                # # # # #
                `)
        } else if (level == 2) {
            Reset()
            basic.pause(100)
            basic.showLeds(`
                # . . # .
                # # . # #
                # # . # #
                # # . . #
                # # # # #
                `)
            basic.pause(100)
            basic.showLeds(`
                # # . # #
                # # . # #
                # # . # #
                # # # . #
                # # # # #
                `)
            basic.pause(100)
            basic.showLeds(`
                # # # # #
                # # . # #
                # # # # #
                # # # . #
                # # # # #
                `)
            basic.pause(100)
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            basic.pause(100)
            basic.showLeds(`
                . # # # .
                # # # # #
                # # # # #
                # # # # #
                . # # # .
                `)
            basic.pause(100)
            basic.showLeds(`
                . # # # .
                # . # . #
                # # # # #
                # . # . #
                . # # # .
                `)
            for (let index = 0; index < 2; index++) {
                basic.showLeds(`
                    . # . # .
                    # . # . #
                    . # . # .
                    # . # . #
                    . # . # .
                    `)
                basic.showLeds(`
                    # . # . #
                    . # . # .
                    # . # . #
                    . # . # .
                    # . # . #
                    `)
            }
            basic.showLeds(`
                # . # . #
                . # . # .
                # . # . #
                . # . # .
                # # # # #
                `)
            basic.showLeds(`
                # . # . #
                . # . # .
                # . # . #
                . . . . #
                # # # # #
                `)
            basic.showLeds(`
                # . # . #
                . # . # .
                # . # . #
                . . . . #
                # # # # #
                `)
            basic.showLeds(`
                # . # . #
                # . # . .
                # . # . #
                . . . . #
                # # # # #
                `)
            basic.showLeds(`
                # . # . #
                # . # . .
                # . # . #
                # . . . #
                # # # # #
                `)
        } else if (level == 3) {
            Reset()
            basic.pause(100)
            basic.showLeds(`
                . . # . #
                # . # . .
                # . . . #
                # . . . #
                # # # # #
                `)
            basic.pause(100)
            basic.showLeds(`
                . . # . #
                # . # . .
                # # . # #
                # . # . #
                # # # # #
                `)
            basic.pause(100)
            basic.showLeds(`
                . . # . #
                # # . # .
                # . . . #
                # # . # #
                # # # # #
                `)
            basic.pause(100)
            basic.showLeds(`
                . # . # #
                # . . . #
                . . # . .
                # . . . #
                # # . # #
                `)
            basic.pause(100)
            basic.showLeds(`
                # . . . #
                . . # . .
                . . # . .
                . . # . .
                # . . . #
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . . .
                . # # # .
                . . # . .
                . # # # .
                . . . . .
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . . .
                # # # # #
                . . # . .
                # # # # #
                . . . . .
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . . #
                # # # # #
                . . # . .
                # # # # #
                # . . . .
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . . #
                # # # # #
                . . . . .
                # # # # #
                # . . . .
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . . #
                # # . # #
                . . # . .
                # # . # #
                # . # . .
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . . #
                # # . # #
                . . . . .
                # # # # #
                # . . . .
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . . #
                # # . # #
                . . . . .
                # # . # #
                # . # . .
                `)
            basic.pause(100)
            basic.showLeds(`
                # . . . #
                # # . # #
                . . . . .
                # # . # #
                # . . . .
                `)
        } else if (level == 4) {
            Reset()
            basic.pause(100)
            basic.showLeds(`
                . . . . #
                # # . # #
                . . . . .
                # # . # #
                # # # # #
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . . #
                # # . # #
                . . . . .
                # # # # #
                # # # # #
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . . #
                # # . # #
                # # # # #
                # # . . #
                # # # # #
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . . #
                # # # # #
                # . . . #
                # # . . #
                # # # # #
                `)
            basic.pause(100)
            basic.showLeds(`
                # # # # #
                # . . . #
                # . . . #
                # # . . #
                # # # # #
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . . .
                # . . . #
                # . . . #
                # # . . #
                # # # # #
                `)
            basic.pause(100)
            basic.showLeds(`
                # . . . .
                # . . . #
                # . . . #
                # # . . #
                # # # # #
                `)
        } else if (level == 5) {
            Reset()
            basic.pause(100)
            basic.showLeds(`
                . . . . .
                . . . # .
                . # . # .
                . . . # .
                # # # # #
                `)
        } else {
        	
        }
    }
}
