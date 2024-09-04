import CostItem from "./CostItem";
import "./CostList.css";

const CostList = (props) => {


    if (props.costs.length === 0)
        return <h2 className='cost-list__fallback'>No spendings added for this year</h2>;

    return (
        <ul className='cost-list'>
            {props.costs.map( (el) => (
                <CostItem
                    key={el.id}
                    name={el.name}
                    price={el.price}
                    date={el.date}>
                </CostItem>
            ))}
        </ul>
    );
}

export default CostList;