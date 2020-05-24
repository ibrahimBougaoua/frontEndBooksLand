import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import account from "./components/account";
import Index from "./components/index";

function App() {

  return (<Router>

      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/account" component={account} />
      </Switch>

    </Router>
  );
}

export default App;