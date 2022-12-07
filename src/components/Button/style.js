import styled from "styled-components";

export const ButtonElement = styled.button`
    width: ${props => props.buttonSize || "25%"};
    height: 15vh;
    background-color: red;
    font-size: 4rem;
    background-color: ${props => props.buttonColor || "#5b5b5b"};
    border: 1px solid #fff;
    border-radius: 10px;
    color: #fff;

    &:hover{
        opacity: 0.6;
    }
`;
