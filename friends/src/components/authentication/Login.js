import React, {useState} from 'react';

import {axiosWithAuth} from './AxiosWithAuth';

const Login = (props) => {
    const [credentials, setCredentials] = useState({})

    const handleLogin = (e) => {
        e.preventDefault();
        axiosWithAuth().post(`http://localhost:5000/api/login`, credentials)
        .then(res => {
            localStorage.setItem("token", res.data.payload)
            props.history.push("/protected")
            window.location.reload()
        })
        .catch(err => {
            console.log(err)
        })
    }

    const handleChanges = event => {
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value
        })
    }
    return (
        <div>
            <form onSubmit={handleLogin}>
                <input
                name="username"
                type="text"
                value={credentials.username}
                onChange={handleChanges} />
                <input 
                name="password"
                type="password"
                value={credentials.password}
                onChange={handleChanges}
                />
                <button type="submit">Login!</button>
            </form>
        </div>
    )
}

export default Login;