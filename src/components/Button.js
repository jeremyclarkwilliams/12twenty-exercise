import React, { Component } from 'react';
import iconPlus from '../img/icon-plus.svg';
import iconX from '../img/icon-x.svg';
import iconSearch from '../img/icon-search.svg';

function iconType(iconImage) {
  switch(iconImage) {
    case 'iconPlus':
      return iconPlus;
    case 'iconX':
      return iconX;
    case 'iconSearch':
      return iconSearch;
    default:
      return '';
  }
}

class Button extends Component {
  render() {
    const icon = iconType(this.props.iconImage);
    return (
      <button className={`btn btn-${this.props.btnType}`} type={this.props.type} onClick={this.props.handleClick}>{this.props.icon && <img src={icon} alt={this.props.iconAlt} className="icon" />}{this.props.text}</button>
    );
  }
}

export default Button;
