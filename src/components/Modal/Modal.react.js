import React from 'react';
import assign from 'object-assign';
import classNames from 'classnames';
import keymaster from 'keymaster';

class Modals extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.hide = this.hide.bind(this);
    this.show = this.show.bind(this);

    this.state = {
      visible: false
    }
  }

  componentDidMount() {
    keymaster('esc', () => this.state.visible ? this.toggle() : null);
  }

  componentWillUnmount() {
    this._giveBodyFocusBack();
    keymaster.unbind('esc');
  }

  render() {
    const classes = classNames('now-modal', [this.props.classes], { 'visible': this.state.visible });

    return (
      <div className={classes}>

        <div className="modal__content">
          <div className="close-container">
            <div onClick={ this.hide } className='close-icon'></div>
          </div>

          { this.props.title ?
            <div className="title">
              <h2>{ this.props.title }</h2>
            </div>
            : null
          }
          <p>{this.props.children}</p>
        </div>
      </div>
    )
  }

  componentDidUpdate() {
    if (this.state.visible) {
      this._giveModalFocus()
    } else {
      this._giveBodyFocusBack();
    }
  }

  toggle(e) {
    if (this.state.visible) {
      this.hide();
    } else {
      this.show();
    }
  }

  hide(event) {
    if (event !== undefined && event.currentTarget.className && event.currentTarget.className.indexOf("close-icon") > -1) {
      if (this.props.closeHandler) {
        this.props.closeHandler();
      }
    }

    this.setState({
      visible: false
    });
  }

  show() {
    this.setState({visible: true});
  }

  _giveModalFocus() {
    if (document.body.classList) {
      document.body.classList.add('modal-open');
    }
  }

  _giveBodyFocusBack() {
    if (document.body.classList) {
      document.body.classList.remove('modal-open');
    }
  }
}

export default Modals;
