import React from 'react';
import "./userCard.css";
import Button from "../Button/Button";

//Presentational component, it only displays the information that is receiving from props
const UserCard = (props) => {
    return (
        <div className="user-card">
            <p> name: {props.user.name}</p>
            <p> age: {props.user.age}</p>
            <Button userId={props.user.id} classValue={"danger"} onClickEvent={props.deleteUser}> delete </Button>
        </div>
    )
}

export default UserCard;