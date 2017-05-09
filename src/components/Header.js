import React, { Component } from 'react';
import logo from '../img/logo-ucla.png';

// TODO: Allow client logo to be dynamic

class Header extends Component {
  render() {
    return (
      <header className="app-header">
        <img src={logo} alt="UCLA Anderson School of Management" className="logo" />
        <div className="headers">
          <h1 className="hdr-1">myCareer</h1>
          <h2 className="hdr-2">Recruiting &amp; Career Management System (CMS)</h2>
        </div>
      </header>
    );
  }
}

export default Header;
