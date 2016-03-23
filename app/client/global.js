if (Meteor.isClient) {
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

function standard_view (view, uri, title, header) {
	Router.route(uri, function () {
		this.layout('layout-main');
		this.render(view, {to: 'main'});
		this.render(header, {to: 'header'});
		this.render('aside', {to: 'aside'});
		this.render('actionbar', {to: 'actionbar'});
	});	
}

standard_view('adjuster', '/adjuster', 'P2P: Regulierer', 'header');
standard_view('reporter', '/reporter', 'P2P: Schadensmeldung', 'customer-header');
standard_view('issuer', '/issuer', 'P2P: Policierer', 'header');
standard_view('customer', '/customer', 'P2P: Versicherungsantrag', 'customer-header');
standard_view('dashboard', '/dashboard', 'P2P: Übersicht', 'header');
standard_view('login', '/login', 'P2P: Login', 'login-header');
standard_view('contract', '/contract', 'P2P: Contract', 'login-header');

Router.route('/', function () {
	this.redirect('/login');
	
});