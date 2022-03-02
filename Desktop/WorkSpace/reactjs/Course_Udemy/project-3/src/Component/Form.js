import React, {useState} from 'react';

import './Form.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import Modal from '../UI/Modal';

const Form = props => {
    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChangeName = event => {
        setUserName(event.target.value);
    }

    const handleChangeAge = event => {
        setUserAge(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        if(userName.trim().length === 0 || userAge.trim().length === 0) {
            console.log(userName.trim().length, userAge.trim().length)
            setErrorMessage('Please enter input (input not empty).')
            return;
        }
        if(+userAge < 0) {
            setErrorMessage('Please enter age >= 0.');
            return;
        }
        props.onAddUser(userName, userAge);
        setUserName('');
        setUserAge('');
    }

    let modalComponent;
    if(errorMessage==='') {
        modalComponent = false;
    } else {
        modalComponent = <Modal 
                            title='Error!'
                            message={errorMessage}
                            textButton='OK'
                            onClick={function() {
                                setErrorMessage('');
                            }}
                        />
    }
    
    return (
        <Card className='container-form'>
            {modalComponent}
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>User name</label>
                <input id='name' type='text' value={userName} onChange={handleChangeName}/>
                <label htmlFor='age'>Age (Years)</label>
                <input id='age' type='number' value={userAge} onChange={handleChangeAge}/>
                <Button type='submit' className='form--button' onClick={handleSubmit}>Add User</Button>
            </form>
        </Card>
    )
}

export default Form;