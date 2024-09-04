import './CostForm.css';
import React, {useState} from 'react';
const CostForm = (props) => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [date, setDate] = useState('');

    //const [userInput, setUserInput] = useState({name: '', price: '', date: ''});

    const nameChangeHandler = (event) => {
        setName(event.target.value);
    }

    const priceChangeHandler = (event) => {
        setPrice(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const costData = {
            name: name,
            price: price,
            date: new Date(date)
        }

        props.onSaveCostData(costData);
        setName('');
        setPrice('');
        setDate('');
    }

    const onCancelClickHandler = (event) => {
        props.onCancelForm();
    }

    return <form onSubmit={submitHandler}>
        <div className='new-cost__controls'>
            <div className='new-cost__control'>
                <label>Name</label>
                <input type='text' value={name} onChange={nameChangeHandler}/>
            </div>
            <div className='new-cost__control'>
                <label>Price</label>
                <input type='number' min='0.01' step='0.01' value={price} onChange={priceChangeHandler}/>
            </div>
            <div className='new-cost__control'>
                <label>Date</label>
                <input type='date' min='2019-01-01' value={date} onChange={dateChangeHandler}/>
            </div>
            <div className='new-cost__actions'>
                <button type='submit'>Add spending</button>
                <button type='button' onClick={onCancelClickHandler}>Cancel</button>
            </div>
        </div>
    </form>

}

export default CostForm;