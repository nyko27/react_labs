import { Fragment } from "react";
import Header from "./components/Header/Header";
import ShopInfo from "./components/ShopInfo/ShopInfo";
import CheeseslList from "./components/List/CheesesList";
import Catalog from "./components/Catalog/Catalog";
import Footer from "./components/Footer/Footer";
import { Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Fragment className="App">
      <Header />
      <Router>
        <Route exact path="/" component={ShopInfo} />
        <Route exact path="/" component={CheeseslList} />
        <Route exact path="/catalog" component={Catalog} />
      </Router>
      <Footer />
    </Fragment>
  );
}

export default App;
