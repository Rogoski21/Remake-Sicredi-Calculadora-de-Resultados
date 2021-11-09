import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import { useSelector } from "react-redux";

export default function useTheme() {
    const state = useSelector((state) => state.isDark);

    console.log(state)

    // ARRUMAR ESSA MERDA
    let theme = createMuiTheme({
        palette: {
            type: state ? 'dark' : 'light',
            primary: {
                main: "#41414d",
            },
            secondary: {
                main: "#006C43",
            },
            tertiary: {
                main: "#5A645B",
            },
            quaternary: {
                main: "#3fa110",
            },
            input: {
                border: {
                    main:"#DCDCE5",
                    dark: "#2b2b2b",
                },
                    
                text:
                {
                    main: "#A8A8B3",
                    dark: "#404047",
                }
            },
            background: {                  
                main:"#F0F0F5",
                dark: "#2b2b2b",
            },
            error: {
                main: "#EB5757",
            },
        },
        typography: {
            fontFamily: "Exo2, Nunito",
        },
    });
    
    theme = responsiveFontSizes(theme, { factor: 1 });

    return theme
  }