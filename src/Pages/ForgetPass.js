import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

import "./Login.css";
import { Link } from "react-router-dom";

function ForgetPass() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setPhoneNumber(value);

    if (value.length > 11) {
      document.getElementById("a-send").classList.add("active-btn");
    } else {
      document.getElementById("a-send").classList.remove("active-btn");
    }
  };

  return (
    <>
      <div className="login-container">
        <div className="form">
          <div className="logo-container">
            <h3>إرسال كود</h3>
          </div>

          <div className="input-container">
            <h3 className="h3-number">+20</h3>
            <input
              type="text"
              placeholder=" أدخل رقم هاتفك"
              className="input"
              id="mobile-number"
              value={phoneNumber}
              onChange={handleInputChange}
            />
            <FontAwesomeIcon icon={faPhoneAlt} className="lock-icon" />
          </div>
          <Link to="/confirmcode" className="a-send" id="a-send">
            إرسال
          </Link>
        </div>
      </div>
    </>
  );
}

export default ForgetPass;
