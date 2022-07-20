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

    const Div = styled.div`
        display: flex;
        align-items: center;
        gap: 15px;
        .heading-top {
            font-weight: 500;
        }
        .para-bottom {
            padding-top: 9px;
        }
    `
    const Heading = styled.h2`
        font-size: 39px;
    `

    const Para = styled.p`
        font-size: 29px;
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
                <Div>
                    <Heading className='heading-top'>
                        this is Heading
                    </Heading>
                    <Para className='para-bottom'>
                        This is paragraph
                    </Para>
                </Div>
            </Wrapper>
        </>
    )
}
