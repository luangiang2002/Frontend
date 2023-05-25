import React, { Component } from 'react'
import Product from './Product'
import { connect } from 'react-redux'

class ListProduct extends Component {
  render() {
    let elementProduct=this.props.product.map((item,index)=>{
      return <Product key={index} renderProduct={item} stt={index+1}/>
    })
    return (
        <div className="panel panel-primary">
        <div className="panel-heading">
          <h1 className="panel-title">List Products</h1>
        </div>
        <div className="panel-body" id="list-product">
          {/* PRODUCT : START */}
        {/* <Product/>
        <Product/>
        <Product/> */}
        {elementProduct}
          {/* PRODUCT : END */}
        </div>
      </div>
    )
  }
}
const mapStateToProps=(state)=>{
  return{
      product:state.listProduct
  }
}
export default connect(mapStateToProps,null) (ListProduct) ;
