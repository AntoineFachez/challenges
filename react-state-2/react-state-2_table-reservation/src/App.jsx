import Counter from "./components/Counter";
import "./App.css";
import { useState } from "react";

export default function App() {
  const handlePeopleCounterUp = () => {
    setPeople(people + 1);
  };
  const handlePeopleCounterDown = () => {
    setPeople(people - 1);
  };

  const [people, setPeople] = useState(0);
  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter
        people={people}
        setPeople={setPeople}
        handlePeopleCounterUp={handlePeopleCounterUp}
        handlePeopleCounterDown={handlePeopleCounterDown}
      />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
