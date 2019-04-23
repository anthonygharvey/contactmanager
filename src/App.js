import React from "react";
import Header from "./components/Header";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header branding="Contact Manager" />
      <Contact name="John Doe" email="jdoe@gmail.com" phone="555-555-5555" />
      <Contact
        name="Karen Smith"
        email="karen@gmail.com"
        phone="333-333-3333"
      />
    </div>
  );
}

export default App;
