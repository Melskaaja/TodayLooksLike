export { tllTheme, tllOverride }

import { createTheme, cardDark, sliderDark, inputDark, switchDark, inputNumberDark, alertDark } from 'naive-ui'

const tllTheme = createTheme([ cardDark, sliderDark, inputDark, switchDark, inputNumberDark, alertDark ]);
const tllOverride = {
    common: {
        fontFamily: 'Dosis, Helvetica, Arial, sans-serif',
        fontSize: '18px',
        fontSizeHuge: '22px',
        fontSizeLarge: '20px',
        fontSizeMedium: '18px',
        fontSizeMini: '15px',
        fontSizeSmall: '15px',
        fontSizeTiny: '12px',
        primaryColor: '#169292',
        primaryColorHover: '#1cb5b5',
        primaryColorPressed: '#107070',
        primaryColorSuppl: '#0a5050'
    },
    slider: {
        markFontSize: '15px'
    },
    input: {
        fontSizeMedium: '16px'
    }
};
