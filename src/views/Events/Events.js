import React, { Component } from 'react';
import ContentHeader from '../../components/ContentHeader.js';
import Filters from './components/Filters.js';
import Results from './components/Results.js';
import { EVENTS_DATA } from '../../data/events.js';

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: EVENTS_DATA
    }
    this.updateResults = this.updateResults.bind(this);
  }

  updateResults(results) {
    this.setState({
      results: results
    });
  }

  render() {
    return (
      <main className="content events">
        <ContentHeader page="events" />
        <Filters updateResults={this.updateResults} />
        <Results results={this.state.results} />
      </main>
    );
  }
}

export default Events;
