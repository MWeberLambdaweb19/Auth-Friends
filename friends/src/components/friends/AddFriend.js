import React, {useState} from 'react';
import {axiosWithAuth} from '../authentication/AxiosWithAuth';

const AddFriend = (props) => {
    const [newFriend, setNewFriend] = useState({})

    const handleAddFriend = (e) => {
        e.preventDefault();
        axiosWithAuth().post(`http://localhost:5000/api/friends`, newFriend)
        .then(() => {
            props.history.push("/protected")
        })
        .catch(err => {
            console.log(err)
        })
    }

    const handleChanges = event => {
        setNewFriend({
            ...newFriend,
            [event.target.name]: event.target.value
        })
    }
    return (
        <div>
            <form onSubmit={handleAddFriend}>
                <input
                name="name"
                type="text"
                value={newFriend.name}
                onChange={handleChanges} />
                <input 
                name="age"
                type="number"
                value={newFriend.age}
                onChange={handleChanges}
                />
                <input 
                name="email"
                type="text"
                value={newFriend.email}
                onChange={handleChanges}
                />
                <button type="submit">Add Friend!</button>
            </form>
        </div>
    )
}

export default AddFriend;