import {combineReducers} from 'redux'
import navigatorReducer from './navigatorReducer'
// import { connect } from 'react-redux'
import reducer from "./reducer"

export default combineReducers({
    reducer,
    navigatorReducer
})