import React from "react";
import Header from "./components/Header/Header";
import ShopInfo from "./components/ShopInfo/ShopInfo";
import CheeseslList from "./components/List/CheesesList";
import Catalog from "./pages/Catalog/Catalog";
import Cart from "./pages/Cart/Cart";
import Footer from "./components/Footer/Footer";
import ItemPage from "./pages/ItemPage/ItemPage";
import Checkout from "./pages/Checkout/Checkout";
import Success from "./pages/Success/Success";
import { Switch, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <Switch>
            <Route exact path="/" > <ShopInfo/> <CheeseslList/> </Route>
            <Route  path="/catalog"  > <Catalog/> </Route> 
            <Route  path="/cart"  > <Cart/> </Route> 
            <Route path="/item/:id"><ItemPage /></Route> 
            <Route path="/checkout"><Checkout /></Route> 
            <Route path="/success"><Success /></Route>
          </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
