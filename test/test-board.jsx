const React = require('react');
const TestUtils = require('react-addons-test-utils');
const should = require('chai').should();

const Board = require('../components/board');

describe('Board component', function() {
	it('Renders a Board component', function() {
		const boardTitle = "Title of a rendered Board";
		const listTitle = "Title of a rendered List";
		const cardTitle = "Title of a rendered Card";
		const cardBody = "The text area that is the body of a rendered Card.";

		const Card = {
				title: cardTitle,
				body: cardBody
			};

		const List = {
			title: listTitle,
			cards: [Card]
		};

		const Boards = {
			title: boardTitle,
			lists: [List]
		};

		const renderer = TestUtils.createRenderer();
		renderer.render(<Board data={Boards} />);
		const result = renderer.getRenderOutput();
		result.props.className.should.equal('board');

		const board = result.props.children;
		board[0].props.children.should.equal(boardTitle);
		board[1][0].props.title.should.equal(listTitle);
		board[1].length.should.equal(1);

		// Add further tests to make sure number of Lists is correct
		// Also test for List props title and cards are coming through OK
	});
});