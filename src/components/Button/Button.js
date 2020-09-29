import React from 'react';
import "./button.css";

//Presentational component, this component does not have any logic, it only receives info form props and displays it
const Button = (props) => {
    return (
        <button className={props.classValue} onClick={() => props.onClickEvent(props.userId)}>{props.children}</button>
    )
}

export default Button;