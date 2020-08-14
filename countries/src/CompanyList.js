import React from "react";
import CompanyInfo from "./CompanyInfo";

const CompanyList = (props) => {
  console.log(props.countries);

  const countries = props.countries.map((company) => {
    return (
      <li>
        <button>
          <CompanyInfo key={company.id} company={company}></CompanyInfo>
        </button>
      </li>
    );
  });

  return (
    <div>
      <menu data-ts="Menu">{countries}</menu>
    </div>
  );
};

export default CompanyList;
