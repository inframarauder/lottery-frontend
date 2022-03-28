import { useEffect } from "react";
import web3 from "./utils/web3";

const App = () => {
	useEffect(() => {
		web3.eth.getAccounts().then(console.log);
	}, []);
	return <div>App</div>;
};

export default App;
