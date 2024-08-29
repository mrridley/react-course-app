import CostItem from "./components/CostItem";

function App() {
    const costs = [
        {
            date: new Date(2024, 7, 28),
            price: 999.99,
            name: 'Freezer'
        },
        {
            date: new Date(2022, 5, 12),
            price: 500,
            name: 'TV'
        },
        {
            date: new Date(1999, 5, 14),
            price: 10,
            name: 'Socks'
        }
    ];

  return (
      <div>
        <h1>Spending List</h1>
        <CostItem name={costs[0].name} price={costs[0].price} date={costs[0].date}></CostItem>
        <CostItem name={costs[1].name} price={costs[1].price} date={costs[1].date}></CostItem>
        <CostItem name={costs[2].name} price={costs[2].price} date={costs[2].date}></CostItem>
      </div>
  );
}

export default App;
