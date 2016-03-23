

function issue() {

	
	var policeID = document.getElementById('policeID').value;

	if (policeID == "") {
		document.getElementById("error").innerText = "Bitte Angaben vervollständigen!";
		return false;
	}
	
	document.getElementById("res").innerHTML="Warte auf Best&auml;tigung ...";
	
	GermanLife.contractInstance.issuePolice(policeID, {from: GermanLife.underwriterAddress, gas:200000});

	var mNr = GermanLife.contractInstance.polices(policeID)[8];
	GermanLife.contractInstance.PoliceIssued().watch(function (error, result) {
		//console.log('PoliceIssued: ' + result.args.policeID + ": " + mNr + "/" + result.args.mNr);
		if (!error && (result.args.policeID == policeID) && (mNr+"" <= result.args.mNr+"")) {
			document.getElementById("res").innerText = "Vertrag wurde policiert.";
			document.getElementById("policeID").value = "";
			document.getElementById("issue").disabled = false;
		}
	});	
	
	GermanLife.contractInstance.ThrowError().watch(function (error, result) {
		//console.log('ThrowError: ' + result.args.policeID + ": " + mNr + "/" + result.args.mNr + ": " + result.args.message);
		if (!error && (result.args.policeID == policeID) && (mNr+"" <= result.args.mNr+"")) {
			document.getElementById("error").innerText = result.args.message;
			document.getElementById("policeID").value = "";
			document.getElementById("issue").disabled = false;
		}
	});	

	return true;
	
}

Template.issuer.onCreated(function () {
	Session.set('view','issuer');	
});


Template.issuer.events({
	'click #issue': function () {
		try {
			document.getElementById("error").innerText = "";
			if (issue()) {
				document.getElementById("issue").disabled = true;
			}
			
		} catch (err) {
			console.log(err);
			document.getElementById("error").innerText = err.message;
		}
	}
});
