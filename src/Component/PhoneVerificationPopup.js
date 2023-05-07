import React, { useState, useRef } from 'react';

function PhoneVerificationPopup() {
  const [otp, setOtp] = useState('');
  const inputRefs = useRef([]);

  const handleInputKeyDown = (event, index) => {
    if (event.key >= '0' && event.key <= '9') {
      const newOtp = otp.slice(0, index) + event.key + otp.slice(index + 1);
      setOtp(newOtp);

      // Move focus to next input
      if (index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    } else if (event.key === 'Backspace') {
      const newOtp = otp.slice(0, index - 1) + otp.slice(index);
      setOtp(newOtp);

      // Move focus to previous input
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    } else if (event.key.startsWith('Arrow')) {
      if (event.key === 'ArrowLeft' && index > 0) {
        inputRefs.current[index - 1].focus();
      } else if (event.key === 'ArrowRight' && index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    } else if (event.key === 'v' && event.ctrlKey) {
      // Handle paste event
      const clipboardText = event.clipboardData.getData('text/plain');
      const digits = clipboardText.match(/\d/g) || [];
      const newOtp = digits.slice(0, 6).join('');
      setOtp(newOtp);

      // Fill input fields with pasted digits
      digits.forEach((digit, i) => {
        if (i < inputRefs.current.length) {
          inputRefs.current[i].value = digit;
        }
      });
    } else {
      event.preventDefault();
    }
  };

  const handleInputPaste = (event, index) => {
    event.preventDefault();
  };

  const handleVerifyClick = () => {
    // Verify the OTP and perform the appropriate action
    console.log(`Verifying OTP: ${otp}`);
  };

  return (
    <div>
      <button onClick={() => setOtp('')}>
        Verify phone number
      </button>

      {otp !== '' && (
        <div>
          <p>Please enter the 6-digit OTP sent to your phone number</p>

          <div>
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <input
                key={i}
                type="text"
                maxLength={1}
                onKeyDown={(event) => handleInputKeyDown(event, i)}
                onPaste={(event) => handleInputPaste(event, i)}
                ref={(ref) => inputRefs.current[i] = ref}
                style={{ marginRight: '5px' }}
              />
            ))}
          </div>

          <button onClick={handleVerifyClick}>Verify</button>
        </div>
      )}
    </div>
  );
}

export default PhoneVerificationPopup;
