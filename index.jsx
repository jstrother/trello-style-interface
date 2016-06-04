var React = require('react');
var ReactDOM = require('react-dom');

var Card = React.createClass({
	render: function() {
		console.log('Props from Card', this.props);
		console.log('State from Card', this.state);
		return (
			<div className="card" favorite='false'>
				<div className="card-title">{this.props.title}</div>
				<div className="card-body">{this.props.body}</div>
				<button className="favorite-band" onClick={this.props.onFavClick}>Mark as Favorite</button>
				<hr />
			</div>
		);
	}
});

var List = React.createClass({
	_onAddClick: function() {
		this.props.onAddClick(this.refs.bandName.value);
	},
	render: function() {
		console.log('Props from List', this.props);
		console.log('State from List', this.state);
		return (
			<div className="list">
				<h2>{this.props.title}</h2>
				<br />
				{this.props.cards.map(function(card, index) {
					return (
						<Card title={card.title}
									body={card.body}
									// favorite={this.state.favorite}
									onFavClick={this.props.onFavClick}
									key={index} />
					);
				}.bind(this))}
				<input className="add-input" ref="bandName" onChange={this.props.onAddInputChanged} />
				<button onClick={this._onAddClick}>{this.props.text}</button>
				<hr />
				<br />
			</div>
		);
	}
});

var Board = React.createClass({
	getInitialState: function() {
		return this.props.data;
	},
	onAddInputChanged: function() {
		console.log("onAddInputChanged");
	},
	onAddClick: function(value) {
		console.log("onAddClick");
		console.log(value);
		// creates new card
	},
	onFavClick: function() {
		console.log("onFavClick");
		this.setState({
			favorite: !this.state.favorite
		})
	},
	render: function() {
		return (
			<div className="board">
				<h1>{this.state.title}</h1>
				{this.state.lists.map(function(list, index) {
					return(
						<List title={list.title}
							onAddInputChanged={this.onAddInputChanged}
							onAddClick={this.onAddClick}
							onFavClick={this.onFavClick}
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