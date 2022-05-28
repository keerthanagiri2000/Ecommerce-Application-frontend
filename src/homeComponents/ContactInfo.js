import React from "react";

const ContactInfo = () => {
    return (
        <div className="contactInfo container">
            <div className="row">
                <div className="col-12 col-md-4 contact-Box">
                    <div className="box-info">
                        <div className="info-image">
                          <i class="fa fa-envelope"></i>
                        </div>
                        <h5>E-Mail Us 24x7</h5>
                        <p>email@email.com</p>
                    </div>
                </div>
                <div className="col-12 col-md-4 contact-Box">
                    <div className="box-info">
                        <div className="info-image">
                          <i class="fa fa-phone"></i>
                        </div>
                        <h5>Call Us</h5>
                        <p>0230 000 127</p>
                    </div>
                </div>
                <div className="col-12 col-md-4 contact-Box">
                    <div className="box-info">
                        <div className="info-image">
                          <i class="fa fa-map-marker"></i>
                        </div>
                        <h5>Headquarter</h5>
                        <p>india</p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default ContactInfo;