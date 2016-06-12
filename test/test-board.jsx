const React = require('react');
const TestUtils = require('react-addons-test-utils');
const should = require('chai').should();

const Board = require('../components/board');

describe('Board component', function() {
	it('Renders a Board component', function() {
		const cardTitle = "Title of a rendered Card";
		const cardBody = "The text area that is the body of a rendered Card.";

		const List = [
			{
				title: cardTitle,
				body: cardBody
			},
			{
				title: cardTitle,
				body: cardBody
			},
			{
				title: cardTitle,
				body: cardBody
			}
		];

		const renderer = TestUtils.createRenderer();
		renderer.render(<Board lists={List}} />);
		const result = renderer.getRenderOutput();
		result.props.className.should.equal('board');

		// Add further tests to make sure number of Lists is correct
		// Also test for List props title and cards are coming through OK
	});
});