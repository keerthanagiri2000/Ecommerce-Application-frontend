import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link, useNavigate, useLocation} from "react-router-dom";
import Header from "../Header";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";
import { register } from "../Redux/Actions/UserActions";

const Register = () => {
    window.scrollTo(0, 0);

    const history=useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const location = useLocation();

    const redirect = location.search ? location.search.split("=")[1]:"/" ;

    const userRegister = useSelector((state) => state.userRegister);
    const {error, loading, userInfo} = userRegister;

    useEffect(() => {
        if (userInfo) {
            history(redirect);
        }
    }, [userInfo, history, redirect]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(register(name, email, password));
    }
    return (
        <>
          <Header />
          <div className="container d-flex flex-column justify-content-center align-items-center">
              {error && <Message variant="alert-danger">{error}</Message>}
              {loading && <Loading />}
              <form className="Login col-md-8 col-lg-4 col-11" onSubmit={submitHandler}>
                  <input 
                    type="text" 
                    placeholder="Username"
                    value={name}
                    onChange={(e) => setName(e.target.value)} 
                  />
                  <input 
                    type="email" 
                    placeholder="Email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input 
                    type="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                  />

                  <button type="submit">Register</button>
                  <p>
                      <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
                          I Have Account <strong>Login</strong>
                      </Link>
                  </p>
              </form>
            </div>
        </>
    );
};

export default Register;