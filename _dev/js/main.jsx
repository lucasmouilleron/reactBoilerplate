/////////////////////////////////////////////////////////////////
var React = require("react");
var Router = require("react-router");
var App = require("./App.jsx");
var Home = require("./Home.jsx");
var About = require("./About.jsx");

/////////////////////////////////////////////////////////////////
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var RouteHandler = Router.RouteHandler;

/////////////////////////////////////////////////////////////////
var routes = (
	<Route name="app" handler={App} path="/reactBoilerplate/">
	<Route name="home" handler={Home}/>
	<Route name="about" handler={About}/>
	<DefaultRoute handler={Home} />
	</Route>
	);

/////////////////////////////////////////////////////////////////
Router.run(routes, Router.HistoryLocation, function (Handler) {
	React.render(<Handler/>, document.body);
});