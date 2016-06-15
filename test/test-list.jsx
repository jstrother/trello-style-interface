const React = require('react');
const TestUtils = require('react-addons-test-utils');
const should = require('chai').should();

const List = require('../components/list');

describe('List component', function() {
	it('Renders a List component', function() {
		const listTitle = "Title of a rendered List";
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

		var list = result.props.children;
		list[0].props.children.should.equal(listTitle);
		list[2].length.should.equal(1);
	});
});