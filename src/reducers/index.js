import { combineReducers } from 'redux'
import {GET_DIAMONDS} from '../actions/index'
import { reducer as formReducer } from 'redux-form'

function diamondsReducer (state = [], action) {
    switch(action.type) {
        case GET_DIAMONDS:
            return [...state, action.payload ];
        default:
            return state;
    }
}


const rootReducer = combineReducers({
    diamondsList:diamondsReducer,
    form: formReducer
});
export default rootReducer