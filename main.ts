LCM12864_SPI.init(
DigitalPin.P2,
DigitalPin.P13,
DigitalPin.P14,
DigitalPin.P15,
DigitalPin.P16,
20
)
basic.showIcon(IconNames.SmallHeart)
LCM12864_SPI.clear()
LCM12864_SPI.showString(1, 0, "ABCDEFGHIJKLMNOPQ", 1)
LCM12864_SPI.showString(2, 1, "1234567890", 1)
basic.showIcon(IconNames.Heart)
LCM12864_SPI.showString(4, 2, "Hello World ^_^", 1)
while (true) {
    basic.showIcon(IconNames.SmallHeart)
    basic.showIcon(IconNames.Heart)
}
