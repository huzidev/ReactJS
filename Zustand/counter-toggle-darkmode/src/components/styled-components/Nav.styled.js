import styled from "styled-components";

export const NavBar = styled.nav`
    height: 60px;
    width: 100%;
    background-color: ${(props) => props.dark ? "black" : "aqua"};
    display: flex;
    align-items: center;
    justify-content: center;
    button {
        cursor: pointer;
        padding: 10px 30px;
    }
`