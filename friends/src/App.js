import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import FriendList from './components/friends/FriendList';
import Navigation from './components/routes/Navigation';
import PrivateRoute from './components/routes/PrivateRoute';
import Login from './components/authentication/Login';
import AddFriend from './components/friends/AddFriend';

function App() {
  return (
    <div className="App">
      <h1>So, no one told you life was going to be this way?</h1>
      <Navigation />
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/protected" component={FriendList} />
      <PrivateRoute exact path="/addfriend" component={AddFriend} />
    </div>
  );
}

export default App;
