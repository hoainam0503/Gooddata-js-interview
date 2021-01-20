// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.

import React, { useState } from "react";
import "@gooddata/react-components/styles/css/main.css";

import { ColumnChart, Model } from "@gooddata/react-components";
import { Dashboard } from "./containers";

const grossProfitMeasure = "/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/6877";
const dateAttributeInMonths =
  "/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/2142";
const dateAttribute = "/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/2180";

const App = () => {
  const [month, setMonth] = useState(1);
  const [year, setYear] = useState(2015);
  // const [dayStart, setDayStart] = useState('')
  const getMonthFilter = () => {
    return Model.absoluteDateFilter(dateAttribute, `${year}-${month}-01`, `${year}-${month}-31`);
  }
  const changeMonth = (val) => {
    setMonth(val.target.value)
  }

  const changeYear = (val) => {
    setYear(val.target.value)
  }
  const getMeasures = () => {
    return [
      Model.measure(grossProfitMeasure)
        .localIdentifier("m1")
        .alias("$ Gross Profit"),
    ];
  }

  const getViewBy = () => {
    return Model.attribute(dateAttributeInMonths).localIdentifier("a1");
  }

  const renderDropdown = () => {
    return (
      <select defaultValue="1" onChange={val => changeMonth(val)}>
        <option value="1" >January</option>
        <option value="2" >February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    );
  }

  const renderDropdownYear = () => {
    return (
      <select defaultValue="2015" onChange={val => changeYear(val)}>
        <option value="2010" >2010</option>
        <option value="2011" >2011</option>
        <option value="2012">2012</option>
        <option value="2013">2013</option>
        <option value="2014">2014</option>
        <option value="2015">2015</option>
        <option value="2016">2016</option>
        <option value="2017">2017</option>
        <option value="2018">2018</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
      </select>
    );
  }

 
    const projectId = "xms7ga4tf3g3nzucd8380o2bev8oeknp";
    const filters = [getMonthFilter()];
    const measures = getMeasures();
    const viewBy = getViewBy();

    return (
      <div className="App">
        <Dashboard />
      </div>
    );
  
}

export default App;
