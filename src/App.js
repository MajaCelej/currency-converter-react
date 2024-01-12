import Text from "./Text";
import Container from "./Container";
import Button from "./Button";
import Outcome from "./Outcome";
import Input from "./Input";
import Label from "./Label";
import Select from "./Select";
import { useState } from "react";

function App() {
  const currencies = [
    { id: 1, name: "Euro", symbol: "EUR", rate: 4.43 },
    { id: 2, name: "Frank Szwajcarski", symbol: "CHF", rate: 4.65},
    { id: 3, name: "Korona Czeska", symbol: "CZK", rate: 0.18 },
  ];

  const [currency, setCurrency] = useState(currencies[0].name);
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
  }

  const calculateResult = () => {
    const selectedCurrency = currencies.find(({ name }) => name === currency);

    if (!selectedCurrency ) {
      console.error("Currency not found")
      return;
    }
    else {
      setResult(amount * selectedCurrency.rate)
    }
  };

  return (
  <Container>
    <Text />
    <form className="form" onSubmit={onFormSubmit}>
      <div>
        <Label
         className="form__label"
         title={"Kwota:"}
        />
        <Input 
         setAmount={setAmount} 
         amount={amount}
        />
      </div>
      <div>
        <Label title={"Waluta:"}/>
        <Select 
         setCurrency={setCurrency}
         currency={currency}
        />
      </div>
      <Button calculateResult={calculateResult} />
    </form>
      <Outcome result={result} />
  </Container>
  );
};

export default App;