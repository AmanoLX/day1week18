import React, { Component } from 'react';
import usersList from '../../user.json';
import UserCard from '../UserCard/UserCard';
import "./userContainer.css";

//Container component, this component handles the state and performs actions over it.
//Normally this component is the one that is going to get the information that will be passed to the presentational components
class UserContainer extends Component {
    state = {
        usersList
    }

    deleteUser = (id) => {
        const newUserArray = [...this.state.usersList].filter((element) => element.id !== id);
        this.setState({
            usersList: newUserArray
        })

    }

    render() {
        return (
            <div className="user-container">
                {
                    this.state.usersList.map((user) => {
                        return <UserCard user={user} deleteUser={this.deleteUser} key={user.id}></UserCard>
                    })
                }
            </div>
        );
    }
}


export default UserContainer;