import React from "react";
import { DatePicker, Space } from "antd";
import { useSelector } from "react-redux";
import moment from "moment";
import "antd/dist/antd.css";


export const SelectDateTime = ({dateFormat, onChangeTime}) => {
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
    return (
        <Space direction="vertical" size={12}>
          <DatePicker.RangePicker
            defaultValue={[
              moment(new Date(`${year}/${month}/${day}`), dateFormat),
              moment(new Date(`${yearEnd}/${monthEnd}/${dayEnd}`), dateFormat),
            ]}
            format={dateFormat}
            onChange={onChangeTime}
          />
        </Space>
    )
}