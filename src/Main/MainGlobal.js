import React from "react";
import "../styles.css";
import Hamburger from "./Hamburger.js";
import Navbar from "./Navbar";

class MainGlobal extends React.Component {
  constructor(props) {
    super(props);
    this.updateToggle = this.updateToggle.bind(this);
    this.state = { Toggle: false };
  }

  updateToggle(_State) {
    this.setState(state => ({
      Toggle: !state.Toggle
    }));
  }
  render() {
    return (
      <div className="MainGlobal">
        <div className="Header">
          <div className="HeaderTop">
            <div className="HeaderLeft">
              <h3 className="HeaderTitle">Black Coffin Co</h3>
            </div>
            <div className="HeaderRight">
              <h4 className="HeaderButtons">
                <Hamburger
                  Toggle={this.state.Toggle}
                  updateToggle={this.updateToggle}
                />
              </h4>
            </div>
          </div>
          {this.state.Toggle && (
            <div className="HeaderBottom">
              <Navbar />
            </div>
          )}
        </div>
        {this.state.Toggle && <div className="Spacer" />}
      </div>
    );
  }
}

export default MainGlobal;
