import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Button.css';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active:false,
      css:this.props.css
    };
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.css !== nextProps.css) {
      this.setState({css:nextProps.css});
    }
  }
  handleClick() {
    const {toggle,clickHandler,value,css}=this.props;
    if (toggle) {
      toggle();
    } else {
      clickHandler(value);
      if (this.state.active) {
        this.setState({active:false,css});
      } else {
        this.setState({active:true, css:`${css} active`});
      }
    }
  }
  render() {
    return (
      <button type="button" className={this.state.css} onClick={this.handleClick.bind(this)} disabled={this.props.disable}>
          {this.props.value}
      </button>
    );
  }
}

Button.propTypes = {
  css:PropTypes.string.isRequired,
  value:PropTypes.string.isRequired,
  toggle:PropTypes.func
}
  
export default Button;
