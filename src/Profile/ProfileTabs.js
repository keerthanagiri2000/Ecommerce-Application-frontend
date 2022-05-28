import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";
import Toast from "../LoadingError/Toast";
import { updateUserProfile } from "../Redux/Actions/UserActions";


const ProfileTabs = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmedPassword]= useState("");
    const toastId = React.useRef(null);

    const Toastobjects = {
        pauseOnFocusLoss: false,
        draggable: false,
        pauseOnHover: false,
        autoClose: 2000
    }
    const dispatch = useDispatch();

    const userDetails = useSelector((state) => state.userDetails);
    const { loading, error, user} = userDetails;

    const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
    const { loading: updateLoading} = userUpdateProfile;

    useEffect(() =>{
      if(user) {
          setName (user.name);
          setEmail (user.email);
      }
    }, [dispatch, user]);

    const submitHandler = (e) => {
        e.preventDefault();
        //passowrd match
        if(password !== confirmPassword){
            if(!toast.isActive(toastId.current)){
              toastId.current = toast.error("Password does not match", Toastobjects)
            }
        }
        else{
            //update profile
            dispatch(updateUserProfile({id:user._id,name,email,password}))
            if(!toast.isActive(toastId.current)){
                toastId.current = toast.success("Profile updated", Toastobjects)
              }
        }
    }


    return (
        <>
          <Toast />
          {error && <Message variant="alert-danger">{error}</Message>}
          {loading && <Loading /> }
          {updateLoading && <Loading /> }
          <form className="row form-container" onSubmit={submitHandler}>
              <div className="col-md-6">
                  <div className="form">
                    <label for="account-fn">UserName</label>
                    <input 
                      className="form-control" 
                      type="text" 
                      required 
                      value={name}
                      onChange={(e) => setName(e.target.value)} />
                  </div>
              </div>

              <div className="col-md-6">
                  <div className="form">
                      <label for="account-email">E-mail Address</label>
                      <input 
                        className="form-control" 
                        type="email" 
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                      />
                  </div>
                </div>

                <div className="col-md-6">
                   <div className="form">
                       <label>New Password</label>
                       <input 
                         className="form-control" 
                         type="password" 
                         value={password}
                         onChange={(e) =>setPassword(e.target.value)} 
                        />
                   </div>
                </div>

                <div className="col-md-6">
                   <div className="form">
                       <label>Confirm Password</label>
                       <input 
                         className="form-control" 
                         type="password" 
                         value={confirmPassword}
                         onChange={(e) => setConfirmedPassword(e.target.value)}
                        />
                   </div>
                </div>
                <button type="submit">Update Profile</button>
          </form>
        </>
    );
};

export default ProfileTabs;