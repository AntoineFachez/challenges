import { useState } from "react";
import "./Form.css";

export default function Form({ name, setName, email, setEmail }) {
  const [formData, setFormData] = useState({ name: name, email: email });
  // console.log(formData);

  function handleSubmit(e) {
    e.preventDefault();

    setFormData({ name: "", email: "" });
  }
  const handleDynamicUpdate = (e) => {
    const formData = new FormData(e.target); // Create a FormData object

    const name = formData.get("name");
    const email = formData.get("email");
    setName(name);
    setEmail(email);

    setFormData({ name: name, email: email });

    // setName(formData.name);
    // setEmail(formData.email);
  };
  return (
    <form
      className="form"
      aria-labelledby="user-details"
      onSubmit={handleSubmit}
    >
      <h2 id="user-details">Please enter your details here!</h2>
      <label htmlFor="name">Name: </label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="John Doe"
        value={name}
        onChange={(e) => handleDynamicUpdate(e)}
      />
      <label htmlFor="email">Email: </label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="john@doe.com"
        value={email}
        onChange={(e) => handleDynamicUpdate(e)}
      />
      <button className="form__submit-button" type="submit">
        Submit
      </button>
    </form>
  );
}
