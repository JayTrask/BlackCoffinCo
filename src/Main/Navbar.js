import React from "react";
import "../styles.css";

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <h2 className="NavItem">Item 1</h2>
        <h2 className="NavItem">Item 2</h2>
        <h2 className="NavItem">Item 3</h2>
      </div>
    );
  }
}

export default Navbar;
