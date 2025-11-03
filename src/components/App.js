
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [name,setName]=useState("");
  return (
    <div>
        {/* Do not remove the main div */}
        <lable for="namee">Enter Your Name:</lable>
        <input type="text" id="namee" value={name}
          onChange={(e) => setName(e.target.value)}>
          </input>

          {name.trim() !== "" && (
        <h3 style={{ marginTop: "20px" }}>Hello, {name}!</h3>
      )}
    </div>
  )
}

export default App
