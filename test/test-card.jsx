const React = require('react');
const TestUtils = require('react-addons-test-utils');
const should = require('chai').should();

const Card = require('../components/card');

describe('Card component', function() {
	it('Renders a Card with title and body', function() {
		const title = "Title of a rendered Card";
		const body = "The text area that is the body of a rendered Card.";

		const renderer = TestUtils.createRenderer();
		renderer.render(<Card title={title} body={body} />);
		const result = renderer.getRenderOutput();
		result.props.className.should.equal("card ");

		var title = result.props.children[0];
		var body = result.props.children[1];

		// Add further tests to make sure that props.title and props.body come through OK
		// Also add test to make sure button className='favorite-band' works
	});
});