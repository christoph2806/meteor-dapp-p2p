Template.login.events({
  'click #login': function () {
	  if (document.getElementById('password').value != 'password') {
		  document.getElementById('error_message').innerText='Passwort falsch - bitte wiederholen';
	  } else {
		  var user = document.getElementById('email').value;
		  if (user == 'john.doe@gmail.com') {
			  Router.go('/customer');
		  } else if (user == 'underwriter@p2p.com') {
			  Router.go('/issuer');
		  } else if (user == 'adjuster@p2p.com') {
			  Router.go('/adjuster');
		  }
	  }
  }
});