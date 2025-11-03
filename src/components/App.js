import React, { useState } from "react";

const PersonalizedGreeting = () => {
  const [name, setName] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Personalized Greeting</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: "8px", width: "200px" }}
      />

      {name !== "" && (
        <h3 style={{ marginTop: "20px" }}>Hello {name}!</h3>
      )}
    </div>
  );
};

export default PersonalizedGreeting;
