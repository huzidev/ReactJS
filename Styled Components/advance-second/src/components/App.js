import React from 'react';
import { GlobalStyles } from './styledComponents/Global.styled';
import Header from './Header';
import Home from './Home';

export default function App() {
    return (
        <div>
            <GlobalStyles />
            <Header />
            <Home />
        </div>
    )
}
