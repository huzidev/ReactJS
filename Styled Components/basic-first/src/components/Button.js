import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

export default function Button() {

    // important to do because if we wanted to change a color at thousand of places so it'll take too much time for changing color at
    // every single places one by one hence it is good practice to just assign the color to the variable so when we wanted to change color
    // at thousand of places it'll be changed automatically since we've used that specific variables at all places
    const theme = {
        color : {
            border : "blue",
            backgroundColor : "black",
            fontColor : "white"
        },
        responsive : {
            mobile : "800px",
            tab : "1000px"
        }
    }

    const Button = styled.button`
        background-color: aqua;
        border: 1px solid ${({theme}) => theme.color.border};
        color: blue;
        font-size: 21px;
        border-radius: 3px;
        cursor: pointer;
        padding: 5px 30px;
        transition: all 500ms ease-in-out;
        &:hover {
            background-color: ${({theme}) => theme.color.backgroundColor};
            color: ${({theme}) => theme.color.fontColor};
        }
        @media only screen and (max-width:${({theme}) => theme.responsive.tab}) {
            background-color: black;
            color: white;

        }
        @media only screen and (max-width:${({theme}) => theme.responsive.mobile}) {
            background-color: purple;
            color: ${({theme}) => theme.color.fontColor};
        }
    `

    const Link = styled.a`
        background-color: ${({theme}) => theme.color.backgroundColor};
        color: ${({theme}) => theme.color.fontColor};
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
            <ThemeProvider theme={theme}> 
            {/* theme must have to be used as props */}
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
            </ThemeProvider>
        </>
    )
}
