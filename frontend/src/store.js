import {createStore,combineReducers, applyMiddleware, compose} from 'redux';
import {productListReducer} from './reducers/productReducers';
import thunk from 'redux-thunk';

const initialState={};
const reducer=combineReducers({
    productList:productListReducer,  //reducer is a function that gets an state and action and return a new state based on that action
})

const composeEnhancer=window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
const store=createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)));
export default store;