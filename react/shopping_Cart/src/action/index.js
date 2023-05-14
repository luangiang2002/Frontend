import * as types from '../contants/actionTTypes'

//tạo action cho chức năng hiển thị thông tin sp
export const act_list_product=()=>{
    return{
        type:types.LIST_PRODUCT

    }
}
// / action cho chức năng mua hàng 
export const act_buy_item=(product,quantity)=>{
    return{
        type:types.BUY_ITEM,
        product,
        quantity
    }
}
// action cho chức nawg cập nhật giỏ hàfng
export const act_update_item=(product,quantity)=>{
    return{
        type:types.UPDATE_ITEM,
        product,
        quantity
    }
}
//  action cho  chức  nawg xóa 
export const act_remove_item=(product)=>{
    return{
        type:types.REMOVE_ITEM,
        product,
    }
}
//action cho chức năng thông báo
export const act_change_notify=(content)=>{
    return{
        type:types.CHANGE_NOTIFY,
        content
    }
}