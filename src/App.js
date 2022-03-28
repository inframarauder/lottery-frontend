import { useState, useEffect } from "react";
import lottery from "./utils/lottery";

const App = () => {
	const [state, setState] = useState({ manager: "" });

	useEffect(() => {
		const fetchDataFromContract = async () => {
			const manager = await lottery.methods.getManager().call();
			setState((state) => ({ ...state, manager }));
		};
		fetchDataFromContract();
	}, []);

	return <div>Manager : {state.manager}</div>;
};

export default App;
