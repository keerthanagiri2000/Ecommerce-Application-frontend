import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom";
import { logout } from "./Redux/Actions/UserActions";

const Header = () => {

    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const {cartItems} = cart;

    const userLogin = useSelector((state) => state.userLogin);
    const {error, loading, userInfo} = userLogin;

    const logoutHandler = () => {
        dispatch( logout());
    }

    return (
        <div>
            {/*header */}
            <div className="header">
            <div className="header-content-top">
        <div className="content">
          <span>
            <i className="fa fa-phone-square"></i>(00)0000-0000
          </span>
          <span>
            <i className="fa fa-envelope-square"></i>email@email.com
          </span>
        </div>
      </div>
              <div className="container">
               {/* mobile header */}
               <div className="mobile-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-6 d-flex align-items-center">
                                <Link className="navbar-brand" to="/">
                                  <img alt="logo" src="https://naldzgraphics.net/wp-content/uploads/2012/01/11-Furnicom.jpg"/>
                                </Link>
                            </div>
                            <div className="col-6 d-flex align-items-center justify-content-end Login-Register">
                                {
                                    userInfo ? (
                                        <div className="btn-group">
                                        <button
                                          type="button"
                                          className="name-button dropdown-toggle"
                                          data-toggle="dropdown"
                                          aria-haspopup="true"
                                          aria-expanded="false"
                                        >
                                            <i class="fa fa-user-circle" aria-hidden="true"></i>
                                        </button>
                                        <div className="dropdown-menu">
                                           <Link className="dropdown-item" to="/profile"
                                               onClick={logoutHandler}
                                           >
                                               Profile
                                           </Link>
                                           <Link className="dropdown-item" to="#">
                                               Logout
                                           </Link>
                                        </div>
                                        </div>
                                    )
                                    :
                                    (
                                        <div className="btn-group">
                                        <button
                                          type="button"
                                          className="name-button dropdown-toggle"
                                          data-toggle="dropdown"
                                          aria-haspopup="true"
                                          aria-expanded="false"
                                        >
                                            <i class="fa fa-user-circle" aria-hidden="true"></i>
                                        </button>
                                        <div className="dropdown-menu">
                                           <Link className="dropdown-item" to="/login">
                                               Login
                                           </Link>
                                           <Link className="dropdown-item" to="/register">
                                              Register
                                           </Link>
                                        </div>
                                        </div> 
                                    )
                                }
                                
                                <Link to="/cart" className="cart-mobile-icon">
                                   <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                   <span className="badge">{cartItems.length}</span>
                                </Link>
                            </div>
                            <div className="col-12 d-flex align-items-center">
                               <form className="input-group">
                                  <input 
                                    type="search"
                                    className="form-control rounded search"
                                    placeholder="Search"
                                    />
                                    <button type="submit" className="search-button">
                                       Search
                                    </button>
                               </form>
                            </div>
                        </div>
                    </div>
               </div>

               {/*pc header*/}
               <div className="pc-header">
                   <div className="row">
                       <div className="col-md-3 col-4 d-flex align-items-center">
                           <Link className="navbar-brand" to="/">
                               <img alt="logo" src="https://i.pinimg.com/600x315/19/8f/c8/198fc8a2981818511dd4c313c2176ff8.jpg"/>
                           </Link>
                           
                       </div>
                       <div className="col-md-6 col-8 d-flex align-items-center">
                           <form className="input-group">
                              <input 
                                 type="search"
                                 className="form-control rounded search"
                                 placeholder="Search"
                              />
                              <button type="submit" className="search-button">
                                 search
                              </button>
                           </form>
                       </div>
                       <div className="col-md-3 d-flex align-items-center justify-content-end Login-Register">
                           {
                               userInfo ? (
                                <div className="btn-group">
                                <button
                                  type="button"
                                  className="name-button dropdown-toggle"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                 >
                                   Hi, {userInfo.name}
                                  </button>
                                  <div className="dropdown-menu">
                                      <Link className="dropdown-item" to="/profile">
                                          Profile
                                      </Link>
                                      <Link className="dropdown-item" to="#"
                                       onClick={logoutHandler}
                                      >
                                          Logout
                                      </Link>
                                  </div>
                                </div> 
                               )
                               :
                               (   <>
                                   
                                   <Link to="/login">Login</Link>
                                   </>
                               )
                            }
                            
                            {/*<Link to="/register">Register</Link>
                            <Link to="/login">Login</Link>*/}
                        
                            <Link to="/cart" className="header-shopcart">
                            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                            <span className="badge">{cartItems.length}</span>
                            </Link>
                       </div>
                   </div>
                </div>
               </div>
            </div>
        </div>
    );
};

export default Header;