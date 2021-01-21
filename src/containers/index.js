import React, { useState } from "react";
import "@gooddata/react-components/styles/css/main.css";
import "../containers/style.css";
import { ColumnChart, Model } from "@gooddata/react-components";
import { DropDownDayMonthYear } from "../components/Month";
import { DropDownYear } from "../components/Year";
import { useSelector, useDispatch } from "react-redux";
import { yearData, monthNumber, dayData } from "../util/common";
import {
  setMonth,
  setMonthEnd,
  setYear,
  setYearEnd,
  setDay,
  setDayEnd,
} from "../data/action";
import { DropDownDay } from "../components/Day";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const grossProfitMeasure =
    "/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/6877";
  const dateAttributeInMonths =
    "/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/2142";
  const dateAttribute = "/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/2180";
  const { month, year, monthEnd, yearEnd, dayEnd, day } = useSelector(
    (state) => ({
      month: state.reducerDateTime.month,
      year: state.reducerDateTime.year,
      monthEnd: state.reducerDateTime.monthEnd,
      yearEnd: state.reducerDateTime.yearEnd,
      day: state.reducerDateTime.day,
      dayEnd: state.reducerDateTime.dayEnd,
    })
  );
  const getMonthFilter = () => {
    return Model.absoluteDateFilter(
      dateAttribute,
      `${year}-${month}-${day}`,
      `${yearEnd}-${monthEnd}-${dayEnd}`
    );
  };
  console.log(day);
  console.log(dayEnd);
  const getMeasures = () => {
    return [
      Model.measure(grossProfitMeasure)
        .localIdentifier("m1")
        .alias("$ Gross Profit"),
    ];
  };

  const getViewBy = () => {
    return Model.attribute(dateAttributeInMonths).localIdentifier("a1");
  };
  const onChangeMonth = (val) => {
    dispatch(setMonth(val.target.value));
  };

  const onChangeMonthEnd = (val) => {
    dispatch(setMonthEnd(val.target.value));
  };

  const onChangeYear = (val) => {
    dispatch(setYear(val.target.value));
  };

  const onChangeYearEnd = (val) => {
    dispatch(setYearEnd(val.target.value));
  };

  const onChangeDay = (val) => {
    dispatch(setDay(val.target.value));
  };

  const onChangeDayEnd = (val) => {
    dispatch(setDayEnd(val.target.value));
  };
  const projectId = "xms7ga4tf3g3nzucd8380o2bev8oeknp";
  const filters = [getMonthFilter()];
  const measures = getMeasures();
  const viewBy = getViewBy();
  return (
    <div className="dashboard">
      <h1>
        $ Gross Profit from month{" "}
        <DropDownDay
          arr={dayData}
          onChangeDay={(val) => onChangeDay(val)}
          flag={true}
        />{" "}
        /{" "}
        <DropDownDayMonthYear
          arr={monthNumber}
          onChangeMonth={(val) => onChangeMonth(val)}
          flag={true}
        />{" "}
        /{" "}
        <DropDownYear
          arr={yearData}
          onChangeYear={(val) => onChangeYear(val)}
          flag={true}
        />{" "}
        to{" "}
        <DropDownDay
          arr={dayData}
          onChangeDay={(val) => onChangeDayEnd(val)}
          flag={false}
        />{" "}
        /{" "}
        <DropDownDayMonthYear
          arr={monthNumber}
          onChangeMonth={(val) => onChangeMonthEnd(val)}
          flag={false}
        />{" "}
        /{" "}
        <DropDownYear
          arr={yearData}
          onChangeYear={(val) => onChangeYearEnd(val)}
          flag={false}
        />
      </h1>
      <div style={{ marginBottom: 60 }}>
        <ColumnChart
          measures={measures}
          filters={filters}
          projectId={projectId}
        />
      </div>
      <h1>$ Gross Profit - All months</h1>
      <div>
        <ColumnChart
          measures={measures}
          viewBy={viewBy}
          projectId={projectId}
        />
      </div>
    </div>
  );
};
