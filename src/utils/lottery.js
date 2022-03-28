import web3 from "./web3";

const address = "0xB13D854D8281F59C84E7173a6de638aAd23B8525";
const abi = [
	{
		inputs: [{ internalType: "string", name: "_lotteryId", type: "string" }],
		stateMutability: "nonpayable",
		type: "constructor",
		signature: "constructor",
	},
	{
		inputs: [],
		name: "enterLottery",
		outputs: [],
		stateMutability: "payable",
		type: "function",
		payable: true,
		signature: "0xc1af5785",
	},
	{
		inputs: [],
		name: "getLotteryId",
		outputs: [{ internalType: "string", name: "", type: "string" }],
		stateMutability: "view",
		type: "function",
		constant: true,
		signature: "0x900aafaf",
	},
	{
		inputs: [],
		name: "getManager",
		outputs: [{ internalType: "address", name: "", type: "address" }],
		stateMutability: "view",
		type: "function",
		constant: true,
		signature: "0xd5009584",
	},
	{
		inputs: [],
		name: "getPlayers",
		outputs: [{ internalType: "address[]", name: "", type: "address[]" }],
		stateMutability: "view",
		type: "function",
		constant: true,
		signature: "0x8b5b9ccc",
	},
	{
		inputs: [],
		name: "getPrizePool",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
		constant: true,
		signature: "0x884bf67c",
	},
	{
		inputs: [{ internalType: "string", name: "_lotteryId", type: "string" }],
		name: "getWinnerByLotteryId",
		outputs: [{ internalType: "address", name: "", type: "address" }],
		stateMutability: "view",
		type: "function",
		constant: true,
		signature: "0xec44a343",
	},
	{
		inputs: [],
		name: "pickWinner",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
		signature: "0x5d495aea",
	},
];

export default new web3.eth.Contract(abi, address); //this is a local instance of the contract
