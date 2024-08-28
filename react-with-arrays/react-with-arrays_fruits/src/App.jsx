import Card from './components/Card';
import './App.css';

export default function App() {
  const fruits = [
    {
      id: 1337,
      name: '🍌 Banana',
      color: 'yellow',
    },
    {
      id: 42,
      name: '🍎 Apple',
      color: 'red',
    },
    {
      id: 9001,
      name: '🍇 Grapes',
      color: 'purple',
    },
    {
      id: 123,
      name: '🍊 Orange',
      color: 'orange',
    },
    {
      id: 777,
      name: '🍓 Strawberry',
      color: 'red',
    },
  ];

  return (
    <div className="app">
      {fruits?.map((fruit, i) => (
        <Card key={i} name={fruit.name} color={fruit.color} />
      ))}
    </div>
  );
}
