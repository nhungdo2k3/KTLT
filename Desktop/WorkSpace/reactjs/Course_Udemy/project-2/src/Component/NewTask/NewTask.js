import React from "react";

import './NewTask.css';
import FormInput from './FormInput'

const NewTask = props => {
    const onSaveNewTask = newTask => {
        props.addTask(newTask);
    }
    
    return (
        <div className='new-task'>
            <FormInput onSaveNewTask={onSaveNewTask}/>
        </div>
    )
}

export default NewTask;