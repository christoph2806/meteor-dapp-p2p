Template.polices_table.onRendered(function () {
		
    this.updateList = Meteor.setInterval(function() {
        if(!Session.get('connected'))
            return;
            
		try {
			document.getElementById("table").innerHTML=Polices.listPolice(Session.get('view'));
			//document.getElementById("accounts").innerHTML=EthAccounts.listAccounts();
			
		} catch (err) {
			console.log(err);
			document.getElementById("table_error").innerText = err.message;
		}

       
	}, 1 * 1000);

});

Template.polices_table.onDestroyed(function() {

	Meteor.clearInterval(this.updateList);
	
});
