import React from 'react'

import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {

    const onSaveExpenseData = (expenseData) => {
        props.addNewExpense(expenseData);
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={onSaveExpenseData}/>
        </div>
    );
}

export default NewExpense;