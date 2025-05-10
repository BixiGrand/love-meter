input.onPinPressed(TouchPin.P0, function () {
    Nummer = randint(0, 100)
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    Nummer = 99
})
let Nummer = 0
basic.showString("Love Meter")
basic.forever(function () {
    if (Nummer >= 0 && Nummer <= 25) {
        basic.showIcon(IconNames.Sad)
    } else {
        if (Nummer >= 26 && Nummer <= 50) {
            basic.showString("BFF")
        } else {
            if (Nummer >= 51 && Nummer <= 75) {
                basic.showIcon(IconNames.Happy)
            } else {
                basic.showIcon(IconNames.Heart)
                basic.showIcon(IconNames.SmallHeart)
                basic.showIcon(IconNames.Heart)
                basic.showIcon(IconNames.SmallHeart)
                basic.showIcon(IconNames.Heart)
            }
        }
    }
})
