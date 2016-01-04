import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';
const should = chai.should();
const assert = chai.assert;

import NowButton from '../../src/components/Button/Button.react';

describe('Button component', function() {
    it('should display text', function() {
        var renderedComponent = TestUtils.renderIntoDocument(
            <NowButton>Now Button</NowButton>
        );

        var pComponent = TestUtils.findRenderedDOMComponentWithClass(renderedComponent, 'now-button');

        assert.equal(pComponent.textContent, 'Now Button');
    });


    it('should be inverted', function(){
        var transparentButton = TestUtils.renderIntoDocument(
            <NowButton classes="inverted">Build your bundle</NowButton>
        );

        var renderedButton = TestUtils.findRenderedDOMComponentWithClass(transparentButton, 'inverted');
        should.exist(renderedButton)
    });


    it('should be inverted and green', function(){
        var transparentButton = TestUtils.renderIntoDocument(
            <NowButton classes="inverted green">Build your bundle</NowButton>
        );

        var renderedButton = TestUtils.findRenderedDOMComponentWithClass(transparentButton, 'inverted green');
        should.exist(renderedButton)
    });


    it('should be a secondary button', function(){
        var secondaryButton = TestUtils.renderIntoDocument(
            <NowButton classes="secondary green">Build your bundle</NowButton>
        );

        var renderedButton = TestUtils.findRenderedDOMComponentWithClass(secondaryButton, 'secondary green');
        should.exist(renderedButton)
    });


    it('should accept any props', function() {
        var buttonWithName = TestUtils.renderIntoDocument(
            <NowButton name="build-your-bundle">Build your bundle</NowButton>
        );

        var renderedButton = TestUtils.findRenderedDOMComponentWithTag(buttonWithName, 'button');
        assert.equal(renderedButton.props.name, 'build-your-bundle');
    });

});