import React from "react";
import Modal from "./Modal";

class CompanyInfo extends React.Component {
  state = { show: false };
  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        <div onClick={this.showModal}>Name: {this.props.company.name}</div>
        <Modal
          show={this.state.show}
          handleClose={this.hideModal}
          company={this.props.company}
        >
          <p>{this.props.company.name}</p>
        </Modal>
      </div>
    );
  }
}

export default CompanyInfo;
