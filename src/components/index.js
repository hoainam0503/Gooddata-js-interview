import React from "react";
import { useSelector } from "react-redux";
import { monthData } from "../util/common";

export const DropDownTime = ({ arr, onChangeTime, flag }) => {
  console.log(flag);
  const { month, monthEnd, year, yearEnd, day, dayEnd } = useSelector(
    (state) => ({
      month: state.reducerDateTime.month,
      monthEnd: state.reducerDateTime.monthEnd,
      year: state.reducerDateTime.year,
      yearEnd: state.reducerDateTime.yearEnd,
      day: state.reducerDateTime.day,
      dayEnd: state.reducerDateTime.dayEnd,
    })
  );
  const checkDisable = (item) => {
    if (flag === "year") {
      return (day === dayEnd && month === monthEnd && item > yearEnd) ||
        (day < dayEnd && month < monthEnd && item > yearEnd) ||
        (day === dayEnd && month < monthEnd && item > yearEnd) ||
        (day < dayEnd && month === monthEnd && item > yearEnd)
        ? true
        : false;
    }
    if (flag === "yearEnd") {
      return item < year ? true : false;
    }
    if (flag === "month") {
      return (year === yearEnd && day === dayEnd && item > monthEnd) ||
        (year === yearEnd && day < dayEnd && item > monthEnd)
        ? true
        : false;
    }
    if (flag === "monthEnd") {
      return year === yearEnd && day === dayEnd && item < month ? true : false;
    }
  };
  return (
    <select
      defaultValue={`${arr[0]}`}
      onChange={(val) => onChangeTime(val)}
      className="styleMonth"
    >
      {flag === "month" || flag === "monthEnd"
        ? arr.map((item) => {
            return (
              <option value={`${item}`} disabled={checkDisable(item)}>
                {monthData[item]}
              </option>
            );
          })
        : arr.map((item) => {
            return (
              <option
                value={`${item}`}
                disabled={checkDisable(item)}
              >{`${item}`}</option>
            );
          })}
    </select>
  );
};
