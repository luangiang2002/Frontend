import {createStore} from 'redux'
import reducer from '../reducer'
const storeApp=createStore(reducer)
export default storeApp;