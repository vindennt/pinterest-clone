import React, { useState } from "react";

import "../styles/pin_styles.css";

function uploadImage(event, setPinImage) {
  const target = event.target.files[0];

  if (event.target.files && target) {
    // check that target file exists
    if (/image\/*/.test(target.type)) {
      // if target is an image, proceed
      const reader = new FileReader();

      reader.onload = function () {
        setPinImage(reader.result); // changes state of pinImage to read URL
      };
      reader.readAsDataURL(target); // read imiage URL
    }
  }
}

function Pin() {
  const [pinImage, setPinImage] = useState();

  return (
    <div>
      <input
        onChange={(event) => uploadImage(event, setPinImage)}
        type="file"
        name="picture"
        id="picture"
        value=""
      />

      <div className="card">
        <div className="pin_title"></div>

        <div className="pin_modal">
          <div className="modal_head">
            <div className="save_card">Save</div>
          </div>

          <div className="modal_foot">
            <div className="destination">
              <div className="pint_mock_icon_container">
                <img
                  src="./images/upper-right-arrow.png"
                  alt="destination"
                  className="pint_mock_icon"
                />
              </div>
              <span>Eatery</span>
            </div>

            <div className="pint_mock_icon_container">
              <img
                src="./images/send.png"
                alt="send"
                className="pint_mock_icon"
              />
            </div>

            <div className="pint_mock_icon_container">
              <img
                src="./images/ellipse.png"
                alt="edit"
                className="pint_mock_icon"
              />
            </div>
          </div>
        </div>

        <div className="pin_image">
          <img src={pinImage} alt="pin_image" />
        </div>
      </div>
    </div>
  );
}

export default Pin;
