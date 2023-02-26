import React, { useState } from "react";

import "../styles/pin_styles.css";

// Redundant with modal's data reading
// function uploadImage(event, setPinImage) {
//   const target = event.target.files[0];

//   if (event.target.files && target) {
//     // check that target file exists
//     if (/image\/*/.test(target.type)) {
//       // if target is an image, proceed
//       const reader = new FileReader();

//       reader.onload = function () {
//         setPinImage(reader.result); // changes state of pinImage to read URL
//       };
//       reader.readAsDataURL(target); // read imiage URL
//     }
//   }
// }

function check_size(event) {
  // makes uploaded image fill the box
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

function Pin(props) {
  // const [pinImage, setPinImage] = useState();

  return (
    // props already reads the uploaded image now
    // <div>
    //   { <input
    //     onChange={(event) => uploadImage(event, setPinImage)}
    //     type="file"
    //     name="picture"
    //     id="picture"
    //     value=""
    //   /> }

    // need subclass that takes into account card size
    //   <div className="card">

    <div className={`card card_${props.pinDetails.pin_size}`}>
      <div className="pin_title">{props.pinDetails.title}</div>
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
            <span>{props.pinDetails.destination}</span>
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
        <img
          onLoad={check_size} // sets the displayed image to proper one, or else would be blank
          src={props.pinDetails.img_blob}
          alt="pin_image"
        />
      </div>
    </div>
  );
}

export default Pin;
