basic.show_icon(IconNames.HEART)
LCM12864_SPI.init(DigitalPin.P2,
    DigitalPin.P13,
    DigitalPin.P14,
    DigitalPin.P15,
    DigitalPin.P16,
    12)
LCM12864_SPI.clear()
LCM12864_SPI.show_string(1, 0, "ABCDEFGHIJKLMNOPQ", 1)
LCM12864_SPI.show_string(2, 1, "1234567890", 1)
LCM12864_SPI.show_string(30, 2, "Hello World ^_^", 1)
LCM12864_SPI.rect(0, 0, 60, 30, 1)