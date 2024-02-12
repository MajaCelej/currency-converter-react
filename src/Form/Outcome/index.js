import React from "react";
import { Wrapper } from "./styled";

const Outcome = ({ result }) => (
	<Wrapper>
		{!!result && (
			<>
				<strong>
					{result.sourceAmount}&nbsp;PLN&nbsp;=&nbsp;{result.targetAmount.toFixed(2)}&nbsp;{result.currency}
				</strong>
			</>
		)}
	</Wrapper>
);

export default Outcome;