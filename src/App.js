import Text from "./Text";
import Container from "./Container";
import Form from "./Form";
import Outcome from "./Outcome";
import Clock from "./Clock";
import { useState } from "react";

function App() {

	return (
		<Container>
			<Text />
			<Clock />
			<Form />
			<Outcome />
		</Container>
	);
}

export default App;
