import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackToHome = () => {
    let navigate = useNavigate();
    const handleGo = () =>{
        let path = `/login`; 
          navigate(path);
    }
    return (
        <div>
            <div className="form-container grid lg:grid-cols-2 md:grid-cols-1 text-gray-600">
        <div className="form-left">
            <div className="form-img">
            <img src="https://i.ibb.co/VqGCpsd/Mobile-login.jpg" alt="register-background" />
            </div>
        </div>
      <div className="w-auto flex flex-col justify-center md:px-20 md:pb-12">
      <h2 className="font-bold text-4xl pb-14 text-pink-700 text-center">Go Back To Login </h2>
      
      <button className="submit-btn" onClick={()=>handleGo()}>Go TO Login</button>
      </div>
      </div>
        </div>
    );
};

export default BackToHome;