import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
    typography: {
        fontFamily: 'Montserrat',
        fontSize: 14
    },
    palette: {
        primary: {
            main: '#FA0E0E'
        },
        secondary: {
            main: '#D10000'
        },
        text:{
            main: '#000'
        },
        paper : {
            main: '#fff'
        }
    },
    primaryColor: '#D0202A',
    secondaryColor: '#006331'
})