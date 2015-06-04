import React from 'react';
import assign from 'object-assign';
import classNames from 'classnames'

class Button extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<button {...this.props} className={classNames('now-button', this.props.classes)}>{this.props.children}</button>
		)
	}
}

export default Button;
