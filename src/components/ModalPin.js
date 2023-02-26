import React from "react";
import "../styles/modal_pin_styles.css";
import Pin from "./Pin.js";
import Modal from "./Modal.js";

class ModalPin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pins: [],
      show_modal: false, // whether modal is showing
    };
  }

  add_pin = (pinDetails) => {
    this.setState((_state) => {
      const new_pins = [
        ..._state.pins, // start with old pins
      ];

      new_pins.push(<Pin pinDetails={pinDetails} key={_state.pins.length} />); // set newpin's details to parameter, give unique key

      console.log(new_pins);
      return {
        pins: new_pins,
        show_modal: false, // hide modal, replace pins with new data
      };
    });
  };

  render() {
    return (
      <div>
        <div className="navigation_bar">
          <div
            onClick={() => this.setState({ show_modal: true })} // reveal modal if clikced
            className="pint_mock_icon_container add_pin"
          >
            <img
              src="./images/add.png"
              alt="add_pin"
              className="pint_mock_icon"
            />
          </div>
        </div>

        <div className="pin_container">{this.state.pins}</div>

        <div
          onClick={(event) =>
            event.target.className === "add_pin_modal"
              ? this.setState({ show_modal: false }) // add_pin_modal is class name of the outer area of the modal container, so if clicked outside of modal, unmount
              : null
          }
          className="add_pin_modal_container"
        >
          {this.state.show_modal ? <Modal add_pin={this.add_pin} /> : null}
        </div>
      </div>
    );
  }
}

export default ModalPin;
