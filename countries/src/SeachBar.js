import React from "react";
import "./App.css";

class SearchBar extends React.Component {
  onChangeEvent = (event) => {
    this.setState({ companyName: event.target.value });
  };

  render() {
    return (
      <label>
        <span>Company Name:</span>
        <input
          placeholder="Press Enter here when finish"
          type="text"
          value={this.props.companyName}
          onChange={(e) => this.props.onChange(e)}
          required
        ></input>
      </label>
    );
  }
}

export default SearchBar;
