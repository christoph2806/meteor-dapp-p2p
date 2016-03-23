
Polices = {};

Polices.listPolice = function(view) {

	polices = P2P_Insurance.contractInstance.polices;
	numPolices = P2P_Insurance.contractInstance.numPolices();
	var table = "<table border=1><tr><th>Nr.</th><th>Name</th><th>Betrag</th><th>Versicherung</th><th>Policiert</th><th>Gemeldet</th><th>Reguliert</th><th>Schaden</th><th>MNr.</th></tr>";
	for (i=0;i<numPolices;i++) {
		var nr = i;
		var police = polices(i);
		var name=police[0];
		var amount=police[2];
		var text=police[3];
		var issued=police[4];
		var reported=police[5];
		var claimed=police[6];
		var report=police[7];
		var mNr=police[8];
		if (typeof view != 'undefined') {
			if (view == 'issuer' && issued) {continue;}
			if (view == 'reporter' && (!issued ||  reported || claimed)) {continue;}
			if (view == 'adjuster' && (!issued || !reported || claimed)) {continue;}
			if (view == 'dashboard' && claimed) {continue;}
		}
		table=table+"<tr><td>"+nr+"</td><td>"+ name+"</td><td>"+ amount+"</td><td>"+ text+"</td><td>"+ issued+"</td><td>"+ reported+"</td><td>"+ claimed+"</td><td>"+ report+"</td><td>"+ mNr+"</td></tr>";
	}
	table=table+"</table>";
	return table;
}
