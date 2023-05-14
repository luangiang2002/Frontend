import { BUY_ITEM, REMOVE_ITEM, UPDATE_ITEM } from "../contants/actionTTypes";
import { LOCAL_STOTRGE_NAME } from "../contants/localStoregeName";


// chưa mua hàng
let initialState = [];
// đã mua hàng --> get localStorage
const shoppingCartLocal = JSON.parse(localStorage.getItem(LOCAL_STOTRGE_NAME));
initialState = (shoppingCartLocal != null && shoppingCartLocal.length >= 0) ? shoppingCartLocal : [];
//hàm kiểm tra xem trong sp đã có sp hay chưa
const getIndexByProduct = (list, product) => {
    for (let index = 0; index < list.length; index++) {
        if (list[index].product.productId === product.productId)
            return index; // sp đã tồn tại trong giỏ hàng
    }
    //nếu sp ko tìm thấy trong giỏ hàng
    return -1;
}
// reducer -> cart
const cart = (state = initialState, action) => {
    //lấy sp, số lượng từ action
    let { product, quantity } = action;
    let item = { product, quantity };
    let index = -1;
    switch (action.type) {
        case BUY_ITEM:
            // khách hàng chưa mua hàng -- giở hàng của khách chưa có sản phảm
            // -> push vào giở hàng
            if (state.length === 0) {
                state.push(item);
            }
            else {
                // khách hàng đã mua hàng -- giỏ hàng của khách đã tồn tại
                index = getIndexByProduct(state, product);
                if (index >= 0) {
                    //nếu sp đã có trong giỏ hàng thì tăng số lượng
                    state[index].quantity = parseInt(state[index].quantity) + parseInt(quantity)
                }
                else {
                    // nếu sp chưa có trong giỏ hàng ==>  thêm sp vào giỏ hàng
                    state.push(item);
                }
            }
            // cập nhật localStorage
            localStorage.setItem(LOCAL_STOTRGE_NAME, JSON.stringify(state));
            return [...state];
        // cập nhật giỏ hàng
        case UPDATE_ITEM:
            // tìm kiếm sp trong giỏ hàng để cập nhật
            index = getIndexByProduct(state, product);
            if (index >= 0) {
                state[index].quantity = parseInt(item.quantity);
            }
            // cập nhật localStorage
            localStorage.setItem(LOCAL_STOTRGE_NAME, JSON.stringify(state));

            return [...state];
            // xóa sp trong giỏ hàng
        case REMOVE_ITEM:
            // tìm kiếm sp cẫn xóa
            index=getIndexByProduct(state,product)
            if(index>=0){
                state.splice(index,1);
            }
            // cập nhật localStorage
            localStorage.setItem(LOCAL_STOTRGE_NAME, JSON.stringify(state));
            return [...state];
        default:
            return state;
    }
}
export default cart;