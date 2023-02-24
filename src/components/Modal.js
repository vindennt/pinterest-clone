import React, { useState } from "react";
import "../styles/modal_styles.css";

function upload_img(
  event,
  pinDetails,
  setPinDetails,
  setShowLabel,
  setShowModalPin
) {
  const target = event.target.files[0];

  if (event.target.files && target) {
    // check that target file exists
    if (/image\/*/.test(target.type)) {
      // if target is an image, proceed
      const reader = new FileReader();

      reader.onload = function () {
        setPinDetails({
          ...pinDetails, // destructor
          img_blob: reader.result,
        }); // changes state of pinImage to read URL
        setShowLabel(false); // turn off
        setShowModalPin(true); // enable the modal pin
      };

      reader.readAsDataURL(target); // read imiage URL
    }
  }
}

function check_size(event) {
  // make sure that img fills full of the pin box (parent element)
  const image = event.target;

  image.classList.add("pin_max_width");

  if (
    // if too thin or too short, change classList to max height
    image.getBoundingClientRect().width <
      image.parentElement.getBoundingClientRect().width ||
    image.getBoundingClientRect().height <
      image.parentElement.getBoundingClientRect().height
  ) {
    image.classList.remove("pin_max_width");
    image.classList.add("pin_max_height");
  }
  image.style.opacity = 1; // since the iamge is hidden at first glace, make it visible again
  // this is because right as an image uploads, it uses normal scaling that disregards filling the pin.
  // we wanted to hide that by using opacity
}

function Modal() {
  const [pinDetails, setPinDetails] = useState({
    author: "",
    board: "",
    title: "",
    description: "",
    destination: "",
    img_blob: "",
    pin_size: "",
  });

  const [showLabel, setShowLabel] = useState(true); // by defualt, show the label
  const [showModalPin, setShowModalPin] = useState(false); // by default, dont show the img

  return (
    <div className="add_pin_modal">
      <div className="add_pin_container">
        <div className="side" id="left_side">
          <div className="head">
            <div className="pint_mock_icon_container">
              <img
                src="./images/ellipse.png"
                alt="edit"
                className="pint_mock_icon"
              />
            </div>
          </div>

          <div className="mid">
            <label
              htmlFor="upload_img"
              id="upload_img_label"
              style={{ display: showLabel ? "block" : "none" }} // shows or not, depending on if an image is uplaoded
            >
              <div className="upload_img_container">
                <div id="dotted_border">
                  <div className="pint_mock_icon_container">
                    <img
                      src="./images/up-arrow.png"
                      alt="upload"
                      className="pint_mock_icon"
                    />
                  </div>
                  <div>Click to upload</div>
                  <div>
                    Recommendation: Use high-quality .jpg less than 20MB
                  </div>
                </div>
              </div>

              <input
                onChange={(event) =>
                  upload_img(
                    event,
                    pinDetails,
                    setPinDetails,
                    setShowLabel,
                    setShowModalPin
                  )
                } // must have this if value field is present, can use a dummy function for now
                type="file"
                name="upload_img"
                id="upload_img"
                value=""
              />
            </label>
            <div
              className="modals_pin"
              style={{ display: showModalPin ? "block" : "none" }} // shows or not, depending on if an image is uplaoded
            >
              <div className="pin_image">
                <img
                  onLoad={check_size}
                  src={pinDetails.img_blob}
                  alt="pin_image"
                />
              </div>
            </div>
          </div>

          <div className="foot">
            <div className="save_from_site">Save from site </div>
          </div>
        </div>

        <div className="side" id="right_side">
          <div className="head">
            <div className="select_size">
              <select defaultValue="Select" name="pin_size" id="">
                <option value="">Select</option>
                <option value="small">small</option>
                <option value="medium">medium</option>
                <option value="large">large</option>
              </select>
              <div className="save_pin">Save</div>
            </div>
          </div>

          <div className="mid">
            <input
              placeholder="Add your title"
              type="text"
              className="new_pin_input"
              id="pin_title"
            />
            <input
              placeholder="What is this pin about"
              type="text"
              className="new_pin_input"
              id="pin_desc"
            />
            <input
              placeholder="Add destination link"
              type="text"
              className="new_pin_input"
              id="pin_dest"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
