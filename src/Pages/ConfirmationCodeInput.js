import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { faSync } from "@fortawesome/free-solid-svg-icons";
import "./ConfirmationCodeInput.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function ConfirmationCodeInput() {
  const [code, setCode] = useState(["", "", "", ""]);
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleInputChange = (index, value) => {
    if (/^[0-9]$/.test(value) && index >= 0 && index < 4) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
      if (index < 3) {
        document.getElementById("a-confirm").classList.remove("active-btn");
        setActiveIndex(index + 1);
        if (inputRefs[index + 1].current) {
          inputRefs[index + 1].current.focus();
        }
      } else {
        document.getElementById("a-confirm").classList.add("active-btn");
      }
    }
  };

  const handleInputFocus = (index) => {
    setActiveIndex(index);
  };

  const handleInputKeyDown = (index, event) => {
    if (event.key === "Backspace") {
      document.getElementById("a-confirm").classList.remove("active-btn");
      document.getElementById("a-confirm").style.cursor = "no-drop";
      if (code[index] === "" && index > 0) {
        setActiveIndex(index - 1);
        if (inputRefs[index - 1].current) {
          inputRefs[index - 1].current.focus();
        }
      } else {
        const newCode = [...code];
        newCode[index] = "";
        setCode(newCode);
        if (index > 0) {
          setActiveIndex(index - 1);
          if (inputRefs[index - 1].current) {
            inputRefs[index - 1].current.focus();
          }
        }
      }
    }
  };

  const handleInputBlur = (index) => {
    setActiveIndex(index);
  };
  // counter
  const [count, setCount] = useState(30);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count > 0) {
        setCount(count - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className="confirmation-container">
      <div>
        <h3>تأكيد الرمز</h3>
        <div className="confirmation-code-input">
          {code.map((value, index) => (
            <input
              type="text"
              key={index}
              value={value}
              onChange={(e) => handleInputChange(index, e.target.value)}
              onFocus={() => handleInputFocus(index)}
              onKeyDown={(e) => handleInputKeyDown(index, e)}
              onBlur={() => handleInputBlur(index)}
              ref={inputRefs[index]}
            />
          ))}
        </div>
        <div className="resend">
          <h4>{count}</h4>
          <h4>
            اعادة ارسال الرمز مره اخري <FontAwesomeIcon icon={faSync} />
          </h4>
        </div>

        <Link to="/editpass" className="a-confirm" id="a-confirm">
          تأكيد
        </Link>
      </div>
    </div>
  );
}

export default ConfirmationCodeInput;
