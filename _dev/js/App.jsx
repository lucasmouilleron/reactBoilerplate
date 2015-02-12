/////////////////////////////////////////////////////////////////
var React = require("react/addons");
var Router = require("react-router");
var classSet = React.addons.classSet;

/////////////////////////////////////////////////////////////////
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;
var State = Router.State;

/////////////////////////////////////////////////////////////////
var App = React.createClass({

	mixins: [State],
	
	render: function() {	


		return (
			<div className="uk-container uk-container-center uk-margin-top uk-margin-large-bottom">

			<h1>reactBoilerplate</h1>

			<nav className="uk-navbar uk-navbar uk-margin-large-bottom">
			<ul className="uk-navbar-nav">
			<li className={classSet({"uk-active": this.isActive("home")})}><Link to="home">Home</Link></li>
			<li className={classSet({"uk-active": this.isActive("about")})}><Link to="about">About</Link></li>
			</ul>
			</nav>

			<RouteHandler/>

			</div>
			);

	}
});

/////////////////////////////////////////////////////////////////
module.exports = App;