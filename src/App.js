import { Fragment } from 'react';
import  Header  from './components/Header/Header';
import  ShopInfo  from './components/ShopInfo/ShopInfo';
import  CheeseslList  from './components/List/CheesesList';
import  Footer  from './components/Footer/Footer';

function App() {
  return (
    <Fragment className="App">
      <Header />
      <ShopInfo/>
      <CheeseslList/>
      <Footer/>
    </Fragment>
  );
}

export default App;
