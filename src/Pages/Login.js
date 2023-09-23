// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faUser,
//   faLock,
//   faEye,
//   faEyeSlash,
// } from "@fortawesome/free-solid-svg-icons";

// import "./Login.css";
// import logo from "../imges/logo-black-121.png";
// import { Link } from "react-router-dom";
// function Login() {
//   const [passwordVisible, setPasswordVisible] = useState(false);

//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   return (
//     <>
//       <div className="login-container">
//         <div className="form">
//           <div className="logo-container">
//             <img src={logo} />
//           </div>
//           <div className="input-container">
//             <input type="text" placeholder="اسم المستخدم" className="input" />
//             <FontAwesomeIcon icon={faUser} className="user-icon" />
//           </div>
//           <div className="input-container">
//             <FontAwesomeIcon
//               icon={passwordVisible ? faEye : faEyeSlash}
//               className="eye-icon"
//               onClick={togglePasswordVisibility}
//             />

//             <input
//               type={passwordVisible ? "text" : "password"}
//               placeholder="الرقم السري"
//               className="input"
//             />
//             <FontAwesomeIcon icon={faLock} className="lock-icon" />
//           </div>
//           <button className="login-button">تسجيل الدخول</button>
//           <Link to="/forgetpass">
//             <button className="forgot-button">هل نسيت الرقم السري ؟</button>
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Login;
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";

import "./Login.css";
import logo from "../imges/logo-black-121.png";
import { Link } from "react-router-dom";

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <div className="login-container">
        <div className="form">
          <div className="logo-container">
            <img src={logo} alt="Logo" />
          </div>
          <div className="input-container">
             <div></div>
            <input type="text" placeholder="اسم المستخدم" className="input" />
            <FontAwesomeIcon icon={faUser} className="user-icon" />
          </div>
          <div className="input-container">
            <FontAwesomeIcon
              icon={passwordVisible ? faEye : faEyeSlash}
              className="eye-icon"
              onClick={togglePasswordVisibility}
            />

            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="الرقم السري"
              className="input"
            />
            <FontAwesomeIcon icon={faLock} className="lock-icon" />
          </div>
          <button className="login-button">تسجيل الدخول</button>
          <Link to="/forgetpass">
            <button className="forgot-button">هل نسيت الرقم السري ؟</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;

