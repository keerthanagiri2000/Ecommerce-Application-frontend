import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import Header from "../Header";
import { paymentMethodSave } from "../Redux/Actions/CartActions";

const Payment = () => {
    window.scrollTo(0, 0);
     
    const history=useNavigate();
    

    const cart = useSelector((state) => state.cart);
    const {shippingAddress} =cart;
    
    if(!shippingAddress){
        history("/shipping");
    }
    const [paymentMethod, setPaymentMethod] = useState("PayPal");
    
    const dispatch=useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(paymentMethodSave(paymentMethod));
        history("/placeorder");
    };

    return(
        <>
          <Header />
          <div className="container d-flex justify-content-center align-items-center login-center">
             <form
             className="Login2 col-md-8 col-lg-4 col-11"
             onSubmit={submitHandler}
             >
                 <h6>SELECT PAYMENT METHOD</h6>
                 <div className="payment-container">
                     <div className="radio-container">
                         <input  
                           className="form-check-input" 
                           type="radio" 
                           value={paymentMethod} 
                           onChange={(e) => setPaymentMethod(e.target.value)}
                         />
                         <label>Credit Card</label>
                     </div>
                 </div>
                 <button type="submit" onSubmit={submitHandler}>Continue</button>
             </form>
          </div>
        </>

    );
};

export default Payment;