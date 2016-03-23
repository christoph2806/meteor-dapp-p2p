

function apply() {

	var name = document.getElementById('name').value;
	var amount = document.getElementById('amount').value;
	var description = document.getElementById('description').value;

	if (name == "" || amount == "" || description == "") {
		document.getElementById("error").innerText = "Bitte Angaben vervollständigen!";
		return false;
	}
	
	var result = GermanLife.contractInstance.applyForPolice(name,amount,description,{from:web3.eth.accounts[0],gas:200000});
	document.getElementById("res").innerHTML="Warte auf Best&auml;tigung ...";
	GermanLife.contractInstance.PoliceApplied().watch(function (error, result) {
		if (!error) {
			document.getElementById("res").innerText = "Die Police-ID des Antrags lautet "+result.args.policeID;
			document.getElementById("name").value = "";
			document.getElementById("amount").value = "";
			document.getElementById("description").value = "";
			document.getElementById("send").disabled = false;
		}
	});	
	
	return true;
}

Template.customer.events({
	'click #send': function () {
		try {
			document.getElementById("error").innerText = "";
			if (apply()) {
				document.getElementById("send").disabled = true;
			}
			
		} catch (err) {
			console.log(err);
			document.getElementById("error").innerText = err.message;
		}
	}
});

Template.customer.onRendered(function () {
	Session.set('view','customer');
});

