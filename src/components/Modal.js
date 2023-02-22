import React from "react";
import "../styles/modal_styles.css";

function upload_img() {}

function Modal() {
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
            <label htmlFor="upload_img" id="upload_img_label">
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
                onChange={upload_img} // must have this if value field is present, can use a dummy function for now
                type="file"
                name="upload_img"
                id="upload_img"
                value=""
              />
            </label>
            <div className="modals_pin">
              <div className="pin_image">
                <img src="" alt="pin_image" />
              </div>
            </div>
          </div>

          <div className="foot">
            <div className="save_from_site">Save from site</div>
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
