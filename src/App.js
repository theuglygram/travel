import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "components/pages/Home";
import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
