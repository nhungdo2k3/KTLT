import React, {useState} from "react"; 

import './FormInput.css';
import Button from '../UI/Button'

const FormInput = props => {
    const [inputValue, setInputValue] = useState('');
    const [isValid, setIsValid] = useState(true);

    const handlerChangeInput = (event) => {
        setInputValue(event.target.value);
    }

    function Validator() {
        if(inputValue.trim() === '') {
            setIsValid(false);
        }
    }

    function resetValidator() {
        setIsValid(true);
    }

    const handlerSubmit = (event)  => {
        event.preventDefault();
        if(inputValue.trim() === '') {
            setIsValid(false);
            event.target.querySelector('input').style.animation = '0.2s ring linear'
            setTimeout(function() {
                event.target.querySelector('input').style.animation = null
            }, 200)
        }
        else {
            props.onSaveNewTask(inputValue);
            setInputValue('')
        }
    }

    return (
        <form onSubmit={handlerSubmit}>
            <label>New Task</label>
            <input
                type='text' 
                className={isValid === true ? '' : 'inValid'} 
                onChange={handlerChangeInput}
                onBlur={Validator}
                onInput={resetValidator}
                value={inputValue} 
            />
            <Button type='submit' onClick={handlerSubmit}>Add Task</Button>
        </form>
    )
}

export default FormInput;