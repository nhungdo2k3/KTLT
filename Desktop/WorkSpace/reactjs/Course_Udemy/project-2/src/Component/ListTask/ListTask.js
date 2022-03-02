import React from 'react';

import './ListTask.css';
import ItemTask from './ItemTask';

const ListTask = props => {
    const onDeleteTask = index => {
        props.deleteTask(index);
    }

    var content;
    if(props.tasks.length === 0) {
        content = 'Completed all tasks. Congratulate!'
    }
    else {
        content = props.tasks.map(function(task, index) {
            return <ItemTask key={index} task={task} id={index} onDeleteTask={onDeleteTask}/>
        })
    }

    return (
        <ul className='list-task'>
            {content}
        </ul>
    )
}

export default ListTask;