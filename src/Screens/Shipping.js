import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import Header from "../Header";
import { shippingAddressSave } from "../Redux/Actions/CartActions";

const Shipping = () => {
    window.scrollTo(0, 0);
    
    const history=useNavigate();
    

    const cart = useSelector((state) => state.cart);
    const {shippingAddress} =cart;

    const [address, setAddress] = useState(shippingAddress.address);
    const [ city, setCity] = useState(shippingAddress.city);
    const [postalCode, setPostalCode]=useState(shippingAddress.postalCode);
    const [country, setCountry] = useState(shippingAddress.country);
    
    const dispatch=useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch (shippingAddressSave({address,city,postalCode,country}));
        history("/payment");
    };

    return (
       <>
         <Header />
         <div className="container d-flex justify-content align-items-center login-center">
           <form 
            className="Login col-md-8 col-lg-4 col-11"
            onSubmit={submitHandler}
           >
             <h6>DELIVERY ADDRESS</h6>
             <input 
               type="text" 
               placeholder="Enter address"
               value={address}
               required
               onChange={(e) => setAddress(e.target.value)} 
              />
             <input 
               type="text" 
               placeholder="Enter city"
               value={city}
               required
               onChange={(e) => setCity(e.target.value)}
              />
             <input 
               type="text" 
               placeholder="Enter postal code"
               value={postalCode}
               required
               onChange={(e) => setPostalCode(e.target.value)}
               />
             <input 
               type="text" 
               placeholder="Enter country"
               value={country}
               required
               onChange={(e) => setCountry(e.target.value)}
               />
             <button type="submit" onClick={submitHandler}>Continue</button>
           </form>
         </div>
       </> 
    );
};

export default Shipping;