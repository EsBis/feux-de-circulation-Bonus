/**
 * Pour faire le BONUS
 * 
 * Je replacerais le répéter 5 fois par appel Clignote+temps
 */
function Jaune () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
function Rouge () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
}
function Orange () {
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
input.onButtonPressed(Button.A, function () {
    boutonPieton = true
})
function Vert () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
function Pieton () {
    Blanc()
    basic.pause(5000)
    for (let index = 0; index < 5; index++) {
        pins.digitalWritePin(DigitalPin.P8, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P8, 0)
        basic.pause(500)
    }
    Orange()
}
function Blanc () {
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
}
function Clignotetemps () {
    pins.digitalWritePin(DigitalPin.P8, 1)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P8, 0)
    basic.pause(500)
    basic.showNumber(5)
    pins.digitalWritePin(DigitalPin.P8, 1)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P8, 0)
    basic.pause(500)
    basic.showNumber(4)
    pins.digitalWritePin(DigitalPin.P8, 1)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P8, 0)
    basic.pause(500)
    basic.showNumber(3)
    pins.digitalWritePin(DigitalPin.P8, 1)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.pause(500)
    basic.showNumber(2)
    pins.digitalWritePin(DigitalPin.P8, 1)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P8, 0)
    basic.pause(500)
    basic.showNumber(1)
}
let boutonPieton = false
let temps = 0
let tempsPasse = 0
boutonPieton = false
/**
 * Orange P8
 * 
 * Blanc P16
 * 
 * G P0
 * 
 * Y P1
 * 
 * R P2
 */
basic.forever(function () {
    temps = control.millis() - tempsPasse
    if (temps < 5) {
        Vert()
    } else if (temps >= 5 && temps < 7) {
        Jaune()
    } else if (temps >= 7 && temps < 12) {
        Rouge()
        if (boutonPieton) {
            basic.pause(200)
            Pieton()
        }
    } else {
        tempsPasse = control.millis()
        boutonPieton = false
    }
})
