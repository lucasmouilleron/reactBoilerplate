/////////////////////////////////////////////////////////////////
var React = require("react");
var Growl = require("Growl/growl.react");

/////////////////////////////////////////////////////////////////
var App = React.createClass({
	
	growler: null,

	componentDidMount: function() {
        Growl.setPosition("tr");
        Growl.setMaxToShow(4);
        this.growler = this.refs.growler;
    },

    growl: function(level, msg) {
        this.growler.addNotification(level, msg);
    },

	getInitialState: function() {
		return {liked: false};
	},

	handleClick: function(event) {
		this.setState({liked: !this.state.liked});
	},

	render: function() {
		var text = this.state.liked ? "like" : "haven't liked";
		return (
			<div className="uk-container uk-container-center uk-margin-top uk-margin-large-bottom">
			<h1>Hello world!</h1>
			<div className="uk-grid">
			<div className="uk-width-1-1">
			<dl className="uk-description-list-line">
			<dt>item 1</dt>
			<dd>item 2</dd>
			<dt>item 1</dt>
			<dd>item 2</dd>
			</dl>
			<button className="uk-button uk-button-primary" type="button" onClick={this.handleClick}><i className="fa fa-users"></i> {text}</button>
			</div>
			</div>
			</div>
			);

	}
});

/////////////////////////////////////////////////////////////////
module.exports = App;