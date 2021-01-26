import {createStore,combineReducers, applyMiddleware, compose} from 'redux';
import {productListReducer,productDetailsReducer} from './reducers/productReducers';
import thunk from 'redux-thunk';
import Cookie  from 'js-cookie';
import {cartReducer} from './reducers/cartReducers'
import { userSigninReducer,userRegisterReducer } from './reducers/userReducers';


const cartItems= Cookie.getJSON("cartItems")||[];
const userInfo = Cookie.getJSON('userInfo') || null;
const initialState={cart:{cartItems},userSignin:{userInfo}};
const reducer=combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer,  //reducer is a function that gets an state and action and return a new state based on that action
    cart: cartReducer,
    userSignin: userSigninReducer ,
    userRegister: userRegisterReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;