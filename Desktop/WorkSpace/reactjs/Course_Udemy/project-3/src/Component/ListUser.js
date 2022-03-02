import React from "react";

import './ListUser.css';
import Card from "../UI/Card";

const ListUser = props => {
    return (
        <Card className='user-list'>
            {props.listUser.map(function(user, index) {
                return <div key={index} className='user-item'>{user.name}, {user.age}</div>
            })}
        </Card>
    )
}

export default ListUser;