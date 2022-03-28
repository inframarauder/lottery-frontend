import { useState, useEffect } from "react";
import web3 from "./utils/web3";
import lottery from "./utils/lottery";

const App = () => {
	const [state, setState] = useState({
		lotteryId: "",
		manager: "",
		players: [],
		prizePool: "",
		message: "",
	});

	const [amount, setAmount] = useState("0.1");

	useEffect(() => {
		const fetchDataFromContract = async () => {
			const lotteryId = await lottery.methods.getLotteryId().call();
			const manager = await lottery.methods.getManager().call();
			const prizePool = await lottery.methods.getPrizePool().call();
			const players = await lottery.methods.getPlayers().call();

			setState((state) => ({
				...state,
				lotteryId,
				manager,
				prizePool,
				players,
			}));
		};
		fetchDataFromContract();
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const accounts = await web3.eth.getAccounts();

		setState({ ...state, message: "Waiting on success..." });

		await lottery.methods.enterLottery().send({
			from: accounts[0], //asume always first account being used
			value: web3.utils.toWei(amount, "ether"),
		});

		setState({ ...state, message: "Entered!" });
	};

	const handlePickWinner = async (e) => {
		e.preventDefault();
		const accounts = await web3.eth.getAccounts();

		await lottery.methods.pickWinner().send({
			from: accounts[0],
		});

		const winnerAddress = await lottery.methods
			.getWinnerByLotteryId(state.lotteryId)
			.call();

		setState({ ...state, message: `${winnerAddress} has won the lottery!` });
	};

	return (
		<div>
			<h2>Lottery Contract!</h2>
			<p>
				This is lottery no {state.lotteryId}, managed by : {state.manager}
			</p>
			<p>
				There are currently {state.players.length} players entered, competing to
				win {web3.utils.fromWei(state.prizePool, "ether")} ether!
			</p>
			<hr />
			<form onSubmit={handleSubmit}>
				<h3>Wanna try your luck?</h3>
				<label>Amount to enter: (min 0.1 ether)</label>
				<input
					type="number"
					value={amount}
					onChange={(e) => setAmount(e.target.value)}
				/>
				<button type="submit">Enter</button>
			</form>
			<button onClick={handlePickWinner}>Pick Winner</button>
			<h2>{state.message}</h2>
		</div>
	);
};

export default App;
