import CostItem from "./CostItem";
import "./Costs.css";

function Costs(props) {
    const costs = props.costs;
    return (
        <div className='costs'>
            {costs.map( (el) => (
               <CostItem name={el.name} price={el.price} date={el.date}></CostItem>
            ))}
        </div>
    );
}

export default Costs;