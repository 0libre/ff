import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class Button extends PureComponent { 

    static propTypes = {
        onClick: PropTypes.func.isRequired,
        className: PropTypes.string,
        buttonText: PropTypes.string
    }
    static defaultProps = {
        className: '',
        buttonText: 'Submit'
    }

    render = () => (<button 
        onClick={this.props.onClick}
        className={this.props.className}
        >
        {this.props.buttonText}
    </button>)
}
