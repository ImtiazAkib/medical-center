import React from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import auth from "../Firebase/firebase.init";
import "./Login.css";

const Login = () => {
  let navigate = useNavigate();

  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [signInWithFacebook] = useSignInWithFacebook(auth);
  const [signInWithEmailAndPassword, loading] =
    useSignInWithEmailAndPassword(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
    let path = `/dashboard`;
    navigate(path);
  };

  return (
    <div>
      <div className="form-container grid lg:grid-cols-2 md:grid-cols-1 text-gray-600">
        <div className="form-left">
          <div className="form-img">
            <img
              src="https://i.ibb.co/VqGCpsd/Mobile-login.jpg"
              alt="register-background"
            />
          </div>
        </div>
        <div className="form w-auto flex flex-col justify-center sm:px-10 md:px-20 ">
          <h2 className="font-bold text-4xl pb-14 text-pink-700 text-center">
            Login
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="Email">Email Address</label>
              <input
                {...register("email", {
                  required: "Email is required!!",
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/,
                    message: "Please enter a valid email",
                  },
                })}
                type="email"
                required
              />
              <div className={`${errors.email ? "pt-2 notValid" : ""}`}>
                {errors.email?.message}
              </div>
            </div>
            <div>
              <label htmlFor="Password">Password</label>
              <input
                type="password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required!!",
                  },
                  minLength: 8,
                })}
                required
              />
              <div className={`${errors.password ? "pt-2 notValid" : ""}`}>
                {errors.password?.message}
              </div>
            </div>

            <div className="flex justify-between items-center flex-row h-6 mt-6">
              <div className="flex items-center flex-row">
                <input
                  type="checkbox"
                  {...register("acceptTerms", {
                    required: {
                      value: false,
                      message: "Accept the terms",
                    },
                    minLength: 8,
                  })}
                  className="w-4 h-4"
                />
                <label className="pl-2" htmlFor="remember-me">
                  Remember Me
                </label>
              </div>
              <div className={`${errors.acceptTerms ? "pt-2 notValid" : ""}`}>
                {errors.acceptTerms?.message}
              </div>
              <div>
                <Link to="/forgot-password">Forgot Password?</Link>
              </div>
            </div>
            {/* { loading &&
     
<div className="block text-center">
    <svg role="status" className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
</div>

  } */}
            <button
              className="submit-btn"
              onClick={() => signInWithEmailAndPassword()}
            >
              Login
            </button>
          </form>
          <div className="flex justify-around lg:flex-row sm:flex-row md:items-center">
            <div className="social-auth">
              <button
                className="social-google-icon"
                onClick={() => signInWithGoogle()}
              >
                <span className="social-auth-icon">
                  <FcGoogle />
                </span>
                <span className="">Google Sign In</span>
              </button>
            </div>

            {/* <div className='social-auth'>  
                        <button className='social-facebook-icon'>
                            <span className='social-auth-icon'><ImFacebook2/></span>
                            <span className=''>Facebook Sign In</span>
                        </button>
                    </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
