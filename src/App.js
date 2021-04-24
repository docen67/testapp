import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from "./views/home.js"
import ContactPage from "./views/contact.js"

function App() {
  return (

  <Router>
    <div>
      <h1>Marine Mammals</h1>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path={"/contact"}>
        <ContactPage />
      </Route>
    </div>
  </Router>
  );
}

export default App;
