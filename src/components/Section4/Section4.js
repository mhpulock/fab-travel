import React from "react";
import "./Section4.css";
import support from "../../image/support.png";
import payment from "../../image/payment.png";
import returns from "../../image/returns.png";
import shipping from "../../image/shipping.png";

const Section4 = () => {
  return (
    <div className="Section4_body">
      <div className="container d-flex justify-content-center">
        <div className="custom_row_section4">
          <div className="colum_style p-3">
            <img src={support} alt="support" />
            <h5>CUSTOMER SUPPORT</h5>
            <h6>Need Assistence?</h6>
            <p>
              We have a 24 hour customer support team ready to help you. You can
              contact the support team for any travel related needs for any time
            </p>
          </div>
          <div className="colum_style p-3">
            <img src={payment} alt="payment" />
            <h5>SECURED PAYMENT</h5>
            <h6>Safe & Fast</h6>
            <p>
              Considering the convenience and security of the customers, we are
              offering the most secure payment facility
            </p>
          </div>
          <div className="colum_style p-3">
            <img src={returns} alt="returns" />
            <h5>FREE RETURNS</h5>
            <h6>Easy & Free</h6>
            <p>
              In case of any difficulty in travel or cancellation of booking
              100% money back conditionally
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
