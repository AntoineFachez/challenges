import { useState } from "react";
import "./App.css";

export default function App() {
  const [holiday, setHoliday] = useState("");
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [data, setData] = useState({ holiday: holiday, date: date });

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target); // Create a FormData object

    const holiday = formData.get("holiday");
    const date = formData.get("date");

    setHoliday(holiday);
    setDate(date);
    handleResetValues();
  }
  // console.log(data.entries, data.entries());
  const handleResetValues = () => {
    setData({ holiday: holiday, date: date });
    setHoliday("");
    setDate("");
  };
  return (
    <div className="container">
      <h1>Favourite Holiday Data Storage</h1>
      <h2 id="favourite-holiday">Please tell us your favourite holiday!</h2>
      <form
        className="form"
        aria-labelledby="favourite-holiday"
        onSubmit={handleSubmit}
      >
        <label htmlFor="holiday">My Favourite Holiday: </label>
        <input
          id="holiday"
          type="text"
          name="holiday"
          placeholder="e.g. Women's World Day"
          onChange={(e) => setHoliday(e.target.value)}
          value={holiday}
        />
        <label htmlFor="date">Date: </label>
        <input
          id="date"
          type="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button
          type="submit"
          className="form__submit-button"
          // onClick={(e) => handleSubmit(e, holiday, date)}
        >
          Submit
        </button>
      </form>
      <h2>Output of Submitted Data</h2>
      <p>
        Favourite Holiday: <span className="output">{data.holiday}</span>
      </p>
      <p>
        Date: <span className="output">{data.date}</span>
      </p>
    </div>
  );
}
