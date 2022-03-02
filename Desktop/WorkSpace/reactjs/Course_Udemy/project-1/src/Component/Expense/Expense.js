import React, {useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter';
import ExpenseChart from './ExpenseChart';
import './Expense.css';

function Expense(props) {
    const [filterYear, setFilterYear] = useState('2021');
    const changeFilterYearHandler = selectedYear => {
        setFilterYear(selectedYear);
    }
    const expensesFilterYear = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filterYear;
    })

    let expenseContent = <p className='message-error'>No expense found.</p>
    if(expensesFilterYear.length > 0) {
        expenseContent = expensesFilterYear.map(expense => 
            <ExpenseItem 
            key={expense.id}
            product={expense.product} 
            price={expense.price} 
            date={expense.date} 
            />
        )
    }

    return (
        <Card className='expense'>
            <ExpenseFilter filterYear={filterYear} changeFilterYearHandler={changeFilterYearHandler}/>
            <ExpenseChart expenses={expensesFilterYear} />
            {expenseContent}
        </Card>
    );
}

export default Expense;