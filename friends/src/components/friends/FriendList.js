import React, {useState, useEffect} from 'react';
import Friend from './Friend';
import {axiosWithAuth} from '../authentication/AxiosWithAuth';

const FriendList = () => {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        axiosWithAuth().get(`http://localhost:5000/api/friends`)
        .then(res => {
            console.log(res)
            setFriends(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    
    return (
        <div>
            {friends.map(item => {
                return (
                    <Friend key={item.id} friend={item} />
                )
            })}
        </div>
    )
}

export default FriendList;