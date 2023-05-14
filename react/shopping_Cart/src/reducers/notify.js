import * as mess from '../contants/messages'
import {CHANGE_NOTIFY} from '../contants/actionTTypes'
const initialState=mess.MSG_INTRO
//tạo reducer -> notify

const notify =(state=initialState,action)=>{
    switch(action.type){
        case CHANGE_NOTIFY:
            state=action.content;
            return state;
            default:
                return state;
    }
}
export default notify;