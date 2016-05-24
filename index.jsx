var React = require('react');
var ReactDOM = require('react-dom');

var Card = function() {
	var title = "A Card for Stuff";
	var body = "The things we are writing go here!";
	return (
		<div className="card">
			<div className="card-title">{title}</div>
			<hr />
			<div className="card-body">{body}</div>
		</div>
	);
};

var List = React.createClass({
	render: function() {
		var cards = [];
		for (var i = 0; i < 5; i++) {
			cards.push(<Card key={i}/>);
			cards.push(<br key={i + 10}/>);
		}
		return (
			<div className="list">
				{cards}
			</div>
		);
	}
});

var Board = React.createClass({
	render: function() {
		var lists = [];
		for (var i = 0; i < 5; i++) {
			lists.push(<List key={i}/>);
			lists.push(<br key={i + 20}/>);
			lists.push(<br key={i + 30}/>);
			lists.push(<br key={i + 40}/>);
		}
		return (
			<div className="list">
				{lists}
			</div>
		);
	}
});

document.addEventListener('DOMContentLoaded', function() {
	ReactDOM.render(<Board />, document.getElementById('app'));
});