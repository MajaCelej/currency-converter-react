import styled from "styled-components";

export const StyledForm = styled.form`
    margin: 15px;
    background-color: #ffffff;
    border: 2px solid #474747;
    padding: 20px;
    display: grid;
    grid-row-gap: 10px;
    width: 100%;
    align-self: center;
`;

export const Label = styled.label`
    padding-right: 15px;
`;

export const Input = styled.input`
    max-width: 300px;
    width: 100%;
    border-style: solid;
    background-color: #feb69e;
    border-radius: 10px;
    padding: 5px;

    &:hover {
        background-color: #fda487;
    }
`;

export const Select = styled.select`
    max-width: 300px;
    width: 100%;
    border-style: solid;
    background-color: #feb69e;
    border-radius: 10px;
    padding: 5px;

    &:hover {
        background-color: #fda487;
    }
`;

export const Button = styled.button`
    background-color: #ff8c66;
    height: 50px;
    border: 2px solid #474747;
    border-radius: 10px;
    padding: 5px;
    margin: 10px;
    transition: 1s;

    &:hover {
        background-color: #fe774a;
        transform: scale(1.05);
    };

    &:active {
        background-color: #ff602b;
    };
`;