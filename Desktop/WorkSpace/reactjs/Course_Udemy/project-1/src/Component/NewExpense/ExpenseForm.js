import React, { useState } from 'react'

import './ExpenseForm.css'
import Button from '../UI/Button'

const ExpenseForm = (props) => {
    const [userInput, setUserInput] = useState({
        enterProduct: '',
        enterPrice: '',
        enterDate: ''
    })

    const productChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enterProduct: event.target.value
            }
        })
    }
    const priceChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enterPrice: event.target.value
            }
        })
    }
    const dateChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enterDate: event.target.value
            }
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            id: Math.floor(Math.random() * 1000),
            product: userInput.enterProduct,
            price: userInput.enterPrice,
            date: new Date(userInput.enterDate)
        }
        props.onSaveExpenseData(expenseData)

        setUserInput({
            enterProduct: '',
            enterPrice: '',
            enterDate: ''
        })
    }
    
    return (
        <form onSubmit={submitHandler}>
            <div className='form-group'>
                <label>Product</label>
                <input type='text' onChange={productChangeHandler} value={userInput.enterProduct} required/>
            </div>
            <div className='form-group'>
                <label>Price</label>
                <input type='number' min='0.01' step='0.01' onChange={priceChangeHandler} value={userInput.enterPrice} required/>
            </div>
            <div className='form-group'>
                <label>Date</label>
                <input type='date' min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler} value={userInput.enterDate} required/>
            </div>
            <div className='form-group'>
                <Button type='submit' onClick={submitHandler}>Add Product</Button>
            </div>
        </form>
    );
}

export default ExpenseForm;