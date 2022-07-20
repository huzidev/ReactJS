import styled from "styled-components";

export const Nav = styled.nav`
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    color: ${({ theme }) => theme.colors.fontColor};
    width: 100%;
    text-align: center;
    padding: 10px 0px;

    h3 {
        display: inline;
        cursor: pointer;
        letter-spacing: 1.5px;
        text-decoration: underline;
        text-underline-offset: 2px;
        transition: all 300ms ease-in-out;
        &:hover {
            background-color: ${({ theme }) => theme.colors.hoverColorBG};
            color: ${({ theme }) => theme.colors.hoverColorF};
        }
    }
`