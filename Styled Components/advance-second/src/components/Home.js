import React from 'react';
import { Wrapper } from './styledComponents/Main.styled';
import { Button } from './styledComponents/Button.styled';
import { Img } from './styledComponents/Main.styled.js';

export default function Home() {
    return (
        <Wrapper>
            <h3>
                Home Page
            </h3>
            <Img src="../../assets/first.jpeg" alt="img" ></Img>
            <Button>
                Same Button
            </Button>
        </Wrapper>
    )
}
