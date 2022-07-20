import React from 'react';
import { Wrapper } from './styledComponents/Main.styled';
import { Button } from './styledComponents/Button.styled';

export default function Home() {
    return (
        <Wrapper>
            <h3>
                Home Page
            </h3>
            <img src="../../assets/first.jpeg" alt="img" className='img'/>
            <Button>
                Same Button
            </Button>
        </Wrapper>
    )
}
