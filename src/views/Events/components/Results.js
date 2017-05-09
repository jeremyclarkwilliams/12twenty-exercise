import React, { Component } from 'react';
import ResultRow from './ResultRow.js';

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: []
    }
    this.handleSelectAll = this.handleSelectAll.bind(this);
    this.sortResults = this.sortResults.bind(this);
  }

  handleSelectAll(e) {
    // TODO: check (or uncheck) boxes for all events in results table
  }

  sortResults(e) {
    const sortMethod = e.target.title;
    console.log(sortMethod);
    // TODO: implement sorting of results by column
  }

  render() {
    const results = this.props.results;
    const resultRows = results.map(function(elem, index) {
      return <ResultRow data={elem} key={index} />
    });
    return (
      <section className="results">
        <h2 className="results-found">Results Found: <span>{results.length}</span></h2>
        <table className="results-table" cellPadding="0" cellSpacing="0">
          <thead>
            <tr>
              <th><span className="hide">Select All</span><input type="checkbox" id="select-all" onClick={this.handleSelectAll} /></th>
              <th title="name" onClick={this.sortResults}>Event Name</th>
              <th title="date" onClick={this.sortResults}>Date/Time</th>
              <th title="status" onClick={this.sortResults}>Status</th>
              <th title="registrants" onClick={this.sortResults}>Registrants</th>
            </tr>
          </thead>
          <tbody>
            {resultRows}
          </tbody>
        </table>
      </section>
    );
  }
}

export default Results;
