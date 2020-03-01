import React from "react";
import "../styles.css";
import icon from "../Assets/Hamburger_icon.png";

class Hamburger extends React.Component {
  constructor(props) {
    super(props);
    this.Toggle = this.Toggle.bind(this);
    this.state = {
      Toggle: this.props.Toggle,
      updateToggle: this.props.updateToggle()
    };
  }

  Toggle() {
    this.setState(state => ({
      Toggle: !state.Toggle
    }));

    this.props.updateToggle(this.state);
  }

  render() {
    return (
      <div className="HamburgerOpen">
        <a href="#" onClick={this.Toggle}>
          {this.state.Toggle && (
            <div>
              <img src={icon} alt="Logo" width="30px" height="30px" />
            </div>
          )}
          {!this.state.Toggle && (
            <div>
              <img src={icon} alt="Logo" width="30px" height="30px" />
            </div>
          )}
        </a>
      </div>
    );
  }
}

export default Hamburger;
