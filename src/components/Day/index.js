import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const DropDownDay= ({arr, onChangeDay, flag}) => {
  const dispatch = useDispatch();
  const {day, dayEnd, yearEnd, year, month, monthEnd} = useSelector(state => ({
    day: state.reducerDateTime.day,
    dayEnd: state.reducerDateTime.dayEnd,
    yearEnd: state.reducerDateTime.yearEnd,
    year: state.reducerDateTime.year,
    month: state.reducerDateTime.month,
    monthEnd: state.reducerDateTime.monthEnd,
  }))
  const checkYear = (year) => {
      if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
          return true;
      } else {
          return false;
      }
  }
  return (
    <select defaultValue={`'${day}'`} onChange={val => onChangeDay(val)}>
      {
        arr.map(item => {
          return(
            <option value={`${item}`} disabled={flag && item > dayEnd || !flag && item < day}>{`${item}`}</option>
          )
        })
      }
    </select>
  )
}