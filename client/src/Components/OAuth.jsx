import React from "react";
import { Button } from "flowbite-react";
import { FcGoogle } from "react-icons/fc";

import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function OAuth() {
  const auth = getAuth(app);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleClick = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    dispatch(signInStart());

    toast.promise(
      new Promise(async (resolve, reject) => {
        try {
          const resultsFromGoogle = await signInWithPopup(auth, provider);

          const res = await fetch("http://localhost:3000/auth/google", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
              name: resultsFromGoogle.user.displayName,
              email: resultsFromGoogle.user.email,
            }),
          });

          const data = await res.json();

          if (res.ok) {
            dispatch(signInSuccess(data.user));
            navigate("/");
            resolve("Logged in successfully!");
          } else {
            reject(new Error("Login failed"));
          }
        } catch (error) {
          dispatch(signInFailure(error.message));
          reject(error);
        }
      }),
      {
        loading: "Logging in with Google...",
        success: <b>Logged in successfully!</b>,
        error: <b>Login failed. Please try again.</b>,
      }
    );
  };

  return (
    <button
      type="button"
      className="border border-black p-2 rounded-lg bg-gray-100 focus:ring-4 focus:ring-gray-300"
      onClick={handleGoogleClick}
    >
      <div className="flex justify-center items-center gap-1.5 h-6">
        <FcGoogle size={24} />
        <span className="font-bold">Continue with Google</span>
      </div>
    </button>
  );
}
