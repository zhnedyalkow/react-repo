import React from 'react';
import './person.css';

const person = (props) => {

    return (
        <div className='Person'>
            <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.value} />
        </div>
    ) 
}

export default person;