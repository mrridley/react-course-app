//import CostItem from "./CostItem";
import "./Costs.css";
import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import CostsItems from "./CostsItems";
import React, {useState} from "react";

const Costs = (props) => {

    const [year, setYear] = useState('');

    let costs = props.costs;
    const changeYearHandler = (year) => {
        setYear(year);
    }

    const filteredCosts = year !== '' ? (costs.filter((cost) => {
        return cost.date.getFullYear() === parseInt(year)
    })) : costs;

    return (
        <div>
            <Card className='costs'>
                <CostsFilter year={year} onChangeYear={changeYearHandler} />
                <CostsItems costs={filteredCosts} />
            </Card>
        </div>
    );
}

export default Costs;