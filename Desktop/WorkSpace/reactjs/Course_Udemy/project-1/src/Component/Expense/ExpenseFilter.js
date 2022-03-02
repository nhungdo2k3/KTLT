import React from 'react';

import './ExpenseFilter.css';

const ExpenseFilter = (props) => {

    const changeSelectedYear = (event) => {
        props.changeFilterYearHandler(event.target.value);
    }

    return (
        <div className='expense-filter'>
            <h3>Filter By Year</h3>
            <select value={props.filterYear} onChange={changeSelectedYear}>
                <option value='2022'>2022</option>
                <option value='2021'>2021</option>
                <option value='2020'>2020</option>
                <option value='2019'>2019</option>
            </select>
        </div>
    );
}

export default ExpenseFilter;
