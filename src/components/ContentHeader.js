import React, { Component } from 'react';
import Button from './Button.js';
import { PAGES } from '../data/pages.js';

function getPageName(page) {  
  const pagesLength = PAGES.length
  for (let i = 0; i < pagesLength; i++) {
    let pages = PAGES[i];
    for (let key in pages) {
      if (key === page) {
        return pages[key];
      }
    }
  }
}

class ContentHeader extends Component {
  render() {
    const pageName = getPageName(this.props.page);
    return (
      <header className="content-header">
        <h1 className="hdr">{pageName}</h1>
        <div className="actions">
          <Button btnType="primary"
            icon="true"
            iconImage="iconPlus"
            iconAlt="plus"
            text="Host a Job Fair" />
          <Button btnType="primary"
            icon="true"
            iconImage="iconPlus"
            iconAlt="plus"
            text="Host an Event" />
        </div>
      </header>
    );
  }
}

export default ContentHeader;
