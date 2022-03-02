import React from "react";

import './ItemTask.css';

const ItemTask = props => {
    const deleteTask = event => {
        props.onDeleteTask(event.target.getAttribute('id'));
    }
    return (
        <li  id={props.id} className='item-task' onClick={deleteTask}>{props.task}</li>
    )
}

export default ItemTask;