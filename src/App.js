import React, { Component } from 'react';
import Header from './components/Header.js';
import SideNav from './components/SideNav.js';
import Events from './views/Events/Events.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'events'
    };
  }

  render() {
    return (
      <div className="app">
        <Header />
        <div className="wrapper">
          <SideNav page={this.state.page} />
          {this.state.page === 'events' && <Events page={this.state.page} />}
        </div>
      </div>
    );
  }
}

export default App;
