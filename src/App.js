import "./App.css";

// React
import { createContext, useState } from "react";

// React router dom
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

// Views
import Home from "./views/Home.jsx";
import Favorites from "./views/Favorites";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/" style={{ margin: "20px" }}>
                Home
              </Link>
              <Link to="/favorites" style={{ margin: "20px" }}>
                Favorites
              </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/favorites" component={Favorites} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
