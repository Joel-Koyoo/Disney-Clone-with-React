import React from "react";
import "./App.css";
import Header from "./features/components/header";
import Home from "./features/components/home";
import Detail from "./features/components/Detail";
import {
  BrowserRouter as Router,
  Switch,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <div className="App ">
      <Router>
        <Header />
        <Switch>
          <Route path="/detail">
            <Detail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
