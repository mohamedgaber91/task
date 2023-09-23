import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";

import "./Login.css";
import { Link } from "react-router-dom";
function EditPass() {
  const [passwordVisible1, setPasswordVisible1] = useState(false);
  const [passwordVisible2, setPasswordVisible2] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const togglePasswordVisibility = () => {
    setPasswordVisible1(!passwordVisible1);
  };
  const toggleConfirmVisibility = () => {
    setPasswordVisible2(!passwordVisible2);
  };
  const handleInputChange = (e) => {
    const value = e.target.value;
    setPhoneNumber(value);

    if (value.length > 5 && value != "") {
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
            <h3>تعيين الرقم السري</h3>
          </div>

          <div className="input-container">
            <FontAwesomeIcon
              icon={passwordVisible1 ? faEye : faEyeSlash}
              className="eye-icon"
              onClick={togglePasswordVisibility}
            />

            <input
              type={passwordVisible1 ? "text" : "password"}
              placeholder=" الرقم السري الجديد"
              className="input"
            />
            <FontAwesomeIcon icon={faLock} className="lock-icon" />
          </div>
          <div className="input-container">
            <FontAwesomeIcon
              icon={passwordVisible2 ? faEye : faEyeSlash}
              className="eye-icon"
              onClick={toggleConfirmVisibility}
            />

            <input
              type={passwordVisible2 ? "text" : "password"}
              placeholder=" تأكيد الرقم السري"
              className="input"
              onChange={handleInputChange}
            />
            <FontAwesomeIcon icon={faLock} className="lock-icon" />
          </div>

          <Link to="/" className="a-send" id="a-send">
            تحديث
          </Link>
        </div>
      </div>
    </>
  );
}

export default EditPass;
