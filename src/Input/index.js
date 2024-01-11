import React, { useState } from "react";
import "./style.css";

const Input = ({amount, setAmount}) => (
    <input 
        className="input__field" 
        type="number" 
        name="amount" 
        step="0.1" 
        min="0.10" 
        value={amount}
        onChange={(event) => setAmount(event.target.value)}
    />
);

export default Input;