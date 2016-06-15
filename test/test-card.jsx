const React = require('react');
const TestUtils = require('react-addons-test-utils');
const should = require('chai').should();

const Card = require('../components/card');

describe('Card component', function() {
	it('Renders a Card with title and body', function() {
		const cardTitle = "Title of a rendered Card";
		const cardBody = "The text area that is the body of a rendered Card.";

		const renderer = TestUtils.createRenderer();
		renderer.render(<Card title={cardTitle} body={cardBody} />);
		const result = renderer.getRenderOutput();
		result.props.className.should.equal("card ");

		var title = result.props.children[0];
		title.props.className.should.equal('card-title');
		title.props.children.should.equal(cardTitle);

		var body = result.props.children[1];
		body.props.className.should.equal('card-body');
		body.props.children.should.equal(cardBody);
	});
});