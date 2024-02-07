import styled from "styled-components";

export const StyledForm = styled.form`
    margin: 15px;
    background-color: ${(props) => props.theme.color.white};
    border: 2px solid ${(props) => props.theme.color.tundora};
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
    background-color: ${(props) => props.theme.color.waxflower};
    border-radius: 10px;
    padding: 5px;

    &:hover {
        background-color: ${(props) => props.theme.color.hitpink};
    }
`;

export const Select = styled.select`
    max-width: 300px;
    width: 100%;
    border-style: solid;
    background-color: ${(props) => props.theme.color.waxflower};
    border-radius: 10px;
    padding: 5px;

    &:hover {
        background-color: ${(props) => props.theme.color.hitpink};
    }
`;

export const Button = styled.button`
    background-color: ${(props) => props.theme.color.salmon};
    height: 50px;
    border: 2px solid ${(props) => props.theme.color.tundora};
    border-radius: 10px;
    padding: 5px;
    margin: 10px;
    transition: 1s;

    &:hover {
        background-color: ${(props) => props.theme.color.coral};
        transform: scale(1.05);
    }

    &:active {
        background-color: ${(props) => props.theme.color.orangeish};
    }
`;

export const Loading = styled.p``;


export const Failure = styled.p``;