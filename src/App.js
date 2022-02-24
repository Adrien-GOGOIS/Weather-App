// CSS
import "./App.css";

// Views
import Home from "./views/Home.jsx";
import Favorites from "./views/Favorites";

// React
import { createContext, useState } from "react";

// React router dom
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

// CONTEXT Favorites city :
export const FavoriteContext = createContext({
  stockedCity: [],
});

function App() {
  // STATE App.js
  const [stockedCity, setStockedCity] = useState([]);

  // Passage des valeurs pour context
  const value = {
    stockedCity: stockedCity,
    setStockedCity: setStockedCity,
  };

  return (
    <>
      <FavoriteContext.Provider value={value}>
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
      </FavoriteContext.Provider>
    </>
  );
}

export default App;
