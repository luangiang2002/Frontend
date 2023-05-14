import React, { Component } from 'react'
import Title from './componets/Title';
import ListProduct from './componets/ListProduct';
import Cart from './componets/Cart';

class App extends Component {
  render() {
    return (
      <div className="container">
        {/* TITLE : START */}
      <Title></Title>
        {/* TITLE : END */}
        <div className="row">
          {/* LIST PRODUCT : START */}
          <ListProduct></ListProduct>
          {/* LIST PRODUCT : END */}
          {/* CART : START */}
         <Cart></Cart>
          {/* CART : END */}
        </div>
      </div>
    )
  }
}
export default App;
