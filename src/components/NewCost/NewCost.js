import CostForm from "./CostForm";
import './NewCost.css';
import React, {useState} from "react";

const NewCost = (props) => {

    const [showForm, setShowForm] = useState(false);
    const saveCostDataHandler = (costData) => {
        const _costData = {
            ...costData,
            id: Math.random().toString()
        };
        props.onAddCost(_costData);
        setShowForm(false);
    }

    const onAddButtonClickHandler = (event) => {
        setShowForm(true);
    }

    const onCancelFormHandler = (event) => {
        setShowForm(false);
    }

    return (
        <div className='new-cost'>
            {!showForm && <button onClick={onAddButtonClickHandler}>Add spending</button>}
            {showForm && <CostForm onSaveCostData={saveCostDataHandler} onCancelForm={onCancelFormHandler}/>}
        </div>
    )
}

export default NewCost;