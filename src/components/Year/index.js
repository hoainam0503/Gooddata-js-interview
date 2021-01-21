import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './style.css'

export const DropDownYear = ({arr, onChangeYear, flag}) => {
  const {year, yearEnd, month, monthEnd} = useSelector(state => ({
    year: state.reducerDateTime.year,
    yearEnd: state.reducerDateTime.yearEnd,
    month: state.reducerDateTime.month,
    monthEnd: state.reducerDateTime.monthEnd,
  }))
  const checkYear = (item) => {
    if (flag && month === monthEnd && item > yearEnd) {
        return true;
    } else if(flag && month < monthEnd && item > yearEnd){
        return true;
    }else if(flag && month > monthEnd && item >= yearEnd){
        return true;
    }else if(flag && month < month){
        return true;
    } else if(!flag && month === monthEnd && item < year){
        return true;
    } else if (!flag && month < monthEnd && item < year) {
        return true;
    } else if(!flag && month > monthEnd && item <= year){
        return true;
    }else if(!flag && month > monthEnd && item <= year){
        return true
    }
    
  }
  return (
    <select defaultValue={`${year}`} onChange={val => onChangeYear(val)} className="styleYear">
      {
        arr.map(item => {
          return(
            <option value={`${item}`} disabled={checkYear(item)}>{`${item}`}</option>
          )
        })
      }
    </select>
  )
}