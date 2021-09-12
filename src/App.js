import NavBar from "./components/NavBar/NavBar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CartProvider from "./Context/CartContext.jsx";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <ItemListContainer />
            </Route>

            <Route path="/category/:id">
              <ItemListContainer />
            </Route>

            <Route path="/item/:id">
              <ItemDetailContainer />
            </Route>
          </Switch>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
