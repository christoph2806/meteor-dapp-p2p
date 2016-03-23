
var SOL_source = `
/* GermanLife DAO */

contract GermanLife {

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
    function GermanLife() {
		claimsAdjuster = 0x8cd76b1a86bf067c584542509b88e0a5aca86506;
		underwriter = 0x0837e68fd62e4e5b217d90913da91534c881440b;
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

