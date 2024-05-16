import React, { useRef, useState } from "react";
import Header from "./Header";
import { BACKGROUND_IMAGE_URL } from "../utils/Constants";
import { validateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isSigninForm, setIsSigninForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSigninForm = () => {
    setIsSigninForm(!isSigninForm);
  };

  const handleButtonClick = () => {
    const message = validateData(
      email.current.value,
      password.current.value,
      !isSigninForm ? name.current.value : ""
    );
    setErrorMessage(message);

    if (message) return;

    //Sign in or Sign up logic

    if (!isSigninForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://englishtribuneimages.blob.core.windows.net/gallary-content/2023/9/2023_9$largeimg_2030637279.jpg",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }));
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ": " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          // dispatch(
          //   addUser({
          //     uid: user.uid,
          //     email: user.email,
          //     displayName: user.displayName,
          //     photoURL: user.photoURL,
          //   })
          // );
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ": " + errorMessage);
        });
    }
  };

  return (
    <div className="">
      <Header />
      <img className="absolute" src={BACKGROUND_IMAGE_URL} alt="background" />
      <form
        className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="text-2xl font-bold py-4">
          {isSigninForm ? "Sign In" : "Sign up"}
        </h1>
        {!isSigninForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          autoComplete="on"
          type="password"
          placeholder="Password"
          className="p-4 my-6 w-full bg-gray-700"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="p-4 my-2 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSigninForm ? "Sign In" : "Sign up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSigninForm}>
          {isSigninForm
            ? "New to Netflix? Signup now"
            : "Already a member? Sign in now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
