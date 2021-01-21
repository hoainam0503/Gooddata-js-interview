import {
  SET_YEAR,
  SET_DAY,
  SET_MONTH,
  SET_YEAR_END,
  SET_MONTH_END,
  SET_DAY_END,
} from "../action";

const initialState = {
  day: 1,
  month: 1,
  year: 2015,
  dayEnd: 1,
  monthEnd: 1,
  yearEnd: 2015,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_DAY:
      return {
        ...state,
        day: action.payload,
      };

    case SET_MONTH:
      return {
        ...state,
        month: action.payload,
      };

    case SET_YEAR:
      return {
        ...state,
        year: action.payload,
      };

    case SET_DAY_END:
      return {
        ...state,
        dayEnd: action.payload,
      };

    case SET_MONTH_END:
      return {
        ...state,
        monthEnd: action.payload,
      };

    case SET_YEAR_END:
      return {
        ...state,
        yearEnd: action.payload,
      };
    default:
      return state;
  }
}
