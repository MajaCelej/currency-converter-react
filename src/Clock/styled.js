import styled from "styled-components";

export const Timer = styled.div`
    background-color: ${(props) => props.theme.color.white};
    border: 1px solid ${(props) => props.theme.color.black};
    padding: 5px;
    text-align: center;
    font-size: 15px;
`;