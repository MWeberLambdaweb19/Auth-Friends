import React, {useState} from 'react';
import '../../App.css';
import {axiosWithAuth} from '../authentication/AxiosWithAuth';
import EditFriend from './EditFriend';

const Friend = (props) => {
    const [friend] = useState(props.friend)

    const handleDelete = (id) => {
        axiosWithAuth().delete(`http://localhost:5000/api/friends/${id}`)
        .then(() => {
            window.location.reload();
        })
    }
    return (
        <div className="card">
            <h2>{friend.name}</h2>
            <h4>{friend.age}</h4>
            <h4>{friend.email}</h4>
            <EditFriend friend={friend} />
            <button onClick={() => handleDelete(friend.id)}>X</button>            
        </div>
    )
}

export default Friend;