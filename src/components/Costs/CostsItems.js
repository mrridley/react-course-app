import CostItem from "./CostItem";
import "./CostsItems.css";

const Costs = (props) => {

    return (
        <div>
            {props.costs.map( (el) => (
                <CostItem key={el.id} name={el.name} price={el.price} date={el.date}></CostItem>
            ))}
        </div>
    );
}

export default Costs;