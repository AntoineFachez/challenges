import { useState } from "react";
import "./App.css";
import Form from "./components/Form.jsx";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  function handleCreateUser(e) {
    e.preventDefault();
    const formData = new FormData(e.target); // Create a FormData object

    const tempName = formData.get("name");
    const tempEmail = formData.get("email");
    setName(tempName);
    setEmail(tempEmail);
  }
  return (
    <div className="container">
      <h1>Personal Details Form</h1>
      <Form
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        handleCreateUser={handleCreateUser}
      />
      <h2>Your submitted details:</h2>
      <p>
        Name: <span className="output">{name}</span>
      </p>
      <p>
        Email: <span className="output">{email}</span>
      </p>
    </div>
  );
}
