import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from "./views/home.js"
import ContactPage from "./views/contact.js"

function App() {
  return (
    <div className="wrapper">
      <h1>Marine Mammals</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path={"/contact"}>
            <ContactPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
