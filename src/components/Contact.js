import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  handleShowClick = e => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  };

  handleDeleteClick = id => {
    this.props.deleteClickHandler();
  };

  render() {
    const { name, email, phone, id } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <div className="card card-body mb-3">
        <h4>
          <span onClick={this.handleShowClick} style={{ cursor: "pointer" }}>
            {name}{" "}
            <i
              className={
                showContactInfo ? "fa fa-angle-down" : "fa fa-angle-right"
              }
              style={{ fontSize: "18px" }}
            />
          </span>
          <i
            className="fas fa-times"
            style={{
              cursor: "pointer",
              float: "right",
              color: "red",
              fontSize: "18px"
            }}
            onClick={this.handleDeleteClick.bind(this, id)}
          />
        </h4>
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Phone: {phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteClickHandler: PropTypes.func.isRequired
};

export default Contact;
