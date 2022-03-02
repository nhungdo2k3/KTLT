import React, {useState} from 'react';

import './App.css';
import Form from './Component/Form';
import ListUser from './Component/ListUser';

function App() {
  const [listUser, setListUser] = useState([]);

  const handlerAddUser = (userName, userAge) => {
    setListUser(prev => {
      return [
        ...prev, 
        {
          name: userName,
          age: userAge
        }
      ]
    })
  }

  return (
    <div className="App">
      <Form onAddUser={handlerAddUser}/>
      {listUser.length === 0 ? null : <ListUser listUser={listUser}/>}
    </div>
  );
}

export default App;
