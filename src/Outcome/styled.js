import styled from "styled-components";

export const Wrapper = styled.section`
    background-color: ${(props) => props.theme.color.waxflower};
    border: solid 1px ${(props) => props.theme.color.black};
    text-align: center;
`;