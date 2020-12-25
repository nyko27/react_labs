import React from "react";
import Header from "./components/Header/Header";
import ShopInfo from "./components/ShopInfo/ShopInfo";
import CheeseslList from "./components/List/CheesesList";
import Catalog from "./pages/Catalog/Catalog";
import Footer from "./components/Footer/Footer";
import ItemPage from "./pages/ItemPage/ItemPage";
import { Switch, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <Switch>
            <Route exact path="/" > <ShopInfo/> <CheeseslList/> </Route>
            <Route  path="/catalog"  > <Catalog/> </Route> 
            <Route path="/item/:id"><ItemPage /></Route> 
          </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
