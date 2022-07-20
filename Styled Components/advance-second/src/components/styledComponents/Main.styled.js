import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.backgroundColor} ;
    height: 350px;
    width: 1200px;
    margin: auto;
    text-align: center;
    margin-top: 50px;
    `

export const Img = styled.img`
    height: 300px;
    width: 350px;
`
