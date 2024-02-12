import { useState, useEffect } from "react";
import { fetchRatesData } from "./URL";

export const useRatesData = () => {
	const [ratesData, setRatesData] = useState({
		state: "loading",
	});

	const getCurrenciesRates = async () => {
		try {
			const { meta, data} = await fetchRatesData();

			setRatesData({
				state: "success",
				meta,
				data,
			});

		} catch (error) {
			setRatesData({ state: "error" });
		}
	};

	useEffect(() => {
		setTimeout(getCurrenciesRates, 1000);
	}, []);

	return ratesData;
};
