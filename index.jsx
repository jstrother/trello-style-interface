var React = require('react');
var ReactDOM = require('react-dom');

var Card = function(props) {
	return (
		<div className="card">
			<div className="card-title">{props.title}</div>
			<div className="card-body">{props.body}</div>
			<hr />
		</div>
	);
};

var List = function(props) {
	return (
		<div className="list">
			<div className="list-title">{props.title}</div>
			<br />
			<input className="add-input" />
			<button onClick={props.onClick}>{props.text}</button>
			<hr />
			<br />
		</div>
	);
};

var Board = function() {
	return (
		<div className="board">
			<List title="Seattle Bands" />
				<Card title="Nirvana"
							body="Nevermind, In Bloom, Negative Creep" />
				<Card title="Pearl Jam"
							body="Alive, Jeremy, Elderly Woman Behind the Counter in a Small Town" />
				<Card title="Soundgarden"
							body="Spoonman, Black Hole Sun, Burden in My Hand" />
			<List title="Not Seattle Bands" />
				<Card title="Metallica"
							body="Unforgiven, Seek and Destroy, Blackened" />
				<Card title="The Who"
							body="My Generation, Love Reign o'er Me, Behind Blue Eyes" />
				<Card title="Led Zepplin"
							body="Immigrant Song, Ramble On, Stairway to Heaven" />
		</div>
	);

	// data: {
	// 	title: "Favorite Bands",
	// 	lists: [
	// 		{
	// 			title: "Seattle Bands",
	// 			cards: ["Nirvana", "Pearl Jam", "Soundgarden"]
	// 		},
	// 		{
	// 			title: "Not Seattle Bands",
	// 			cards: ["Metallica", "The Who", "Led Zepplin"]
	// 		}
	// 	]
	// }
};

document.addEventListener('DOMContentLoaded', function() {
	ReactDOM.render(<Board />, document.getElementById('app'));
});