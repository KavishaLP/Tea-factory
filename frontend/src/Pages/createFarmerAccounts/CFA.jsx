import React, { useState } from "react";
import "./CFA.css";

const CreateFarmerAccount = () => {
  const [farmerName, setFarmerName] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [contact, setContact] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Farmer Details:", { farmerName, registrationNumber, contact });
  };

  return (
    <div className="container">
      <div className="form-box">
        <h2>Create Farmer Account</h2>
        <form onSubmit={handleSubmit}>
          <label>Farmer Name</label>
          <input
            type="text"
            value={farmerName}
            onChange={(e) => setFarmerName(e.target.value)}
            required
          />

          <label>Registration Number</label>
          <input
            type="text"
            value={registrationNumber}
            onChange={(e) => setRegistrationNumber(e.target.value)}
            required
          />

          <label>Contact Number</label>
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />

          <button type="submit">Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default CreateFarmerAccount;
