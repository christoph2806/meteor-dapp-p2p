

function reportDamage() {

	var policeID = document.getElementById('policeID').value;
	var report = document.getElementById('report').value;
	
	if (policeID == "" || report == "") {
		document.getElementById("error").innerText = "Bitte Angaben vervollständigen!";
		return false;
	}
	
	document.getElementById("res").innerHTML="Warte auf Best&auml;tigung ...";
	
	GermanLife.contractInstance.reportDamage(policeID, report, {from: web3.eth.accounts[0], gas:200000});

	var mNr = GermanLife.contractInstance.polices(policeID)[8];
	GermanLife.contractInstance.DamageReported().watch(function (error, result) {
		console.log(result.args.policeID);
		console.log(policeID);
		if (!error && (result.args.policeID == policeID) && (mNr+"" <= result.args.mNr+"")) {
			document.getElementById("res").innerText = "Schadensmeldung ist eingegangen.";
			document.getElementById("policeID").value = "";
			document.getElementById("report").value = "";
			document.getElementById("claim").disabled = false;
		}
	});	
	
	GermanLife.contractInstance.ThrowError().watch(function (error, result) {
		if (!error && (result.args.policeID == policeID) && (mNr+"" <= result.args.mNr+"")) {
			document.getElementById("error").innerText = result.args.message;
			document.getElementById("policeID").value = "";
			document.getElementById("report").value = "";
			document.getElementById("claim").disabled = false;
		}
	});	
	
}

Template.reporter.onCreated(function () {
	Session.set('view','reporter');	
});

Template.reporter.events({
	'click #claim': function () {
		try {
			document.getElementById("error").innerText = "";
			if (reportDamage()) {
				document.getElementById("claim").disabled = true;
			}

		} catch (err) {
			console.log(err);
			document.getElementById("error").innerText = err.message;
		}
	}
});
