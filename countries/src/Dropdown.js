import React from "react";

const Dropdown = (props) => {
  //console.log(props.countryList);

  const countries = props.countryList.map((country) => {
    return (
      <option key={country.code} value={country.code}>
        {country.name}
      </option>
    );
    //return <div>{contry.name}</div>;
  });

  return (
    <label>
      <span>Select Country:</span>
      <select value={props.countryName} onChange={(e) => props.onChange(e)}>
        <option value="" selected>
          Please Select a Country
        </option>
        {countries}
      </select>
    </label>
  );
};

export default Dropdown;
