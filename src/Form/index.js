import { StyledForm, Label, Input, Select, Button, Loading, Failure } from "./styled";
import { useRatesData } from "./useRatesData";
import { useState } from "react";

export const Form = () => {
	const [currency, setCurrency] = useState("EUR");
	const [amount, setAmount] = useState("");
	const [result, setResult] = useState("");
	const ratesData = useRatesData();

	const onFormSubmit = (event) => {
		event.preventDefault();
		calculateResult(currency, amount);
	};

	const calculateResult = (currency, amount) => {
		const rate = ratesData.rates[currency];

		setResult({
			sourceAmount: +amount,
			targetAmount: amount * rate,
			currency,
		});
	};

	return (
		<StyledForm onSubmit={onFormSubmit}>
			{ratesData.state === "loading" ? (
				<Loading>
                    Chwilka. Ładuję kursy walut.
                </Loading>
			) : ratesData.state === "error" ? (
				<Failure>
					Coś poszło nie tak! 
                    <br />Sprawdź swoje połączenie z internetem. 
                    <br />Jeśli masz wina leży po naszej stronie. Prosimy o cierpliwośc. Spróbuj ponownie za kilka minut!
				</Failure>
			) : (
				<>
					<div>
						<Label>
							<span>Kwota:</span>
						</Label>
						<Input 
                            type="number" 
                            name="amount" 
                            step="0.1" 
                            min="0.10"
                            value={amount} 
                            placeholder="Wpisz kwotę"
                            onChange={(event) => setAmount(event.target.value)} />
					</div>
					<div>
						<Label>
							<span>Waluta:</span>
						</Label>
						<Select 
                            value={currency} 
                            onChange={({ target }) => setCurrency(target.value)}
                        >
                            {!!ratesData.rates && Object.keys(ratesData.rates).map(((currency) => (
                                <option
                                    key={currency}
                                    value={currency}
                                >
                                    {currency}
                                </option>
                            )))}
						</Select>
					</div>
					<Button onClick={calculateResult}>Przelicz</Button>
                    <p>
                        {result}
                    </p>
				</>
			)}
		</StyledForm>
	);
};

export default Form;
