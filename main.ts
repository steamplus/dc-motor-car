radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 2) {
        basic.pause(200)
        MotorDriver.MotorRun(Motor.A, Dir.forward, 7)
        MotorDriver.MotorRun(Motor.B, Dir.forward, 7)
    }
    if (receivedNumber == 3) {
        basic.pause(200)
        MotorDriver.MotorRun(Motor.A, Dir.backward, 5)
        MotorDriver.MotorRun(Motor.B, Dir.backward, 5)
    }
    if (receivedNumber == 4) {
        basic.pause(200)
        MotorDriver.MotorStop(Motor.A)
        MotorDriver.MotorStop(Motor.B)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(2)
})
input.onGesture(Gesture.TiltLeft, function () {
	
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(4)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(3)
})
input.onGesture(Gesture.TiltRight, function () {
	
})
basic.showLeds(`
    . # . # .
    . . . . .
    . . # . .
    # . . . #
    . # # # .
    `)
basic.showIcon(IconNames.Heart)
basic.showString("Hello!")
basic.forever(function () {
    radio.setGroup(1)
})
