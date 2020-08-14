import React from "react";
import "./App.css";
import SearchBar from "./SeachBar";
import Dropdown from "./Dropdown";
import countries from "./apis/countries";

class Form extends React.Component {
  state = { countryList: [], countryName: "", companyName: "" };

  onFormSubmit = (event) => {
    event.preventDefault();
    if (
      this.state.countryName !== undefined &&
      this.state.companyName !== undefined &&
      this.state.countryName !== "" &&
      this.state.companyName !== ""
    ) {
      this.props.onSubmit(this.state.countryName, this.state.companyName);
    } else {
      alert("Pleas Complete the Form");
    }
  };

  getCountries = async () => {
    const response = await countries.get();
    //console.log(response.data[0]);
    this.setState({ countryList: response.data });
  };

  componentDidMount() {
    this.getCountries();
  }

  onChangeEventText = (event) => {
    this.setState({ companyName: event.target.value });
  };
  onChangeEventDropdown = (event) => {
    this.setState({ countryName: event.target.value });
  };

  render() {
    return (
      <form data-ts="Form" onSubmit={this.onFormSubmit}>
        <h4 class="ui dividing header">Tradesihift Global Search</h4>
        <div className="ui segment">
          <fieldset>
            <Dropdown
              countryList={this.state.countryList}
              countryName={this.state.countryName}
              onChange={this.onChangeEventDropdown}
            ></Dropdown>
          </fieldset>
          <fieldset>
            <SearchBar
              companyName={this.state.companyName}
              onChange={this.onChangeEventText}
            ></SearchBar>
          </fieldset>
          <button type="submit"></button>
        </div>
      </form>
    );
  }
}

export default Form;
