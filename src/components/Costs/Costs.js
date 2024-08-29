import CostItem from "./CostItem";
import "./Costs.css";
import Card from "../UI/Card";

const Costs = (props) => {
    const costs = props.costs;
    return (
        <Card className='costs'>
            {costs.map( (el) => (
               <CostItem name={el.name} price={el.price} date={el.date}></CostItem>
            ))}
        </Card>
    );
}

export default Costs;