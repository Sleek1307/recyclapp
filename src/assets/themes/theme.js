import { Dimensions } from "react-native";

const window = Dimensions.get('screen');

const theme = {
    colors: {
        primary: '#A0FF7F',
        secondary: '#DCFFCF',
        terciary: '#70D94A',
        success: '#007E33',
        danger: '#FF8800',
        white: '#FAFAFA',
        whiteSmoke: '#F5F5F5',
        dark: '#7A7A7A',
        black: '#0A0A0A',
        gray: '#E3E3E3',
        graySmoke: '#E8E8E8'
    },
    fonts: {
        body: 'Baloo2-VariableFont_wght'
    },
    fontSizes: {
        title: 30,
        subTitle: 20,
        body: 14,
        note: 12
    },
    fontStyles: {
        underline: 'underline',
        italic: 'italic',
    },
    fontWeights: {
        regular: '400',
        semiBold: '600',
        bold: '700'
    },
    text:{
        
    },
    spacing: {
        low: 15,
        medium: 30,
        high: 50
    },
    align: {
        start: 'flex-start',
        end: 'flex-end',
        center: 'center',
        between: 'space-between',
        around: 'space-around',
        left: 'left',
        right: 'right',
    },
    direction: {
        row: 'row',
        rowReverse: 'mrow-reverse',
        column: 'column',
        columnReverse: 'column-reverse'
    },
    width: {
        w_25: window.width / 4,
        w_50: window.width / 2,
        w_75: window.width / 1.25,
        w_100: window.width
    },
    height: {
        h_25: window.height / 4,
        h_50: window.height / 2,
        h_75: window.height / 1.25,
        h_100: window.height
    }
}

export default theme;