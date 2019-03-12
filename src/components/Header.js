import React, { Component } from "react";
import PropTypes from "prop-types";

class Header extends Component {
  render() {
    return (
      <div>
        <header className="top">
          <h1>
            Eat
            <span className="ofThe">
              <span className="of">Now</span>
              <span className="the">now</span>
            </span>
            me
          </h1>
          <h3 className="tagline">
            <span>{this.props.tagline}</span>
          </h3>
        </header>
      </div>
    );
  }
}

Header.propTypes = {
  tagline: PropTypes.string.isRequired
};

export default Header;
