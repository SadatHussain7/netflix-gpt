import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL, SUPPORTED_LANGUAGES } from "../utils/Constants";
import { toggleGptSearchView } from "../utils/GPTSlice";
import lang from "../utils/languageConstants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  // @ts-ignore
  const user = useSelector((state) => state.user);
  // @ts-ignore
  const gptSearch = useSelector((state) => state.gpt.showGptSearch);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    const selectedLang = e.target.value;
    dispatch(changeLanguage(selectedLang));
  };

  useEffect(() => {
    // returns an unsubscribe function - written on firebase docs
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between ">
        <img className="w-44" src={LOGO_URL} alt="logo" />
        {user && (
          <div className="flex p-2">
            {gptSearch && (
              <select
                className="p-2 m-2 bg-transparent text-white"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option
                    key={lang.value}
                    value={lang.value}
                    className="text-black"
                  >
                    {lang.label}
                  </option>
                ))}
              </select>
            )}
            <button
              className="py-2 px-2 mx-4 my-2 w-32 bg-green-700 text-white rounded-lg"
              onClick={handleGptSearchClick}
            >
              {!gptSearch ? "GPT Search" : "Browse"}
            </button>
            <img
              className="w-20 h-20 p-4"
              src={user?.photoURL}
              alt="user-profile"
            />
            <button className="font-bold text-white" onClick={handleSignOut}>
              (Sign out)
            </button>
          </div>
        )}
      </div>
    </>
  );
};
export default Header;
