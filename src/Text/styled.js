import styled from "styled-components";

export const TextField = styled.div`
    background-color: ${(props) => props.theme.color.waxflower};
    border: solid 1px ${(props) => props.theme.color.black};
    text-align: center;
    margin: 30px;
    width: 100%;
    align-self: center;
`;