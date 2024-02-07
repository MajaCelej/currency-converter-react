import { useState, useEffect } from "react";

export const useRatesData = () => {
	const [ratesData, setRatesData] = useState({
		state: "loading",
	});

	const getCurrenciesRates = async () => {
		try {
			const response = await fetch("https://api.currencyapi.com/v3/status?apikey=cur_live_HoaLsFNB0Z18fvXaJGCdbPFmU5eeDwjGtdB7e0E9");

			if (!response.ok) {
				throw new Error(response.statusText);
			}

			const { rates, data } = await response.json();

			setRatesData({
				state: "success",
				rates,
				data,
			});
		} catch (error) {
			setRatesData({ state: "error" });
		}
	};

	useEffect(() => {
		setTimeout(getCurrenciesRates, 2000);
	}, []);

	return ratesData;
};
