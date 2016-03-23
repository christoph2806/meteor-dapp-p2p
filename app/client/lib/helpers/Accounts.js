EthAccounts = {};

EthAccounts.listAccounts = function () {
	
	var table = "<table border=1><tr><th>Nr.</th><th>Adresse</th></tr>";
	
    _.each(web3.eth.accounts, function(account, accountIndex){
            table += "<tr><td>"+accountIndex+"</td><td>"+account+"</td></tr>";
        });
	
	table += "</table>";
	return table;
	
}