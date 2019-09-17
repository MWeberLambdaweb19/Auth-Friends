import React from 'react';
import {Link} from 'react-router-dom';
import '../../App.css';

const Navigation = () => {
    const handleLogout = () => {
        localStorage.removeItem("token")
        window.location.reload();
    }

    return (
        <div>
        {localStorage.getItem("token") ? (
            <nav className="navbar">
                <Link to="/login">Login</Link>
                <Link to="/protected">See Your Friends</Link>
                <Link to="/addfriend">Add A Friend</Link>
                <button onClick={handleLogout}>Logout</button>
            </nav>
        ) : (
            <nav className="navbar">
                <Link to="/login">Login</Link>
                <Link to="/protected">See Your Friends</Link>
                <Link to="/addfriend">Add A Friend</Link>
            </nav>
        )}
        </div>
    )
}

export default Navigation;