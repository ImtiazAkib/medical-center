import React from 'react';
import "./VerifyEmail.css";
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../Firebase/firebase.init';
import { useNavigate } from 'react-router-dom';


const VerifyEmail = () => {
    let navigate = useNavigate();
    const [user] = useAuthState(auth);
    const [sendEmailVerification, sending] = useSendEmailVerification(auth);
    return (
        <div>
            <div className="form-container grid lg:grid-cols-2 md:grid-cols-1 text-gray-600">
        <div className="form-left">
            <div className="form-img">
            <img src="https://i.ibb.co/VqGCpsd/Mobile-login.jpg" alt="register-background" />
            </div>
        </div>
      <div className="w-auto flex flex-col justify-center md:px-20 md:pb-12">
      <h2 className="font-bold text-4xl pb-14 text-pink-700 text-center">Verify Your Email</h2>
      {
          sending && <p>Sending...</p>
      }
      <button className="submit-btn" onClick={async () => {
          await sendEmailVerification(user.email);
          let path = `/home`; 
          navigate(path);
        }}>Click Here To Verify</button>
      </div>
      </div>
        </div>
    );
};

export default VerifyEmail;