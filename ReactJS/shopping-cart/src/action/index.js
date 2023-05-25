import *as types from '../contant/actionType'
export const act_list_product=()=>{
    return {
        type:types.LIST_PRODUCT
    }
}
export const act_buy_item=(product,quantity)=>{
    return{
        type:types.BUY_ITEM,
        product,
        quantity
    }
}
export const act_update_item=(product,quantity)=>{
    return{
        type:types.UPDATE_ITEM,
        product,
        quantity
    }
}
export const act_remove_item=(product)=>{
    return{
        type:types.REMOVE_ITEM,
        product
    }
}
export const act_change_notify=(content)=>{
    return{
        type:types.CHANGE_NOTIFY,
        content
    }
}