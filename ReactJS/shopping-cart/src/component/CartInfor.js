import React, { Component } from 'react'

class CartInfor extends Component {
  render() {
    let { renderCart } = this.props;
    let elementCartInfor = <tr><td colSpan={6}>
      Chưa có sản phẩm nào trong giỏ hàng.
    </td></tr>
    if (renderCart !== null && renderCart.length > 0) {
      let Tongtrigia = 0
      for (let i = 0; i < renderCart.length; i++) {
        Tongtrigia += parseFloat(renderCart[i].product.price) * parseFloat(renderCart[i].quantity)
      }

      elementCartInfor = (
        <tr>
          <td colSpan={4}>
            There are <b>{renderCart.length}</b> items in your shopping cart.
          </td>
          <td colSpan={2} className="total-price text-left">
            {Tongtrigia} USD
          </td>
        </tr>
      )
    }
    return (
      <>
        {/* <tr>
          <th colSpan={6}>Empty product in your cart</th>
        </tr> */}
        {elementCartInfor}
      </>
    )
  }
}
export default CartInfor
