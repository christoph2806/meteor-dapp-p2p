/* P2P_Insurance ABI File */

P2P_Insurance = {};
P2P_Insurance.address = '0xDcD2B249384dEcbc99591681a4c6579fE989d74E';
P2P_Insurance.adjusterAddress = web3.eth.accounts[2];
P2P_Insurance.underwriterAddress = web3.eth.accounts[3];
P2P_Insurance.abi = 

[{
		"constant" : false,
		"inputs" : [{
				"name" : "policeID",
				"type" : "uint256",
				"typeShort" : "uint",
				"bits" : "256",
				"displayName" : "police I D",
				"template" : "elements_input_uint"
			}
		],
		"name" : "issuePolice",
		"outputs" : [],
		"type" : "function",
		"displayName" : "issue Police"
	}, {
		"constant" : true,
		"inputs" : [],
		"name" : "numPolices",
		"outputs" : [{
				"name" : "",
				"type" : "uint256",
				"value" : "0",
				"displayName" : ""
			}
		],
		"type" : "function",
		"displayName" : "num Polices"
	}, {
		"constant" : true,
		"inputs" : [{
				"name" : "",
				"type" : "uint256",
				"typeShort" : "uint",
				"bits" : "256",
				"displayName" : "",
				"template" : "elements_input_uint"
			}
		],
		"name" : "polices",
		"outputs" : [{
				"name" : "name",
				"type" : "string"
			}, {
				"name" : "customer",
				"type" : "address"
			}, {
				"name" : "amount",
				"type" : "uint256"
			}, {
				"name" : "description",
				"type" : "string"
			}, {
				"name" : "issued",
				"type" : "bool"
			}, {
				"name" : "reported",
				"type" : "bool"
			}, {
				"name" : "claimed",
				"type" : "bool"
			}, {
				"name" : "damageReport",
				"type" : "string"
			}, {
				"name" : "message",
				"type" : "uint256"
			}
		],
		"type" : "function",
		"displayName" : "polices"
	}, {
		"constant" : false,
		"inputs" : [{
				"name" : "policeID",
				"type" : "uint256",
				"typeShort" : "uint",
				"bits" : "256",
				"displayName" : "police I D",
				"template" : "elements_input_uint"
			}
		],
		"name" : "adjustClaim",
		"outputs" : [],
		"type" : "function",
		"displayName" : "adjust Claim"
	}, {
		"constant" : false,
		"inputs" : [{
				"name" : "policeID",
				"type" : "uint256",
				"typeShort" : "uint",
				"bits" : "256",
				"displayName" : "police I D",
				"template" : "elements_input_uint"
			}, {
				"name" : "report",
				"type" : "string",
				"typeShort" : "string",
				"bits" : "",
				"displayName" : "report",
				"template" : "elements_input_string"
			}
		],
		"name" : "reportDamage",
		"outputs" : [],
		"type" : "function",
		"displayName" : "report Damage"
	}, {
		"constant" : false,
		"inputs" : [],
		"name" : "simple",
		"outputs" : [{
				"name" : "result",
				"type" : "uint256"
			}
		],
		"type" : "function",
		"displayName" : "simple"
	}, {
		"constant" : false,
		"inputs" : [{
				"name" : "name",
				"type" : "string",
				"typeShort" : "string",
				"bits" : "",
				"displayName" : "name",
				"template" : "elements_input_string"
			}, {
				"name" : "amount",
				"type" : "uint256",
				"typeShort" : "uint",
				"bits" : "256",
				"displayName" : "amount",
				"template" : "elements_input_uint"
			}, {
				"name" : "description",
				"type" : "string",
				"typeShort" : "string",
				"bits" : "",
				"displayName" : "description",
				"template" : "elements_input_string"
			}
		],
		"name" : "applyForPolice",
		"outputs" : [],
		"type" : "function",
		"displayName" : "apply For Police"
	}, {
		"inputs" : [],
		"type" : "constructor"
	}, {
		"anonymous" : false,
		"inputs" : [{
				"indexed" : false,
				"name" : "policeID",
				"type" : "uint256"
			}, {
				"indexed" : false,
				"name" : "mNr",
				"type" : "uint256"
			}, {
				"indexed" : false,
				"name" : "customer",
				"type" : "address"
			}
		],
		"name" : "PoliceIssued",
		"type" : "event"
	}, {
		"anonymous" : false,
		"inputs" : [{
				"indexed" : false,
				"name" : "policeID",
				"type" : "uint256"
			}, {
				"indexed" : false,
				"name" : "mNr",
				"type" : "uint256"
			}
		],
		"name" : "PoliceApplied",
		"type" : "event"
	}, {
		"anonymous" : false,
		"inputs" : [{
				"indexed" : false,
				"name" : "policeID",
				"type" : "uint256"
			}, {
				"indexed" : false,
				"name" : "mNr",
				"type" : "uint256"
			}, {
				"indexed" : false,
				"name" : "customer",
				"type" : "address"
			}, {
				"indexed" : false,
				"name" : "report",
				"type" : "string"
			}
		],
		"name" : "DamageReported",
		"type" : "event"
	}, {
		"anonymous" : false,
		"inputs" : [{
				"indexed" : false,
				"name" : "policeID",
				"type" : "uint256"
			}, {
				"indexed" : false,
				"name" : "mNr",
				"type" : "uint256"
			}, {
				"indexed" : false,
				"name" : "customer",
				"type" : "address"
			}
		],
		"name" : "ClaimAdjusted",
		"type" : "event"
	}, {
		"anonymous" : false,
		"inputs" : [{
				"indexed" : false,
				"name" : "policeID",
				"type" : "uint256"
			}, {
				"indexed" : false,
				"name" : "mNr",
				"type" : "uint256"
			}, {
				"indexed" : false,
				"name" : "message",
				"type" : "string"
			}
		],
		"name" : "ThrowError",
		"type" : "event"
	}
];

