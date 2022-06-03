import axios from "axios";
import {API} from "./data.js";
import { CART_ADD_ITEM, 
    CART_PAYMENT_METHOD, 
    CART_REMOVE_ITEM, 
    CART_SHIPPING_ADDRESS, 
} 
    from "../Constants/CartConstants";

//ADD TO CART
export const addToCart = (id, qty) => async(dispatch, getState) => {
    const {data} = await axios.get(`${API}/api/products/${id}`);

    dispatch({
        type:CART_ADD_ITEM,
        payload:{
            product:data._id,
            name:data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty,
        },
    });

    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

//REMOVE PRODUCT FROM CART
export const removefromcart = (id) => (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id,
    });
localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

//SHIPPING ADDRESS
export const shippingAddressSave = (data) => (dispatch) => {
    dispatch({
        type: CART_SHIPPING_ADDRESS,
        payload: data,
    });
localStorage.setItem("shippingAddress", JSON.stringify(data));
};

//PAYMENT METHOD
export const paymentMethodSave = (data) => (dispatch) => {
    dispatch({
        type: CART_PAYMENT_METHOD,
        payload: data,
    });
localStorage.setItem("paymentMethod", JSON.stringify(data));
};
