import React, { Component } from 'react'
import CartItem from './CartItem'
import CartInfo from './CartInfo'
import Notify from './Notify'
import { connect } from 'react-redux'

 class Cart extends Component {
  render() {
    // lấy dữ liệu từ props
    let {carts}=this.props
    console.log("cart: ", carts);
    let elementCartItem=carts.map((item,index)=>{
      return <CartItem key={index} renderCart={item} stt={index+1}></CartItem>
    })
    return (
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <div className="panel panel-danger">
          <div className="panel-heading">
            <h1 className="panel-title">Your Cart</h1>
          </div>
          <div className="panel-body">
            <table className="table">
              <thead>
                <tr>
                  <th width="4%">#</th>
                  <th>Pokemon</th>
                  <th width="15%">Price</th>
                  <th width="4%">Quantity</th>
                  <th width="20%">Subtotal</th>
                  <th width="25%">Action</th>
                </tr>
              </thead>
              <tbody id="my-cart-body">
                {/* CART item */}
               {/* <CartItem></CartItem> */}
               {elementCartItem}
              </tbody>
              <tfoot id="my-cart-footer">
                {/* CART info */}
               <CartInfo renderCart={carts}></CartInfo>
              </tfoot>
            </table>
          </div>
        </div>
        {/* Notify  */}
       <Notify></Notify>
      </div>
    )
  }
}
// map state từ store đến component Cart thông qua thuộc tính cart
const mapStateToProps=(state)=>{
  return{
    carts:state.cart,
  }
}
export default connect(mapStateToProps,null) (Cart);
