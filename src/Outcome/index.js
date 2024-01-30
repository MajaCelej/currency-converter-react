import React from "react";
import { Wrapper } from "./styled";

const Outcome = ({result, setResult}) => (
    <Wrapper>
        <p>
            Kwota w PLN: <strong>{result}</strong>
        </p>
    </Wrapper>
);

export default Outcome;