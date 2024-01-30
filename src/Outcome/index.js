import React from "react";
import "./style.css";

const Outcome = ({result, setResult}) => (
    <section className="outcome__textField">
        <p>
            Kwota w PLN: <strong>{result}</strong>
        </p>
    </section>
);

export default Outcome;