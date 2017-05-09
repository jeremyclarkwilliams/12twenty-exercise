import React, { Component } from 'react';
import { PAGES } from '../data/pages.js';

function NavLists(props) {
  const lists = PAGES.map(function(list, index) {
    let listItems = [];
    for (let key in list) {
      listItems.push( <li className="link-item" key={key}><a href="#" className={`link ${((props.page === key) ? 'active' : '')}`}>{list[key]}</a></li> );
    }
    return (
      <ul className="link-list" key={index}>
        {listItems}
      </ul>
    );
  });
  return (
    <div>{lists}</div>
  );
}

class SideNav extends Component {
  render() {
    return (
      <nav className="side-nav">
        <NavLists page={this.props.page} />
      </nav>
    );
  }
}

export default SideNav;
