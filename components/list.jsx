const React = require('react');

const Card = require('./card');

const List = React.createClass({
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

module.exports = List;