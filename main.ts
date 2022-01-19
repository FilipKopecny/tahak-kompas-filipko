input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    LCD1IN8.DrawRectangle(
    0,
    27,
    160,
    80,
    LCD1IN8.Get_Color(LCD_COLOR.WHITE),
    DRAW_FILL.DRAW_FULL,
    DOT_PIXEL.DOT_PIXEL_1
    )
    if (input.compassHeading() >= 337 || input.compassHeading() < 22) {
        LCD1IN8.DisString(
        0,
        27,
        "Si otoceny na SEVER",
        LCD1IN8.Get_Color(LCD_COLOR.BLUE)
        )
    }
    if (input.compassHeading() >= 67 && input.compassHeading() < 112) {
        LCD1IN8.DisString(
        0,
        27,
        "Si otoceny na VYCHOD",
        LCD1IN8.Get_Color(LCD_COLOR.BLUE)
        )
    }
    if (input.compassHeading() >= 157 && input.compassHeading() < 202) {
        LCD1IN8.DisString(
        0,
        27,
        "Si otoceny na JUH",
        LCD1IN8.Get_Color(LCD_COLOR.BLUE)
        )
    }
    if (input.compassHeading() >= 247 && input.compassHeading() < 292) {
        LCD1IN8.DisString(
        0,
        27,
        "Si otoceny na ZAPAD",
        LCD1IN8.Get_Color(LCD_COLOR.BLUE)
        )
    }
    if (input.compassHeading() >= 22 && input.compassHeading() < 67) {
        LCD1IN8.DisString(
        0,
        27,
        "Si otoceny na severovychod",
        LCD1IN8.Get_Color(LCD_COLOR.BLUE)
        )
    }
    if (input.compassHeading() >= 112 && input.compassHeading() < 157) {
        LCD1IN8.DisString(
        0,
        27,
        "Si otoceny na juhovychod",
        LCD1IN8.Get_Color(LCD_COLOR.BLUE)
        )
    }
    if (input.compassHeading() >= 202 && input.compassHeading() < 247) {
        LCD1IN8.DisString(
        0,
        27,
        "Si otoceny na juhozapad",
        LCD1IN8.Get_Color(LCD_COLOR.BLUE)
        )
    }
    if (input.compassHeading() >= 292 && input.compassHeading() < 337) {
        LCD1IN8.DisString(
        0,
        27,
        "Si otoceny na severozapad",
        LCD1IN8.Get_Color(LCD_COLOR.BLUE)
        )
    }
    LCD1IN8.LCD_DisplayWindows(
    0,
    27,
    160,
    128
    )
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
})
LCD1IN8.LCD_Init()
LCD1IN8.LCD_Clear()
LCD1IN8.LCD_Filling(LCD1IN8.Get_Color(LCD_COLOR.BLUE))
LCD1IN8.LCD_SetBL(5)
LCD1IN8.DisString(
0,
0,
"Filipkov tahak na VLASTIVEDU - stlac A",
LCD1IN8.Get_Color(LCD_COLOR.BLUE)
)
LCD1IN8.LCD_Display()
basic.forever(function () {
	
})
