import React from "react";
import {Link} from "react-router-dom";
import Header from "../Header";

const NotFound = () => {
    return (
        <>
          <Header />
          <div className="container my-5">
              <div className="row justify-content-center align-items-center">
                  <h4 className="text-center mb-2 mb-sm-5">Page Not Found</h4>
                  <img 
                    style={{ width: "100%", height:"300px",objectFit:"contain"}}
                    src="https://www.makewebeasy.com/th/blog/wp-content/uploads/2019/12/cover.png"
                    alt="Not-Found" 
                  />
                  <button className="col-md-3 col-sm-6 col-12 btn btn-success mt-5">
                     <Link to="/" className="text-white text-decoration-none">
                         Home Page
                     </Link>
                  </button>
                </div>
            </div>
        </>
    );
};

export default NotFound;