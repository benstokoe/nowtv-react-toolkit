import React from 'react';
import { shallow } from 'enzyme';
import { assert } from 'chai';

import NowTip from './Tip.react';

describe('Tip component', function () {
  it('should render a tip', function () {
    const renderedComponent = shallow(<NowTip/>);
    const component = renderedComponent.find('.now-tip');
    assert.ok(component);
  });

  it('should contain some content', function () {
    const renderedComponent = shallow(<NowTip>this is tip content</NowTip>);
    const component = renderedComponent.find('p');
    assert.equal(component.text(), 'this is tip content');
  });

  describe('arrow position', function () {
    describe('top centre', function () {
      it('should render correct arrow', function () {
        const renderedComponent = shallow(<NowTip arrow-position="top-centre">this is tip content</NowTip>);
        const component = renderedComponent.find('.arrow-top-centre');
        assert.ok(component);
      });

      it('should render tip with correct class for arrow position', function () {
        const renderedComponent = shallow(<NowTip arrow-position="top-centre">this is tip content</NowTip>);
        const component = renderedComponent.find('.now-tip');
        assert.include(component.props().className, 'top-centre');
      });
    });

    describe('bottom right', function () {
      it('should render correct arrow', function () {
        const renderedComponent = shallow(<NowTip arrow-position="bottom-right">this is tip content</NowTip>);
        const component = renderedComponent.find('.arrow-bottom-right');
        assert.ok(component);
      });

      it('should render tip with correct class for arrow position', function () {
        const renderedComponent = shallow(<NowTip arrow-position="bottom-right">this is tip content</NowTip>);
        const component = renderedComponent.find('.now-tip');
        assert.include(component.props().className, 'bottom-right');
      });
    });

    describe('undefined', function () {
      it('should render correct arrow top centre', function () {
        const renderedComponent = shallow(<NowTip>this is tip content</NowTip>);
        const component = renderedComponent.find('.arrow-top-centre');
        assert.ok(component);
      });

      it('should render tip with correct class for arrow position', function () {
        const renderedComponent = shallow(<NowTip>this is tip content</NowTip>);
        const component = renderedComponent.find('.now-tip');
        assert.include(component.props().className, 'top-centre');
      });
    });

    describe('unsupported', function () {
      it('should render correct arrow top centre', function () {
        const renderedComponent = shallow(<NowTip arrow-position="bottom-left">this is tip content</NowTip>);
        const component = renderedComponent.find('.arrow-top-centre');
        assert.ok(component);
      });

      it('should render tip with correct class for arrow position', function () {
        const renderedComponent = shallow(<NowTip arrow-position="bottom-left">this is tip content</NowTip>);
        const component = renderedComponent.find('.now-tip');
        assert.include(component.props().className, 'top-centre');
      });
    });
  });
});
