import CostForm from "./CostForm";
import './NewCost.css';

const NewCost = (props) => {
    const saveCostDataHandler = (costData) => {
        const _costData = {
            ...costData,
            id: Math.random().toString()
        };
        props.onAddCost(_costData);
    }

    return (
        <div className='new-cost'>
            <CostForm onSaveCostData={saveCostDataHandler}/>
        </div>
    )
}

export default NewCost;