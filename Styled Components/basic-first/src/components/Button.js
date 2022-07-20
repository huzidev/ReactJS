import React from 'react';
import styled from 'styled-components';

export default function Button() {

    const Button = styled.button`
        background-color: aqua;
        border: 1px solid black;
        font-size: 21px;
        color: white;
        border-radius: 3px;
        cursor: pointer;
        padding: 5px 30px;
    `

    const Link = styled.a`
        background-color: black;
        border: 1px solid black;
        font-size: 21px;
        color: white;
        border-radius: 3px;
        cursor: pointer;
        padding: 5px 30px;
        `
    
    const Wrapper = styled.section`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    `

    return (
        <>
            <Wrapper>
                <Button>
                    test
                </Button>
                <Link>
                    anchor tag
                </Link>
            </Wrapper>
        </>
    )
}
