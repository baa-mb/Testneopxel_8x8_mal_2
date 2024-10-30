input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.AB, function () {
    strip.clear()
    strip.show()
})
input.onButtonPressed(Button.B, function () {
	
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 64, NeoPixelMode.RGB)
strip.setBrightness(128)
strip.showRainbow(1, 360)
strip.show()
let strip2 = neopixel.create(DigitalPin.P1, 64, NeoPixelMode.RGB)
strip2.setBrightness(50)
strip2.showRainbow(1, 360)
strip2.show()
basic.forever(function () {
    strip.rotate(8)
    strip.show()
    basic.pause(200)
    strip2.rotate(8)
    strip2.show()
    basic.pause(200)
})
