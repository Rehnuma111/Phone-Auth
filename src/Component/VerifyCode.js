import React from "react";

const VerifyCode = () => {
  
  return (
    <div className="otp-field">
      <div>
        <h1>Enter Your OTP </h1>
      </div>
      <div className="otp-input">
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </div>
      <div style={{ marginTop: "2rem" }}>
        <button  style={{ width: "19rem" }}>VerifyCode</button>
      </div>
    </div>
  );
};

export default VerifyCode;
