import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">{" "}
        <a href="https://github.com/Emmre" target="_blank" rel="noreferrer noopener">
          Github
        </a>
      </footer>
    );
  }
}

export default Footer;