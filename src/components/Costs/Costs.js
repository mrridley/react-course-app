import CostItem from "./CostItem";
import "./Costs.css";
import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";

const Costs = (props) => {
    const costs = props.costs;
    const changeYearHandler = (year) => {
        console.log(year);
    }

    return (
        <div>
            <Card className='costs'>
                <CostsFilter onChangeYear={changeYearHandler} />
                {costs.map( (el) => (
                   <CostItem key={el.name} name={el.name} price={el.price} date={el.date}></CostItem>
                ))}
            </Card>
        </div>
    );
}

export default Costs;