import React from "react";
import "@gooddata/react-components/styles/css/main.css";
import "../containers/style.css";
import { ColumnChart, Model } from "@gooddata/react-components";
import { useSelector, useDispatch } from "react-redux";
import {
  setMonth,
  setMonthEnd,
  setYear,
  setYearEnd,
  setDay,
  setDayEnd,
} from "../data/action";
import {SelectDateTime} from '../components/DateTime/index'

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
  const onChangeTime = (value, dateString) => {
    const [yy, mm, dd] = dateString[0].split('/').map(e => +e);
    const [yyEnd, mmEnd, ddEnd] = dateString[1].split('/').map(e => +e);
    dispatch(setDay(dd));
    dispatch(setMonth(mm));
    dispatch(setYear(yy));
    dispatch(setDayEnd(ddEnd));
    dispatch(setMonthEnd(mmEnd));
    dispatch(setYearEnd(yyEnd));
  }

  const projectId = "xms7ga4tf3g3nzucd8380o2bev8oeknp";
  const filters = [getMonthFilter()];
  const measures = getMeasures();
  const viewBy = getViewBy();
  return (
    <div className="dashboard">
      <h1>
        $ Gross Profit from <SelectDateTime dateFormat = "YYYY/MM/DD" onChangeTime={onChangeTime}/>
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
