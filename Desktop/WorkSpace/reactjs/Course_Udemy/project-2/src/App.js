import React, {useState} from 'react';

import './App.css';
import ListTask from './Component/ListTask/ListTask';
import NewTask from './Component/NewTask/NewTask'

function App() {
  const tasks = ['Do homework', 'Play football with friends'];

  const [arrayTask, setArrayTask] = useState(tasks);

  const handlerAddTask = newTask => {
    setArrayTask([newTask, ...arrayTask]);
  }

  const handlerDeleteTask = index => {
    let arrayTemporary = [...arrayTask];
    arrayTemporary.splice(index, 1);
    setArrayTask(arrayTemporary);
  }
  
  return (
    <div className="App">
      <NewTask addTask={handlerAddTask}/>
      <ListTask tasks={arrayTask} deleteTask={handlerDeleteTask}/>
    </div>
  );
}

export default App;
