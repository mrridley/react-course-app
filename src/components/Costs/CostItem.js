import "./CostItem.css";
import CostDate from "./CostDate";
import Card from "../UI/Card";
import React, { useState } from 'react';

const CostItem = (props) => {

    const [name, setName] = useState(props.name);

    const changeNameHandler = (e) => {
        setName('New Name');
    };

    return (
        <Card className='cost-item'>
            <CostDate date={props.date}/>
            <div className='cost-item__description'>
                <h2>{name}</h2>
                <div className='cost-item__price'>${props.price}</div>
                <button onClick={changeNameHandler}>Edit</button>
            </div>
        </Card>
    );
}

export default CostItem;