import React from 'react';
import { useSelector } from 'react-redux';
import {monthData} from '../../util/common';
import './style.css'

export const DropDownDayMonthYear = ({arr, onChangeMonth, flag}) => {
  const {month, monthEnd, year, yearEnd} = useSelector(state => ({
    month: state.reducerDateTime.month,
    monthEnd: state.reducerDateTime.monthEnd,
    year: state.reducerDateTime.year,
    yearEnd: state.reducerDateTime.yearEnd,
  }))
  const checkMonth = (item) => {
    if (flag && year === yearEnd && item > monthEnd) {
      return true
    } else if(flag && year < yearEnd){
      return false
    } else if(!flag && year === yearEnd){
      return false;
    } else if(!flag && year < yearEnd){
      return false;
    }
  }
  return (
    <select defaultValue={`${month}`} onChange={val => onChangeMonth(val)} className="styleMonth">
      {
        arr.map(item => {
          return(
            <option value={`${item}`} disabled={checkMonth(item)}>{monthData[item]}</option>
          )
        })
      }
    </select>
  )
}