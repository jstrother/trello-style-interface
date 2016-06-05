var React = require('react');
var ReactDOM = require('react-dom');

var Card = React.createClass({
	_onFavClick: function() {
		this.props.onFavClick(this.props.listIndex, this.props.cardIndex);
	},
	render: function() {
		var favorite = (this.props.favorite) ? 'favorite' : '';
		return (
			<div className={favorite + ' card'}>
				<div className="card-title">{this.props.title}</div>
				<div className="card-body">{this.props.body}</div>
				<button className="favorite-band" onClick={this._onFavClick}>Mark as Favorite</button>
				<hr />
			</div>
		);
	}
});

var List = React.createClass({
	_onAddClick: function() {
		this.props.onAddClick(this.props.listIndex, this.refs.bandName.value, this.refs.bandBody.value);
		this.refs.bandName.value = '';
		this.refs.bandBody.value = '';
	},
	render: function() {
		return (
			<div className="list">
				<h2>{this.props.title}</h2>
				<br />
				{this.props.cards.map(function(card, index) {
					return (
						<Card title={card.title}
									body={card.body}
									favorite={card.favorite}
									onFavClick={this.props.onFavClick}
									key={index}
									listIndex={this.props.listIndex}
									cardIndex={index} />
					);
				}.bind(this))}
				<label for="add-input">Enter Band Name: </label>
				<input className="add-input" ref="bandName" /><br /><br />
				<label for="body-input">Add three songs: </label>
				<input className="body-input" ref="bandBody" /><br /><br />
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
	onAddClick: function(listIndex, value, body) {
		var oldState = this.state;
		var cardLength = oldState.lists[listIndex].cards.length;
		oldState.lists[listIndex].cards[cardLength] = {
			title: value,
			body: body
		};
		this.setState(oldState);
	},
	onFavClick: function(listIndex, cardIndex) {
		var oldState = this.state;
		var updatedFavorite = !this.state.lists[listIndex].cards[cardIndex].favorite;
		oldState.lists[listIndex].cards[cardIndex].favorite = updatedFavorite;
		this.setState(oldState);
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
							key={index} 
							listIndex={index} />
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