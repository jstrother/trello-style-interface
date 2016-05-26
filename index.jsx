var React = require('react');
var ReactDOM = require('react-dom');

var Card = React.createClass({
	render: function() {
		return (
			<div className="card">
				<div className="card-title">{this.props.title}</div>
				<div className="card-body">{this.props.body}</div>
				<hr />
			</div>
		);
	}
});

var List = React.createClass({
	render: function() {
		return (
			<div className="list">
				<h2>{this.props.title}</h2>
				<br />
				{this.props.cards.map(function(card, index) {
					return (
						<Card title={card.title}
									body={card.body}
									key={index} />
					);
				})}
				<input className="add-input" onChange={this.props.onAddInputChanged} />
				<button onClick={this.props.onClick}>{this.props.text}</button>
				<hr />
				<br />
			</div>
		);
	}
});

var Board = React.createClass({
	onAddInputChanged: function() {
		console.log("onAddInputChanged");
	},
	onClick: function() {
		console.log("onClick");
		// this.onAddInputChanged
	},
	render: function() {
		return (
			<div className="board">
				<h1>{this.props.data.title}</h1>
				{this.props.data.lists.map(function(list, index) {
					return(
						<List title={list.title}
							onAddInputChanged={this.onAddInputChanged}
							onClick={this.onClick}
							text="Add Band"
							cards={list.cards}
							key={index} />
					);
				}.bind(this))}
			</div>
		);
	}
});

var bands = {
	title: "Bands",
	lists: [
		{
			title: "Seattle Bands",
			cards: [
				{
					title: "Nirvana",
					body: "Nevermind, In Bloom, Negative Creep"
				}, 
				{
					title: "Pearl Jam",
					body: "Alive, Jeremy, Elderly Woman Behind the Counter in a Small Town"
				}, 
				{
					title: "Soundgarden",
					body: "Spoonman, Black Hole Sun, Burden in My Hand"
				}
			]
		},
		{
			title: "Not Seattle Bands",
			cards: [
				{
					title: "Metallica",
					body: "Unforgiven, Seek and Destroy, Blackened"
				}, 
				{
					title: "The Who",
					body: "My Generation, Love Reign o'er Me, Behind Blue Eyes"
				}, 
				{
					title: "Led Zepplin",
					body: "Immigrant Song, Ramble On, Stairway to Heaven"
				}
			]
		}
	]
};

document.addEventListener('DOMContentLoaded', function() {
	ReactDOM.render(<Board data={bands} />, document.getElementById('app'));
});