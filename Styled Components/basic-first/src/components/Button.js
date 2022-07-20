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

    return (
        <>
            <Button>
                test
            </Button>
        </>
    )
}
