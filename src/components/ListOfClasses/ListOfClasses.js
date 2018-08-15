import React, { Component } from "react";
import Dropzone from "react-dropzone";
import request from "superagent";
import { connect } from "react-redux";
import { updatePicture } from "../../ducks/userReducer";
const CLOUDINARY_UPLOAD_URL =
  "https://api.cloudinary.com/v1_1/dhbnespv2/image/upload";
const CLOUDINARY_UPLOAD_PRESET = "abdulkanjo";

class ImageUploader extends Component {
  state = {
    image: ""
  };

  onImageDrop = files => {
    this.handleImageUpload(files[0]);
  };

  handleImageUpload = file => {
    let upload = request
      .post(CLOUDINARY_UPLOAD_URL)
      .field("upload_preset", CLOUDINARY_UPLOAD_PRESET)
      .field("file", file);

    upload.end((err, response) => {
      if (err) {
        console.log(err);
      }
      if (response.body.secure_url !== "") {
        this.props.updatePicture(response.body.secure_url);
      }
    });
  };

  render() {
    return (
      <div>
        <Dropzone
          onDrop={this.onImageDrop}
          multiple={false}
          accept="image/*"
          className="ce_image_dropzone"
        >
          <div>
            {this.state.image === "" ? (
              <div className="ce_dropzone_text" style={{ color: "#6a6a6a" }}>
                Select an image
              </div>
            ) : (
              <div className="image_uploader_container">
                <img
                  className="ep_upload_pic"
                  src={this.state.image}
                  alt="event pic"
                />
              </div>
            )}
          </div>
        </Dropzone>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    picture: state.picture
  };
}
export default connect(
  mapStateToProps,
  {
    updatePicture
  }
)(ImageUploader);
