import React, { Component } from 'react'
import { MSG_BUY_SUCCESS } from '../contant/messages';
import { act_buy_item, act_change_notify } from '../action';
import { connect } from 'react-redux';
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    }
  }
handleBuy=(product)=>{
  this.props.buyItem(product,this.state.quantity)
  this.props.changeNotify(MSG_BUY_SUCCESS)
}
  render() {
    let { renderProduct } = this.props
    let elemetBuy = ""
    if (renderProduct.quantity > 0) {
      elemetBuy =
        <>
          <input
            name="quantity-product-1"
            type="number"
            value={this.state.quantity}
            onChange={(ev) => this.setState({ quantity: ev.target.value })}
          />
          <button data-product={1} className="btn btn-success"
            onClick={() => this.handleBuy(renderProduct)}
          >
            Mua hàng
          </button>
          <a data-product={1} href="/#" className="price">
            {" "}
            {renderProduct.price} USD{" "}
          </a>
        </>
    }
    else {
      elemetBuy = <span className='price'>{renderProduct.price}USD</span>
    }
    return (
      <div className="media product">
        <div className="media-left">
          <a href="/#">
            <img
              className="media-object"
              src={`images/${renderProduct.image}`}
              alt="charmander"
            />
          </a>
        </div>
        <div className="media-body">
          <h4 className="media-heading">{renderProduct.productName}</h4>
          <p>
            {renderProduct.descriptions}
          </p>
          {elemetBuy}
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyItem: (product, quantity) => {
      dispatch(act_buy_item(product, quantity))
    },
    //bắn action làm thay đổi thông báo
    changeNotify: (content) => {
      dispatch(act_change_notify(content))
    }
  }
}

export default connect(null, mapDispatchToProps)(Product);