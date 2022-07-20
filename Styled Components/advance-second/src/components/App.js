import React from 'react';
import { GlobalStyles } from './styledComponents/Global.styled';
import { ThemeProvider } from "styled-components";
import Header from './Header';
import Home from './Home';

export default function App() {

    const theme = {
        colors : {
            fontColor : "blue",
            backgroundColor : "aqua",
            hoverColorBG : "purple",
            hoverColorF : "white"
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <div>
                <GlobalStyles />
                <Header />
                <Home />
            </div>
        </ThemeProvider>
    )
}
