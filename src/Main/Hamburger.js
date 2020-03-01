import React from "react";
import "../styles.css";

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
        <button onClick={this.Toggle}>
          {this.state.Toggle && <div>open</div>}
          {!this.state.Toggle && <div>closed</div>}
        </button>
      </div>
    );
  }
}

export default Hamburger;
