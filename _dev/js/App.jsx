/////////////////////////////////////////////////////////////////
var React = require("react");
var Router = require("react-router");

/////////////////////////////////////////////////////////////////
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

/////////////////////////////////////////////////////////////////
var App = React.createClass({
	
	render: function() {

		return (
			<div className="uk-container uk-container-center uk-margin-top uk-margin-large-bottom">

			<h1>reactBoilerplate</h1>

			<nav className="uk-navbar uk-navbar uk-margin-large-bottom">
			<ul className="uk-navbar-nav">
			<li><Link to="home">Home</Link></li>
			<li><Link to="about">About</Link></li>
			</ul>
			</nav>

			<RouteHandler/>

			</div>
			);

	}
});

/////////////////////////////////////////////////////////////////
module.exports = App;