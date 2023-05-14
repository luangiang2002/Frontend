//combine reducer
import {combineReducers} from 'redux'
import listProduct from './listProduct'
import notify from './notify';
import cart from './cart';
const reducer =combineReducers({
    listProduct:listProduct,
    notify:notify,
    cart:cart
})
export default reducer;