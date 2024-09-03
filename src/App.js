import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const App = () => {
    const costs = [
        {
            id: 'c1',
            date: new Date(2024, 7, 28),
            price: 999.99,
            name: 'Freezer'
        },
        {
            id: 'c2',
            date: new Date(2022, 5, 12),
            price: 500,
            name: 'TV'
        },
        {
            id: 'c3',
            date: new Date(1999, 5, 14),
            price: 10,
            name: 'Socks'
        },
        {
            id: 'c4',
            date: new Date(1999, 5, 14),
            price: 20,
            name: 'Cat Food'
        }
    ];

    const addCostHandler = (cost) => {
        console.log(cost);
    }

    return (
      <div>
        <NewCost onAddCost={addCostHandler}/>
        <Costs costs={costs}/>
      </div>
    );
}

export default App;
