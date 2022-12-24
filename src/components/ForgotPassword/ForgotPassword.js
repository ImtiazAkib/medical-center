import React, { useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../Firebase/firebase.init';
import "./ForgotPassword.css"

const ForgotPassword = () => {
    let navigate = useNavigate();
    const [email, setEmail] = useState('');
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
    auth
  );
    return (
        <div>
            <div className="form-container grid lg:grid-cols-2 md:grid-cols-1 text-gray-600">
        <div className="form-left">
            <div className="form-img">
            <img src="https://i.ibb.co/VqGCpsd/Mobile-login.jpg" alt="register-background" />
            </div>
        </div>
      <div className="reset-form w-auto flex flex-col justify-center md:px-20 md:pb-12">
      <h2 className="font-bold text-4xl pb-14 text-pink-700 text-center">Reset Your Password</h2>
      <div>
            <label htmlFor="Email">Email Address</label>
            <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
        </div>
      {
          sending && <p>Sending...</p>
      }
      <button className="submit-btn" onClick={async () => {
          await sendPasswordResetEmail(email);
          alert('Sent email');
          let path = `/back-to-home`; 
          navigate(path);
        }}>Click Here To Reset Password</button>
      </div>
      </div>
        </div>
    );
};

export default ForgotPassword;