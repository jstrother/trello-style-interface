const React = require('react');
const TestUtils = require('react-addons-test-utils');
const should = require('chai').should();

const List = require('../components/list');

describe('List component', function() {
	it('Renders a List component', function() {
		const listTitle = "Title of a rendered Card";
		const cardTitle = "Title of a rendered Card";
		const cardBody = "The text area that is the body of a rendered Card.";

		const Card = [
			{
				title: cardTitle,
				body: cardBody
			}
		];

		const renderer = TestUtils.createRenderer();
		renderer.render(<List title={listTitle} cards={Card} />);
		const result = renderer.getRenderOutput();
		result.props.className.should.equal('list');

		// Add further tests to make sure that List title comes through OK
		// Also add tests to make sure Cards render properly and that they have props of title and body
		// Test to make sure that correct number of Cards are being rendered
	});
});