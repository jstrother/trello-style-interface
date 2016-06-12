const React = require('react');
const TestUtils = require('react-addons-test-utils');
const should = require('chai').should();

const Card = require('../card');

describe('Card component', function() {
	it('renders a card with title and body', function() {
		const title = "Title of a rendered card";
		const body = "The text area that is the body of a rendered card.";

		const renderer = TestUtils.createRenderer();
		renderer.render(<Card title={title} body={body} />);
		const result = renderer.getRenderOutput();
		result.props.className.should.equal('card');
	});
});