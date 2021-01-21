export const SET_DAY = 'SET_DAY';
export const SET_MONTH = 'SET_MONTH';
export const SET_YEAR = 'SET_YEAR';
export const SET_DAY_END = 'SET_DAY_END';
export const SET_MONTH_END = 'SET_MONTH_END';
export const SET_YEAR_END = 'SET_YEAR_END';

export const setDay = day => ({
    type: SET_DAY,
    payload: day
})

export const setMonth = month => ({
    type: SET_MONTH,
    payload: month
})

export const setYear = year => ({
    type: SET_YEAR,
    payload: year
})

export const setDayEnd = dayEnd => ({
    type: SET_DAY_END,
    payload: dayEnd
})

export const setMonthEnd = monthEnd => ({
    type: SET_MONTH_END,
    payload: monthEnd
})

export const setYearEnd = yearEnd => ({
    type: SET_YEAR_END,
    payload: yearEnd
})