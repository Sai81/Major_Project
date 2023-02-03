

export const DMR_ADDRESS = '0x2B71dDeCD2f1C4E1f16fa1719B71dd0B1F677b72';

export const DMR_ABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "docAddress",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "docName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "docDescription",
				"type": "string"
			}
		],
		"name": "addDoc",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_claimNo",
				"type": "uint256"
			}
		],
		"name": "approveClaim",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_claimDesc",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_dateRaised",
				"type": "string"
			}
		],
		"name": "raiseClaim",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_claimNo",
				"type": "uint256"
			}
		],
		"name": "rejectClaim",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "docName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "recipent",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "docId",
				"type": "uint256"
			}
		],
		"name": "shareDoc",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "allClaims",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "claiment",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "claimentName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "claimDesc",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "dateRaised",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "fraudStatus",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "risk",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "premium",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "response",
						"type": "string"
					}
				],
				"internalType": "struct insuranceClaim[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "myClaims",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "claimDesc",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "claimentName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "dateRaised",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "claimId",
						"type": "uint256"
					}
				],
				"internalType": "struct claimTitle[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "myDocs",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "owner",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "ownerName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "docName",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "docId",
						"type": "uint256"
					}
				],
				"internalType": "struct docTitle[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "userExists",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "userProfile",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "userAddress",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "userName",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "age",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "gender",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "bmi",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "profession",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "userType",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "exists",
						"type": "bool"
					}
				],
				"internalType": "struct user",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_claimNo",
				"type": "uint256"
			}
		],
		"name": "viewClaim",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "claiment",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "claimentName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "claimDesc",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "dateRaised",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "fraudStatus",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "risk",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "premium",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "response",
						"type": "string"
					}
				],
				"internalType": "struct insuranceClaim",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_docNo",
				"type": "uint256"
			}
		],
		"name": "viewDoc",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "owner",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "ownerName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "docAddress",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "docName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "docDescription",
						"type": "string"
					}
				],
				"internalType": "struct document",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

