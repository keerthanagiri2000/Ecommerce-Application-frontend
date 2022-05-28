import React, { useEffect } from "react";
import Header from "../Header";
import ProfileTabs from "../Profile/ProfileTabs";
import Orders from "../Profile/Orders";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../Redux/Actions/UserActions";
import moment from "moment";

const Profile = () => {
    window.scrollTo(0, 0);

    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const {userInfo} = userLogin;

    useEffect(() => {
      dispatch(getUserDetails("profile"));
    }, [dispatch]);
    return (
        <>
         <Header />
         <div className="container mt-lg-5 mt-3">
             <div className="row align-items-start">
                 <div className="col-lg-4 p-0 shadow">
                     <div className="author-card pb-0 pb-md-3">
                         <div className="author-card-cover"></div>
                         <div className="author-card-profile row">
                            <div className="author-card-avatar col-md-5">
                               <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="" />
                            </div>
                            <div className="author-card-details col-md-7">
                                <h5 className="author-card-name mb-2">
                                    <strong>{userInfo.name}</strong>
                                </h5>
                                <span className="author-card-position">
                                    <>Joined {moment(userInfo.createdAt).format('LL')}</>
                                </span>
                            </div>
                         </div>
                        </div>
                        <div className="wizard pt-3">
                           <div className="d-flex align-items-start">
                              <div className="nav align-items-start flex-column col-12 nav-pills me-3"
                                   id="v-pills-tab"
                                   role="tablist"
                                   aria-orientation="vertical"
                                >
                                  
                                  <button
                                    className="nav-link active"
                                    id="v-pills-home-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#v-pills-home"
                                    type="button"
                                    role="tab"
                                    aria-controls="v-pills-home"
                                   >
                                    Profile Settings
                                  </button>
  
                                  
                                  <button
                                    className="nav-link d-flex justify-content-between"
                                    id="v-pills-profile-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#v-pills=profile"
                                    type="button"
                                    role="tab"
                                    aria-controls="v-pills-profile"
                                    /*aria-selected="false"*/
                                  > 
                                   
                                    Orders List
                                    <span className="badge2">3</span>
                                  </button>
                                  
                                </div>
                           </div>
                        </div>
                 </div>

                    <div class="tab-content col-lg-8 pb-5 pt-lg-0 pt-3" id="v-pills-tabContent">
                      <div className="tab-pane fade active show" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                        <div>
                            <div className="Toastify"></div>
                            <div className="Toastify"></div>
                        </div>
                        <ProfileTabs />
                      </div> 

                      <div className="tab-pane fade active show" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                      <div className="d-flex justify-content-center align-items-center">
                          <div className="col-12 alert alert-info text-center mt-3">
                              No Orders
                              <a className="btn btn-success mx-2 px-3 py-2" href="/" style={{fontSize:"12px"}}>START SHOPPING</a>

                          </div>
               
                      </div>
                      </div> 
                      
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;





//{userInfo.name}