import React from 'react';
import {axiosWithAuth} from '../authentication/AxiosWithAuth';

class EditFriend extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            friend: this.props.friend
        }
    }

    handleChanges = e => {
        let value = e.target.value;
        this.setState({
            friend: {
            ...this.state.friend,
            [e.target.name]: value
          }
        });
      };

    handleUpdateFriend = (id, editedFriend) => {
        axiosWithAuth().put(`http://localhost:5000/api/friends/${id}`, editedFriend)
        .then(() => {
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
    return (
        <div>
            <form onSubmit={() => this.handleUpdateFriend(this.props.friend.id, this.state.friend)}>
                <input
                name="name"
                type="text"
                value={this.state.friend.name}
                placeholder={this.props.friend.name}
                onChange={this.handleChanges} />
                <input 
                name="age"
                type="number"
                value={this.state.friend.age}
                placeholder={this.props.friend.age}
                onChange={this.handleChanges}
                />
                <input 
                name="email"
                type="text"
                value={this.state.friend.email}
                placeholder={this.props.friend.email}
                onChange={this.handleChanges}
                />
                <button type="submit">Update Friend!</button>
            </form>
        </div>
    )}
}

export default EditFriend;