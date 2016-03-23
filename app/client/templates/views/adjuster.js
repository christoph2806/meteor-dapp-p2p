

function adjust() {

	
	var policeID = document.getElementById('policeID').value;
	
	if (policeID == "") {
		document.getElementById("error").innerText = "Bitte Angaben vervollständigen!";
		return false;
	}

	document.getElementById("res").innerHTML="Warte auf Best&auml;tigung ...";
	
	P2P_Insurance.contractInstance.adjustClaim(policeID, {from: P2P_Insurance.adjusterAddress, gas:200000});

	var mNr = P2P_Insurance.contractInstance.polices(policeID)[8];
	P2P_Insurance.contractInstance.ClaimAdjusted().watch(function (error, result) {
		if (!error && (result.args.policeID == policeID) && (mNr+"" <= result.args.mNr+"")) {
			document.getElementById("res").innerText = "Schaden wurde reguliert.";
			document.getElementById("policeID").value = "";
			document.getElementById("adjust").disabled = false;
		}
	});	
	
	P2P_Insurance.contractInstance.ThrowError().watch(function (error, result) {
		if (!error && (result.args.policeID == policeID) && (mNr+"" <= result.args.mNr+"")) {
			document.getElementById("error").innerText = result.args.message;
			document.getElementById("policeID").value = "";
			document.getElementById("adjust").disabled = false;
		}
	});	
	
}

Template.adjuster.onCreated(function () {
	Session.set('view','adjuster');	
});


Template.adjuster.events({
	'click #adjust': function () {
		try {
			document.getElementById("error").innerText = "";
			if (adjust()) {
				document.getElementById("adjust").disabled = true;
			}
		} catch (err) {
			console.log(err);
			document.getElementById("error").innerText = err.message;
		}
	}
});
