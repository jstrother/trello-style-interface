const React = require('react');

const List = require('./list.jsx');

const Board = React.createClass({
	getInitialState: function() {
		return this.props.data;
	},
	onAddClick: function(listIndex, value, body) {
		const oldState = this.state;
		const cardLength = oldState.lists[listIndex].cards.length;
		oldState.lists[listIndex].cards[cardLength] = {
			title: value,
			body: body
		};
		this.setState(oldState);
	},
	onFavClick: function(listIndex, cardIndex) {
		const oldState = this.state;
		const updatedFavorite = !this.state.lists[listIndex].cards[cardIndex].favorite;
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

module.exports = Board;