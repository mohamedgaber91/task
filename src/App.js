import React from "react";

import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";

import ForgetPass from "./Pages/ForgetPass";
import ConfirmationCodeInput from "./Pages/ConfirmationCodeInput";
import EditPass from "./Pages/EditPass";



function App() {

  return (
    <>
      
     <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/forgetpass" element={<ForgetPass/>}/>
        <Route path="/confirmcode" element={<ConfirmationCodeInput/>}/>
        <Route path="/editpass" element={<EditPass/>}/>
      </Routes>
    
    </>
  );
}

export default App;
