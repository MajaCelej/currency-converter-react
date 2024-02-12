import Outcome from "./Outcome";
import { StyledForm, Label, Input, Select, Button, Loading, Failure } from "./styled";
import { useRatesData } from "./useRatesData";
import { useState } from "react";

export const Form = () => {
	const [currency, setCurrency] = useState("EUR");
	const [amount, setAmount] = useState("");
	const [result, setResult] = useState(null);
	const ratesData = useRatesData();

	const onFormSubmit = (event) => {
		event.preventDefault();
		calculateResult(currency, amount);
	};

	const calculateResult = (currency, amount) => {
		// Sprawdzenie, czy ratesData.data ma właściwość o nazwie `currency` oraz czy ta właściwość ma właściwość 'value'
	    if  (ratesData.data && ratesData.data[currency] && ratesData.data[currency].value) {
			const rate = ratesData.data[currency].value;

			setResult({
				sourceAmount: +amount,
				targetAmount: amount * rate,
				currency,
			});
		} else {
			console.error("Brak danych lub niepoprawna wartość waluty.");
		}
	};
	

	return (
		<StyledForm onSubmit={onFormSubmit}>
			{ratesData.state === "loading" ? (
				<Loading>Chwilka... Ładuję kursy walut.</Loading>
			) : ratesData.state === "error" ? (
				<Failure>
					Coś poszło nie tak!
					<br />
					Sprawdź swoje połączenie z internetem.
					<br />
					Jeśli masz wina leży po naszej stronie. Prosimy o cierpliwośc. Spróbuj ponownie za kilka minut!
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
							onChange={({ target }) => setAmount(target.value)} 
						/>
					</div>
					<div>
						<Label>
							<span>Waluta:</span>
						</Label>
						<Select 
							name="currency"
							value={currency}
							onChange={({ target }) => setCurrency(target.value)}
						>
							{Object.keys(ratesData.data).map((currency) => (
								<option key={currency} value={currency}>
									{currency}
								</option>
							))}
						</Select>
					</div>
					<Button onClick={calculateResult}>Przelicz</Button>
					<Outcome result={result}/>
				</>
			)}
		</StyledForm>
	);
};

export default Form;