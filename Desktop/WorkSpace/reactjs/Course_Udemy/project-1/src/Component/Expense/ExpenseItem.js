import React from 'react';

import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    const price = '$' + props.price;
    return (
        <div className="expenseItem">
            <ExpenseDate date={props.date} />
            <div className="product">
                {props.product}
            </div>
            <div className="price">
                {price}
            </div>
        </div>
    );
}

export default ExpenseItem;


