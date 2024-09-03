import CostItem from "./CostItem";
import "./Costs.css";
import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import React, {useState} from "react";

const Costs = (props) => {

    const [year, setYear] = useState('2021');
    const costs = props.costs;
    const changeYearHandler = (year) => {
        console.log(year);
        setYear(year);
    }

    return (
        <div>
            <Card className='costs'>
                <CostsFilter year={year} onChangeYear={changeYearHandler} />
                {costs.map( (el) => (
                   <CostItem key={el.name} name={el.name} price={el.price} date={el.date}></CostItem>
                ))}
            </Card>
        </div>
    );
}

export default Costs;