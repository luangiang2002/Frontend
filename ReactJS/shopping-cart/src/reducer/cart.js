import { BUY_ITEM, REMOVE_ITEM, UPDATE_ITEM } from '../contant/actionType'
import { LOCAL_STORE_NAME } from '../contant/localStorege'

let initialState = []

const shoppingCartlocal = JSON.parse(localStorage.getItem(LOCAL_STORE_NAME));
initialState = (shoppingCartlocal !== null && shoppingCartlocal.length > 0) ? shoppingCartlocal : [];
const getIndexByProduct = (list, product) => {
    for (let index = 0; index < list.length; index++) {
        if (list[index].product.productId === product.productId)
            return index
    }
    return -1
}
const cart = (state = initialState, action) => {
    let { product, quantity } = action;
    let item = { product, quantity }
    let index = -1
    switch (action.type) {
        case BUY_ITEM:
            if (state.length === 0) {
                state.push(item)
            }
            else {
                index = getIndexByProduct(state, product);
                if (index >= 0) {
                    state[index].quantity = parseInt(state[index].quantity) + parseInt(quantity)
                }
                else {
                    state.push(item)
                }
            }
            localStorage.setItem(LOCAL_STORE_NAME, JSON.stringify(state))
            return [...state]

        case UPDATE_ITEM:
            index=getIndexByProduct(state,product);
            if(index>=0){
                state[index].quantity=parseInt(item.quantity)
            }
            localStorage.setItem(LOCAL_STORE_NAME, JSON.stringify(state))
            return [...state]
            
            
            case REMOVE_ITEM:
                
                index=getIndexByProduct(state,product);
                if(index>=0){
                    state.splice(index,1)
                }
                localStorage.setItem(LOCAL_STORE_NAME, JSON.stringify(state))
            return [...state]

        default:
            return state
    }
}

export default cart