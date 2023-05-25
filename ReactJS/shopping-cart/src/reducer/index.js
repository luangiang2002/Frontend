import {combineReducers} from 'redux'
import listProduct from './listProduct'
import cart from './cart'
import notify from './notify'
const reducer=combineReducers({
    listProduct:listProduct,
    cart:cart,
    notify:notify
})
export default reducer