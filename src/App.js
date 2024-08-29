import Costs from "./components/Costs";

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
        },
        {
            date: new Date(1999, 5, 14),
            price: 20,
            name: 'Cat Food'
        }
    ];

  return (
      <div>
        <h1>Spending List</h1>
        <Costs costs={costs}/>
      </div>
  );
}

export default App;
