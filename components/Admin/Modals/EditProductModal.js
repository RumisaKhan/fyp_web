import React, { Component } from "react";
import { firebase } from "../../../firebase";
import axios from "axios";
import { toast } from "react-toastify";
class EditProductModal extends Component {
  state = {
    modal: false,
    previewImage: "",
    imageUrl: "",
    imageHoverUrl: "",
    previewImageHover: "",
    title: "",
    description: "",
    oldPrice: 0,
    newPrice: 0,
    discountOff: 0,
    quantity: 0,
    type: "",
  };

  closeModal = () => {
    this.props.onClick(this.state.modal);
    this.setState({
      previewImage: "",
      imageUrl: "",
      imageHoverUrl: "",
      previewImageHover: "",
      title: "",
      description: "",
      oldPrice: 0,
      newPrice: 0,
      discountOff: 0,
      quantity: 0,
      type: "",
    });
  };
  handleChange = (e) => {
    if (e.target.files[0]) {
      let image = e.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = () => {
        // console.log(reader.result);
        this.setState({ previewImage: reader.result });
      };
      this.handleUpload(image);
    }
  };
  handleUpload = (image) => {
    const data = new FormData();
    if (image) {
      data.append("file", image);
      data.append("upload_preset", "lastcode");
      data.append("cloud_name", "lastshop802");
      axios
        .post("https://api.cloudinary.com/v1_1/lastshop802/image/upload", data)
        .then((response) => {
          if (200 === response.status) {
            // If file size is larger than expected.
            if (response.data.error) {
              if ("LIMIT_FILE_SIZE" === response.data.error.code) {
                alert("Max size: 2MB");
              } else {
                console.log(response.data);
                // If not the given file type
                alert(response.data.error);
              }
            } else {
              // Success
              let fileName = response.data;
              this.setState({
                imageUrl: fileName.url,
              });
              console.log("fileName", fileName.url);
              // alert( 'File Uploaded', '#3089cf' );
            }
          }
        })
        .catch((error) => {
          // If another error
          alert(error, "red");
        });
    } else {
      // if file not selected throw error
      alert("Please upload file");
    }
  };
  handleChangeHover = (e) => {
    if (e.target.files[0]) {
      let imageHover = e.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(imageHover);
      reader.onload = () => {
        // console.log(reader.result);
        this.setState({ previewImageHover: reader.result });
      };
      this.handleUploadHover(imageHover);
    }
  };
  handleUploadHover = (imageHover) => {
    const data = new FormData();
    if (imageHover) {
      data.append("file", imageHover);
      data.append("upload_preset", "lastcode");
      data.append("cloud_name", "lastshop802");
      axios
        .post("https://api.cloudinary.com/v1_1/lastshop802/image/upload", data)
        .then((response) => {
          if (200 === response.status) {
            // If file size is larger than expected.
            if (response.data.error) {
              if ("LIMIT_FILE_SIZE" === response.data.error.code) {
                alert("Max size: 2MB");
              } else {
                console.log(response.data);
                // If not the given file type
                // alert( response.data.error, 'red' );
              }
            } else {
              // Success
              let fileName = response.data;
              this.setState({
                imageHoverUrl: fileName.url,
              });
              // console.log( 'fileName', fileName.location );
              // alert( 'File Uploaded', '#3089cf' );
            }
          }
        })
        .catch((error) => {
          // If another error
          alert(error);
        });
    } else {
      // if file not selected throw error
      alert("Please upload file");
    }
  };
  updateProduct = (e) => {
    e.preventDefault();
    let { product } = this.props;
    let { id } = product;

    let {
      imageUrl,
      title,
      description,
      oldPrice,
      newPrice,
      discountOff,
      quantity,
      type,
      imageHoverUrl,
    } = this.state;

    firebase.firestore().collection("products").doc(id).update({
      title,
      description,
      oldPrice,
      newPrice,
      discountOff,
      quantity,
      type,
      imageUrl,
      imageHoverUrl,
    });
    setTimeout(() => {
      this.closeModal();
    }, 1000);

    toast.success("Your Product Update Succeefully!", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    setTimeout(() => {
      window.location.reload(false);
    }, 8000);
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps) {
    console.log("🚀 ~ file: EditProductModal.js ~ line 130 ~ EditProductModal ~ componentWillReceiveProps ~ nextProps", nextProps.product.imageHoverUrl)
      
      this.setState({
        title: nextProps.product.title,
        description: nextProps.product.description,
        oldPrice: nextProps.product.oldPrice,
        newPrice: nextProps.product.newPrice,
        discountOff: nextProps.product.discountOff,
        quantity: nextProps.product.quantity,
        type: nextProps.product.type,
        imageUrl: nextProps.product.imageUrl,
        imageHoverUrl: nextProps.product.imageHoverUrl,
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className={`admin-product-modal ${this.props.active}`}>
          <div className="modal-innter-content">
            <button type="button" className="close" onClick={this.closeModal}>
              <span aria-hidden="true">
                <i className="bx bx-x"></i>
              </span>
            </button>

            <div className="modal-body">
              <h3>Edit Product</h3>

              <form onSubmit={this.updateProduct}>
                <div className="form-group">
                  <label>Upload your Product image here</label>

                  <div className="upload-img">
                    <span>
                      <i className="bx bxs-image-add"></i>
                      Click here or drop files to upload
                    </span>

                    <input
                      type="file"
                      className="form-control-file"
                      id="exampleFormControlFile1"
                      name="productImage"
                      accept="image/*"
                      onChange={this.handleChange}
                    />
                  </div>
                  {this.state.previewImage ? (
                    <div className="uploaded-img">
                      <img
                        src={this.state.previewImage}
                        alt="Image"
                        className="img-thumbnail"
                      />
                    </div>
                  ) : (
                    <div className="uploaded-img">
                      <img
                        src={this.state.imageUrl}
                        alt="Image"
                        className="img-thumbnail"
                      />
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <label>Upload your Product hover image here</label>
                  <div className="upload-img">
                    <span>
                      <i className="bx bxs-image-add"></i>
                      Click here or drop files to upload
                    </span>

                    <input
                      type="file"
                      className="form-control-file"
                      name="productImageHover"
                      onChange={this.handleChangeHover}
                    />
                  </div>

                  {this.state.previewImageHover ? (
                    <div className="uploaded-img">
                      <img
                        src={this.state.previewImageHover}
                        alt="Image"
                        className="img-thumbnail"
                      />
                    </div>
                  ) : (
                    <div className="uploaded-img">
                      <img
                        src={this.state.imageHoverUrl}
                        alt="Image"
                        className="img-thumbnail"
                      />
                    </div>
                  )}
                </div>

                <h4 className="title">
                  Add your Product description and necessary information from
                  here
                </h4>

                <div className="form-group">
                  <label>Name</label>
                  <input
                    placeholder="Enter Product Name"
                    value={this.state.title || ""}
                    type="text"
                    className="form-control"
                    id="product-name"
                    onChange={(e) => this.setState({ title: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label>Description</label>
                  <textarea
                    value={this.state.description || ""}
                    placeholder="Enter Product Description"
                    className="form-control"
                    id="description"
                    rows="3"
                    onChange={(e) =>
                      this.setState({ description: e.target.value })
                    }
                  ></textarea>
                </div>
                <div className="form-group">
                  <label>Price</label>
                  <input
                    value={this.state.oldPrice || ""}
                    type="number"
                    className="form-control"
                    id="product-price"
                    onChange={(e) =>
                      this.setState({ oldPrice: e.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <label>Sale Price</label>
                  <input
                    value={this.state.newPrice || ""}
                    type="number"
                    className="form-control"
                    id="product-sale-price"
                    onChange={(e) =>
                      this.setState({ newPrice: e.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <label>Discount In Percent</label>
                  <input
                    value={this.state.discountOff || ""}
                    type="number"
                    className="form-control"
                    id="product-discount-price"
                    onChange={(e) =>
                      this.setState({ discountOff: e.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <label>Product Quantity</label>
                  <input
                    value={this.state.quantity || ""}
                    type="number"
                    className="form-control"
                    id="product-quantity"
                    onChange={(e) =>
                      this.setState({ quantity: e.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <label>Product</label>
                  <select
                    className="form-control"
                    value={this.state.type || ""}
                    id="product-type"
                    onChange={(e) => this.setState({ type: e.target.value })}
                  >
                    <option value="Default" disabled>
                      Choose a Product Type ...
                    </option>
                    <option value="Necklace">Necklace</option>
                    <option value="Earning">Earning</option>
                    <option value="Tiaracrown">TiaraCrown</option>
                    <option value="Glasses">Glasses</option>
                  </select>
                </div>
                <div className="modal-btn">
                  <div
                    className="btn optional-btn float-left"
                    onClick={this.closeModal}
                  >
                    Cancel
                  </div>
                  <button className="btn default-btn float-right">
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default EditProductModal;
