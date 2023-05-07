// import React from "react";
// import "react-phone-number-input/style.css";
// import PhoneInput from "react-phone-number-input";
// import { useState } from "react";
// import { getAuth, RecaptchaVerifier } from "firebase/auth";

// const Login = () => {
//   const [value, setValue] = useState("");
//   const [error, setError] = useState("");

//   const getOtp = async (e) => {
//     e.preventDefault();
//     setError("");
//     if (value === "" || value === undefined) {
//       return setError("Enter a valid no.");
//     }
//     try {
//       const response = await setUpRecaptcha(value);
//       console.log(response);
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   function setUpRecaptcha(value) {
//     const auth = getAuth();
//     const recaptchaVerifier = new RecaptchaVerifier(
//       "recaptcha-container",
//       {},
//       auth
//     );
//     return recaptchaVerifier.render().then((widgetId) => {
//       return new Promise((resolve, reject) => {
//         recaptchaVerifier
//           .verify()
//           .then((response) => {
//             resolve(response);
//           })
//           .catch((error) => {
//             reject(error);
//           });
//       });
//     });
//   }
//   return (
//     <div className="container">
//       <form onSubmit={getOtp}>
//         <div className="Login-page">
//           <div>
//             <h1>Verify your phone</h1>
//           </div>
//           <div>
//             <PhoneInput
//               className="phone-input-container"
//               placeholder="Enter phone number"
//               value={value}
//               onChange={setValue}
//               defaultCountry="IN"
//             />
//           </div>
//           <div id="recaptcha-container"></div>
//           <div>
//             <button type="submit" className="btn-login">
//               Send code via SMS
//             </button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import React from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
import { getAuth, RecaptchaVerifier } from "firebase/auth";

const Login = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const getOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (value === "" || value === undefined) {
      return setError("Enter a valid no.");
    }
    try {
      const response = await setUpRecaptcha(value);
      console.log(response);
    } catch (error) {
      setError(error.message);
    }
  };

  function setUpRecaptcha(value) {
    const auth = getAuth();
    const recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {},
      auth
    );
    return recaptchaVerifier.render().then((widgetId) => {
      return new Promise((resolve, reject) => {
        recaptchaVerifier.verify().then((response) => {
          resolve(response);
        }).catch((error) => {
          reject(error);
        });
      });
    });
  }

  return (
    <div className="container">
      <form onSubmit={getOtp}>
        <div className="Login-page">
          <div>
            <h1>Verify your phone</h1>
          </div>
          <div>
            <PhoneInput
              className="phone-input-container"
              placeholder="Enter phone number"
              value={value}
              onChange={setValue}
              defaultCountry="IN"
            />
          </div>
          <div id="recaptcha-container"></div>
          <div>
            <button type="submit" className="btn-login">
              Send code via SMS
            </button>
          </div>
          {error && <div className="error-message">{error}</div>}
        </div>
      </form>
    </div>
  );
};

export default Login;
