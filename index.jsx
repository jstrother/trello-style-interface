const React = require('react');
const ReactDOM = require('react-dom');

const Board = require('./components/board');

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
					body: "My Generation, Love Reign O'er Me, Behind Blue Eyes"
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