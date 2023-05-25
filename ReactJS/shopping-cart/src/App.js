import React, { Component } from 'react'
import Title from './component/Title';
import ListProduct from './component/ListProduct';
import Cart from './component/Cart';
import Notify from './component/Notify';

class App extends Component {
  render() {
    return (
      <>
      {/* TITLE : START */}
     <Title/>
      {/* TITLE : END */}
      <div className="row">
        {/* LIST PRODUCT : START */}
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <ListProduct/>
        </div>
        {/* LIST PRODUCT : END */}
        {/* CART : START */}
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <Cart/>
         <Notify/>
        </div>
        {/* CART : END */}
      </div>
    </>
    

    )
  }
}
export default App;
