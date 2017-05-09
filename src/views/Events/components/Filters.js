import React, { Component } from 'react';
import { EVENTS_DATA, EVENTS_FILTERS } from '../../../data/events.js';
import Filter from './Filter.js';
import Button from '../../../components/Button.js';

function filterEvents(filters) {
  return EVENTS_DATA.filter(function(event, index, array) {
    for (let key in filters) {
      const filterData = filters[key];
      const eventData = key.split('.').reduce(function(lastValue, elem) {
        return lastValue[elem];
      }, event);
      const pattern = new RegExp(filterData, 'i');
      if (filterData !== '' && !pattern.test(eventData)) {
        return false;
      }
      // TODO: Add filter for ranges such as start/end times
    }
    return true;
  });
}

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClearClick = this.handleClearClick.bind(this);
  }

  componentWillMount() {
    EVENTS_FILTERS.forEach(function(filter) {
      this.setState({
        [filter.path]: ''
      });
    }.bind(this));
  }

  componentDidMount() {
    this.baseState = this.state;
  }

  handleChange(e) {
    const target = e.target;
    this.setState({
      [target.name]: target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateResults( filterEvents(this.state) );
  }

  handleClearClick(e) {
    this.setState(this.baseState, function() {
      this.props.updateResults( filterEvents(this.state) );
    });
  }

  render() {
    const filterList = EVENTS_FILTERS;
    const filters = filterList.map(function(filter) {
      return <Filter key={filter.path}
        path={filter.path}
        label={filter.label}
        options={filter.options}
        handleChange={this.handleChange}
        value={this.state[filter.path]} />;
    }.bind(this));
    return (
      <form className="filters" onSubmit={this.handleSubmit}>
        {filters}
        <div className="actions">
          <Button btnType="secondary"
            icon="true"
            iconImage="iconX"
            iconAlt="x"
            text="Clear Filters"
            handleClick={this.handleClearClick}
            type="button" />
          <Button btnType="primary"
            icon="true"
            iconImage="iconSearch"
            iconAlt="search"
            text="Get Results"
            type="submit" />
        </div>
      </form>
    );
  }
}

export default Filters;
