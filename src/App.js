import Text from "./Text";
import Container from "./Container";
import Form from "./Form";
import Outcome from "./Outcome";
import { useState } from "react";

function App() {
  const currencies = [
    { id: 1, name: "Euro", symbol: "EUR", rate: 4.34 },
    { id: 2, name: "Frank Szwajcarski", symbol: "CHF", rate: 4.64 },
    { id: 3, name: "Korona Czeska", symbol: "CZK", rate: 0.17 },
  ];

  const [currency, setCurrency] = useState(currencies[0].name);
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
  };

  const calculateResult = () => {
    const selectedCurrency = currencies.find(({ name }) => name === currency);

    if (!selectedCurrency) {
      console.error("Currency not found");
      return;
    } else {
      setResult(amount * selectedCurrency.rate);
    }
  };

  return (
    <Container>
      <Text />
      <Form 
        onFormSubmit={onFormSubmit}
        setCurrency={setCurrency}
        setAmount={setAmount}
        amount={amount}
        currency={currency}
        calculateResult={calculateResult}
        setResult={setResult}
      />
      <Outcome result={result} />
    </Container>
  );
}

export default App;
