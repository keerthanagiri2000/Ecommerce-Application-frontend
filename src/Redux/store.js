import {applyMiddleware} from "redux";
import { configureStore,combineReducers } from '@reduxjs/toolkit';
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { productDetailsReducer,productListReducer } from "./Reducers/ProductReducers";
import { cartReducer } from "./Reducers/CartReducers";
import { userDetailsReducer, userLoginReducer, userRegisterReducer, userUpdateProfileReducer } from "./Reducers/UserReducers";
import { orderCreateReducer, orderDetailsReducer } from "./Reducers/OrderReducers";


const middleware = [thunk];

const cartItemsFromLocalStorage = localStorage.getItem("cartItems") ? 
JSON.parse(JSON.stringify(localStorage.getItem("cartItems")) )
: [];

//login
const userInfoFromLocalStorage = localStorage.getItem("userInfo") ? 
JSON.parse(JSON.stringify(localStorage.getItem("userInfo")) )
: null;

//shippingAddress
const shippingAddressFromLocalStorage = localStorage.getItem("shippingAddress") ? 
JSON.parse(JSON.stringify(localStorage.getItem("shippingAddress")) )
: {};

const store = configureStore({
    reducer: {
        productList: productListReducer,
        productDetails: productDetailsReducer,
        cart: cartReducer,
        userLogin: userLoginReducer,
        userRegister: userRegisterReducer,
        userDetails: userDetailsReducer,
        userUpdateProfile: userUpdateProfileReducer,
        orderCreate: orderCreateReducer,
        orderDetails: orderDetailsReducer,
    },
    initialState:{
        cart :{
            cartItems: cartItemsFromLocalStorage,
            shippingAddress: shippingAddressFromLocalStorage,
        },
        userLogin: {userInfo: userInfoFromLocalStorage},
    },
    
});
  

export default store;

