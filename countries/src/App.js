import logo from "./app-icon.svg";
import React from "react";
import "./App.css";
import Form from "./Form";
import companies from "./apis/companies";
import countries from "./apis/countries";
import CompanyList from "./CompanyList";

class App extends React.Component {
  state = { companies: [] };

  onSearchSubmit = async (countryName, companyName) => {
    //console.log(countryName);
    //console.log(companyName);

    const response = await countries.get(`?code=${countryName}`);
    //console.log(response.data[0].name);
    const response2 = await companies.get(
      `?country=${response.data[0].name.replace(
        / *\([^)]*\) */g,
        ""
      )}&q=${companyName}`
    );
    console.log(response2.data);
    this.setState({ companies: response2.data });
  };

  render() {
    return (
      <div>
        <div>
          <h1 class="ui header">
            <img src={logo} className="App-logo" alt="logo" />
            Tradeshift Search
          </h1>
        </div>
        <div class="ui divider"></div>
        <div>
          <Form onSubmit={this.onSearchSubmit}></Form>
          <CompanyList countries={this.state.companies}></CompanyList>
        </div>
      </div>
    );
  }
}

export default App;
