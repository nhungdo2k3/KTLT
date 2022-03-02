import React, { useState } from 'react';

import NewExpense from './Component/NewExpense/NewExpense';
import Expense from './Component/Expense/Expense';
import './App.css'

const DUMMY_EXPENSES = [
    {
        id: 1,
        product: 'Car',
        price: '2500',
        date: new Date(2021, 3, 1)
    },
    {
        id: 2,
        product: 'House',
        price: '9999',
        date: new Date(2021, 10, 29)
    },
    {
        id: 3,
        product: 'Television',
        price: '149',
        date: new Date(2019, 11, 1)
    },
    {
        id: 4,
        product: 'Table',
        price: '29',
        date: new Date(2022, 0, 1)
    }
]

function App() {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
    const addNewExpense = newExpense => {
        setExpenses([newExpense, ...expenses]);
    }
    
    return (
        <div className="App">
            <NewExpense addNewExpense={addNewExpense} />
            <Expense expenses={expenses} />
        </div>
    );
}

export default App;
