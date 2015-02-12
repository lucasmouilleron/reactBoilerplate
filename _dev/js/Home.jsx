/////////////////////////////////////////////////////////////////
var React = require("react");

/////////////////////////////////////////////////////////////////
var Home = React.createClass({
	
	getInitialState: function() {
		return {liked: false};
	},

	handleClick: function(event) {
		this.setState({liked: !this.state.liked});
	},

	render: function() {
		var text = this.state.liked ? "like" : "haven't liked";
		return (
			<div>
			<h4 className="title-emphazis">Example</h4>
			<dl className="uk-description-list-line">
			<dt>item 1</dt>
			<dd>item 2</dd>
			<dt>item 1</dt>
			<dd>item 2</dd>
			</dl>
			<button className="uk-button uk-button-primary" type="button" onClick={this.handleClick}><i className="fa fa-users"></i> {text}</button>
			</div>
			);
	}
});

/////////////////////////////////////////////////////////////////
module.exports = Home;