import React, { Component } from 'react';
import { toKebabCase } from '../../../services/helpers.js';

// TODO: account for other types of input fields (eg. text)

function Option(prop) {
  return <option value={prop.value}>{prop.text}</option>;
}

class Filter extends Component {
  render() {
    const options = this.props.options.map(function(option, index) {
      return <Option value={(index === 0) ? '' : option} text={option} key={option} />;
    });
    const label = this.props.label;
    return (
      <label htmlFor={`filter-${toKebabCase(label)}`} className="label label-select">
        <span>{this.props.label}</span>
        <select className="input" id={`filter-${toKebabCase(label)}`} name={this.props.path} onChange={this.props.handleChange} value={this.props.value}>
          {options}
        </select>
      </label>
    );
  }
}

export default Filter;
