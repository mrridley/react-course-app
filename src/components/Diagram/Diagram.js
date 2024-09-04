import "./Diagram.css";
import DiagramBar from "./DiagramBar";

const Diagram = (props) => {

    const valuesArr = props.dataSets.map(set => set.value);

    const maxMonthCost = Math.max(...valuesArr);

    console.log(maxMonthCost);

    return (
        <div className='diagram'>
            {props.dataSets.map((dataSet) => {
                return <DiagramBar
                    key={dataSet.label}
                    value={dataSet.value}
                    label={dataSet.label}
                    maxValue={maxMonthCost} />
            })}
        </div>
    )
}

export default Diagram;