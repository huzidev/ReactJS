import styled from "styled-components";

export const Button =  styled.button`
    background-color: black;
    border: 1px solid blue;
    color: white;
    padding: 5px 25px;
    cursor: pointer;
    transition: all 300ms ease-in-out;
    &:hover {
        background-color: ${({ theme }) => theme.colors.hoverColorBG};
    }
`