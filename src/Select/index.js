import React, { useState } from "react";
import "./style.css";

const Select = ({setCurrency, currency}) => (
    <select 
     className="input__field"
     value={currency}
     onChange={(event) => setCurrency(event.target.value)}
    >
      <option>Euro</option>
      <option>Frank Szwajcarski</option>
      <option>Korona Czeska</option>
    </select>
);

export default Select;