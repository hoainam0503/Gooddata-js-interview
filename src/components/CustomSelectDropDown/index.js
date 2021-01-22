import React from "react";
import { monthData } from "../../util/common";

export const DropDownTime = ({ arr, onChangeTime, flag }) => {
  return (
    <select
      defaultValue={`${arr[0]}`}
      onChange={(val) => onChangeTime(val)}
      className="styleMonth"
    >
      {flag === "month" || flag === "monthEnd"
        ? arr.map((item) => {
            return (
              <option value={`${item}`}>
                {monthData[item]}
              </option>
            );
          })
        : arr.map((item) => {
            return (
              <option
                value={`${item}`}
              >{`${item}`}</option>
            );
          })}
    </select>
  );
};
