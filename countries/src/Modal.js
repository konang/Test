import React from "react";

const Modal = (props) => {
  const showHideClassName = props.show
    ? "modal display-block"
    : "modal display-none";
  var additional = "";
  if (props.company.additionalStatusDetails !== undefined) {
    console.log(props.company.additionalStatusDetails);
    additional = props.company.additionalStatusDetails.map((detail) => {
      return <li key={detail}>{detail}</li>;
    });
  }

  return (
    <div className={showHideClassName} onFocus={props.handleClose}>
      <div className="modal-parent">
        <div className="ui header">{props.company.name}</div>
        <div className="content">
          <ul>Additional Status Details: {additional}</ul>
          <p>Address: {props.company.address}</p>
          <p>Country: {props.company.country}</p>
          <p>Description: {props.company.description}</p>
          <p>ID: {props.company.id}</p>
          <p>Name: {props.company.name}</p>
          <p>Registration Number: {props.company.registrationNumber}</p>
          <p>Status: {props.company.status}</p>
          <p>Vat Number: {props.company.vatNumber}</p>
        </div>
        <div className="actions">
          <button class="ui secondary button" onClick={props.handleClose}>
            Okay
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
