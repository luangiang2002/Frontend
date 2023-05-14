import React, { Component } from 'react'

class CartInfo extends Component {
  render() {
    let { renderCart } = this.props;
    console.log("cart :",renderCart);
    let elementCartInfor = <tr><td colSpan={6}>
      Chưa có sản phẩm nào trong giỏ hàng.
    </td></tr>
    if (renderCart !== null && renderCart.length > 0) {
      // tính tổng giá
      let tongatriGia = 0;
      for (let i = 0; i < renderCart.length; i++) {
        tongatriGia += parseFloat(renderCart[i].product.price)*parseFloat(renderCart[i].quantity);

      }
      elementCartInfor = (
        <tr>
          <td colSpan={4}>
            There are <b>{renderCart.length}</b> items in your shopping cart.
          </td>
          <td colSpan={2} className="total-price text-left">
            {tongatriGia} USD
          </td>
        </tr>
      )
    }
    return (
      <>
        <tr>
          <th colSpan={6}>Empty product in your cart</th>
        </tr>
        {/* <tr>
          <td colSpan={4}>
            There are <b>5</b> items in your shopping cart.
          </td>
          <td colSpan={2} className="total-price text-left">
            12 USD
          </td>
        </tr> */}
        {elementCartInfor}
      </>
    )
  }
}
export default CartInfo;
