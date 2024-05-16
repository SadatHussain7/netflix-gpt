import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSigninForm, setIsSigninForm] = useState(true);

  const toggleSigninForm = () => {
    setIsSigninForm(!isSigninForm);
  };

  return (
    <div className="">
      <Header />
      <img
        className="absolute w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/41c789f0-7df5-4219-94c6-c66fe500590a/3149e5eb-4660-4e3d-9e65-b1e615229c64/IN-en-20240513-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt="background"
      />
      <form className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="text-2xl font-bold py-4">
          {isSigninForm ? "Sign In" : "Sign up"}
        </h1>
        {!isSigninForm && <input
          type="text"
          placeholder="Full Name"
          className="p-4 my-4 w-full bg-gray-700"
        />}
        <input
          type="email"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-6 w-full bg-gray-700"
        />
        <button className="p-4 my-2 bg-red-700 w-full rounded-lg">
          {isSigninForm ? "Sign In" : "Sign up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSigninForm}>
          {isSigninForm
            ? "New to Netflix? Signup now"
            : "Already a member? Sign in now"}
        </p>
        {/* <div>
          <input type="checkbox" />
          <span>Remember me</span>
            <a href="/">Need help?</a>
        </div> */}
      </form>
    </div>
  );
};

export default Login;
