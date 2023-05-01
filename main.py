def on_button_pressed_a():
    global speedx
    speedx += -0.9
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global speedy
    if led.point(spritex, spritey + 1):
        speedy += -2
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global speedx
    speedx += 0.9
input.on_button_pressed(Button.B, on_button_pressed_b)

level = 0
speedx = 0
speedy = 0
spritey = 0
spritex = 0
spritex = 0
spritey = 0
basic.show_leds("""
    # . . . .
        # . . . #
        # . # . #
        # . . . #
        # # # # #
""")
while True:
    led.toggle(spritex, spritey)
    speedy += 0.05
    if led.point(spritex, spritey + speedy):
        speedy = 0
    if led.point(spritex + speedx, spritey):
        speedx = 0
    spritex += speedx
    spritey += speedy
    speedx = speedx * 0.3
    speedy = speedy * 0.3
    led.toggle(spritex, spritey)
    basic.pause(10)
    if spritex > 5:
        if level == 0:
            spritex = 0
            spritey = 0
            level += 1
            basic.pause(100)
            basic.show_leds("""
                . . . . .
                                . . . # .
                                . # . # .
                                . . . # .
                                # # # # #
            """)
            basic.pause(100)
            basic.show_leds("""
                . . . . .
                                . . # . .
                                # . # . .
                                . . # . .
                                # # # # #
            """)
            basic.pause(100)
            basic.show_leds("""
                . . . . .
                                . # . . .
                                . # . . .
                                . # . . .
                                # # # # #
            """)
            basic.pause(100)
            basic.show_leds("""
                . . . . .
                                . # . . .
                                . # . . .
                                . # . . .
                                # # # # #
            """)
            basic.pause(100)
            basic.show_leds("""
                . . . . .
                                # . . . .
                                # . . . .
                                # . . . .
                                # # # # #
            """)
            basic.pause(100)
            basic.show_leds("""
                . . . . .
                                # . . . .
                                # . . # .
                                # . . . .
                                # # # # #
            """)
            basic.pause(100)
            basic.show_leds("""
                . . . . .
                                # . . . #
                                # . . # #
                                # . . . .
                                # # # # #
            """)
            basic.pause(100)
            basic.show_leds("""
                # . . . .
                                # . . . #
                                # . . # #
                                # . . . #
                                # # # # #
            """)
        elif level == 1:
            spritex = 0
            spritey = 0
            level += 1
            basic.pause(100)
            basic.show_leds("""
                . . . . .
                                . . . # .
                                . . # # .
                                . # . # .
                                # # # # #
            """)
            basic.pause(100)
            basic.show_leds("""
                . . . . .
                                . . # . .
                                . . # . .
                                . # # . .
                                # # # # #
            """)
            basic.pause(100)
            basic.show_leds("""
                . . . . .
                                . # . . .
                                . # . . .
                                . # . . .
                                # # # # #
            """)
            basic.pause(100)
            basic.show_leds("""
                . . . . .
                                # . . . .
                                # . . . .
                                # . . . .
                                # # # # #
            """)
            basic.pause(100)
            basic.show_leds("""
                . . . . .
                                # . . . .
                                # . . # #
                                # . . # #
                                # # # # #
            """)
            basic.pause(100)
            basic.show_leds("""
                . . . . .
                                # . . # #
                                # . . # #
                                # # . . #
                                # # # # #
            """)
            basic.pause(100)
            basic.show_leds("""
                # . . . .
                                # . . # #
                                # # . . #
                                # . . . #
                                # # # # #
            """)
        elif level == 2:
            spritex = 0
            spritey = 0
            level += 1
            basic.pause(100)
            basic.show_leds("""
                # . . # .
                                # # . # #
                                # # . # #
                                # # . . #
                                # # # # #
            """)
            basic.pause(100)
            basic.show_leds("""
                # # . # #
                                # # . # #
                                # # . # #
                                # # # . #
                                # # # # #
            """)
            basic.pause(100)
            basic.show_leds("""
                # # # # #
                                # # . # #
                                # # # # #
                                # # # . #
                                # # # # #
            """)
            basic.pause(100)
            basic.show_leds("""
                # # # # #
                                # # # # #
                                # # # # #
                                # # # # #
                                # # # # #
            """)
            basic.pause(100)
            basic.show_leds("""
                . # # # .
                                # # # # #
                                # # # # #
                                # # # # #
                                . # # # .
            """)
            basic.pause(100)
            basic.show_leds("""
                . # # # .
                                # . # . #
                                # # # # #
                                # . # . #
                                . # # # .
            """)
            for index in range(2):
                basic.show_leds("""
                    . # . # .
                                        # . # . #
                                        . # . # .
                                        # . # . #
                                        . # . # .
                """)
                basic.show_leds("""
                    # . # . #
                                        . # . # .
                                        # . # . #
                                        . # . # .
                                        # . # . #
                """)
            basic.show_leds("""
                # . # . #
                                . # . # .
                                # . # . #
                                . # . # .
                                # # # # #
            """)
            basic.show_leds("""
                # . # . #
                                . # . # .
                                # . # . #
                                . . . . #
                                # # # # #
            """)
            basic.show_leds("""
                # . # . #
                                . # . # .
                                # . # . #
                                . . . . #
                                # # # # #
            """)
            basic.show_leds("""
                # . # . #
                                # . # . .
                                # . # . #
                                . . . . #
                                # # # # #
            """)
            basic.show_leds("""
                # . # . #
                                # . # . .
                                # . # . #
                                # . . . #
                                # # # # #
            """)
        elif level == 3:
            spritex = 0
            spritey = 0
            level += 1
            basic.pause(100)
            basic.show_leds("""
                . . . . .
                                . . . # .
                                . # . # .
                                . . . # .
                                # # # # #
            """)
        elif level == 4:
            spritex = 0
            spritey = 0
            level += 1
            basic.pause(100)
            basic.show_leds("""
                . . . . .
                                . . . # .
                                . # . # .
                                . . . # .
                                # # # # #
            """)
        elif level == 5:
            spritex = 0
            spritey = 0
            level += 1
            basic.pause(100)
            basic.show_leds("""
                . . . . .
                                . . . # .
                                . # . # .
                                . . . # .
                                # # # # #
            """)
        elif level == 6:
            spritex = 0
            spritey = 0
            level += 1
            basic.pause(100)
            basic.show_leds("""
                . . . . .
                                . . . # .
                                . # . # .
                                . . . # .
                                # # # # #
            """)