const React = require('react');

const Card = React.createClass({
	_onFavClick: function() {
		this.props.onFavClick(this.props.listIndex, this.props.cardIndex);
	},
	render: function() {
		const favorite = (this.props.favorite) ? 'favorite' : '';
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

module.exports = Card;