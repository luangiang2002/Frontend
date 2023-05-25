import * as mess from '../contant/messages'
import {CHANGE_NOTIFY} from '../contant/actionType'
const initialState=mess.MSG_INTRO

const notify=(state=initialState,action)=>{
    switch (action.type) {
        case CHANGE_NOTIFY:
            state=action.content;
           return state
    
        default:
            return state
    }
}
export default notify