P2P_Insurance.Contract = web3.eth.contract(P2P_Insurance.abi);
console.log(P2P_Insurance.Contract);
P2P_Insurance.contractInstance = P2P_Insurance.Contract.at(P2P_Insurance.address);
console.log(P2P_Insurance.contractInstance);

P2P_Insurance.SOL_source = 
`
/* P2P_Insurance DAO */

contract P2P_Insurance {

    /* Contract Variables and events */
    Police[] public polices;
    uint public numPolices;
	address claimsAdjuster;
	address underwriter;
 
    event PoliceIssued(uint policeID, uint mNr, address customer);
	event PoliceApplied(uint policeID, uint mNr); //, address customer, uint amount);
	event DamageReported(uint policeID, uint mNr, address customer, string report);
	event ClaimAdjusted(uint policeID, uint mNr, address customer);
	event ThrowError(uint policeID, uint mNr, string message);
	
    struct Police {
		string name;
        address customer;
        uint amount;
        string description;
        bool issued;
		bool reported;
        bool claimed;
		string damageReport;
		uint message;
    }

    /* First time setup */
    function P2P_Insurance() {
		claimsAdjuster = ${P2P_Insurance.adjusterAddress};
		underwriter = ${P2P_Insurance.underwriterAddress};
    }

	function simple() returns (uint result) { result = 1;}
	
    /* Function to create a new police */
    function applyForPolice(string name, uint amount, string description) {
        var policeID = polices.length++;
        Police p = polices[policeID];
		p.message=1;
        p.customer = msg.sender;
		p.name = name;
        p.amount = amount;
        p.description = description;
        p.issued = false;
		p.reported = false;
		p.claimed = false;
        numPolices = policeID+1;
		PoliceApplied(policeID, p.message);//, msg.sender, amount);
    }
	
	function issuePolice(uint policeID) {
		Police p = polices[policeID];
		p.message += 1;
		if (underwriter != msg.sender) {
			ThrowError(policeID, p.message, 'Nur der Underwriter darf policieren!');
		} else {
			if (p.issued) {
				ThrowError(policeID, p.message, 'Vertrag ist bereits policiert!');
			} else if (p.reported) { // kann eigentlich nicht eintreten, aber was solls!
				ThrowError(policeID, p.message, 'Schaden wurde bereits gemeldet!');
			} else if (p.claimed) { // kann eigentlich nicht eintreten, aber was solls!
				ThrowError(policeID, p.message, 'Schaden wurde bereits reguliert!');
			} else {
				p.issued = true;
				PoliceIssued(policeID, p.message, p.customer);
			}
		}
	}
      
    function reportDamage(uint policeID, string report) {
        Police p = polices[policeID];
		p.message += 1;
		if (p.customer != msg.sender) {
			ThrowError(policeID, p.message, 'Nur der Policeninhaber darf einen Schaden melden!');
		} else {
			if (!p.issued) {
				ThrowError(policeID, p.message, 'Vertrag ist noch nicht policiert!');
			} else if (p.reported) {
				ThrowError(policeID, p.message, 'Schaden wurde bereits gemeldet!');
			} else if (p.claimed) {  // kann eigentlich nicht eintreten, aber was solls!
				ThrowError(policeID, p.message, 'Schaden wurde bereits reguliert!');
			} else {
				p.reported = true;
				p.damageReport = report;
				DamageReported(policeID, p.message, p.customer, report);
			}
		}
    }
	
	function adjustClaim(uint policeID) {
		Police p = polices[policeID];
		p.message += 1;
		if (claimsAdjuster != msg.sender) {
			ThrowError(policeID, p.message, 'Nur der Regulierer darf regulieren!');
		} else {
			if (!p.issued) {
				ThrowError(policeID, p.message, 'Vertrag ist noch nicht policiert!');
			} else if (!p.reported) {
				ThrowError(policeID, p.message, 'Es wurde noch kein Schaden gemeldet!');
			} else if (p.claimed) {
				ThrowError(policeID, p.message, 'Schaden wurde bereits reguliert!');
			} else {
				p.claimed = true;
				/* Geld auszahlen */
				ClaimAdjusted(policeID, p.message, p.customer);
			}
		}
	}
	
}

`;

