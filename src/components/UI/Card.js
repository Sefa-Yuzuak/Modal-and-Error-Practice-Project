import React from "react";

import classes from './Card.module.css' //5.aşama import ediyorum css modulunu

const Card = props => {
    return <div className={`${classes.card} ${props.className}`}> {props.children} </div> //3.aşama bunu yapıyoruz
};
export default Card;