import { useState } from "react";
import { Button, Label, Spinner, TextInput } from "flowbite-react";
import {
  HiMail,
  HiLockClosed,
  HiUserCircle,
  HiEye,
  HiEyeOff,
} from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import LogoComponent from "../Components/Logo";
import { signInSuccess } from "../redux/user/userSlice";
import { useDispatch } from "react-redux";

//todo navihate to home and directly sign in after signup

const Signup = ({ setOpenModal }) => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return toast.error("Please fill out all fields.");
    }

    setLoading(true);

    toast.promise(
      new Promise(async (resolve, reject) => {
        try {
          await new Promise((delayResolve) => setTimeout(delayResolve, 1000));

          const res = await fetch("http://localhost:3000/auth/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          });
          const data = await res.json();

          if (res.ok) {
            dispatch(signInSuccess(data.user));
            resolve("Sign in successful!");
            navigate("/");
          } else {
            setLoading(false);
            if (data.success === false) {
              return reject(new Error(data.message));
            }
          }
        } catch (error) {
          reject(error);
        } finally {
          setLoading(false);
        }
      }),
      {
        loading: "Signing up...",
        success: <b>Sign up successful!</b>,
        error: <b>Failed to sign up. Please try again.</b>,
      }
    );
  };

  return (
    <div className="w-full flex justify-center p-8 pt-0">
      <div className="w-full md:w-3/4">
        <LogoComponent />
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <Label value="Your Username" />
            <TextInput
              type="text"
              icon={HiUserCircle}
              placeholder="Username"
              id="username"
              autoComplete="off"
              onChange={handleChange}
            />
          </div>
          <div>
            <Label value="Your Email" />
            <TextInput
              type="text"
              icon={HiMail}
              placeholder="Email"
              id="email"
              autoComplete="off"
              onChange={handleChange}
            />
          </div>
          <div>
            <Label value="Your Password" />
            <div className="relative flex items-center">
              <TextInput
                className="flex-1"
                type={showPassword ? "text" : "password"}
                icon={HiLockClosed}
                placeholder="Password"
                id="password"
                autoComplete="off"
                onChange={handleChange}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600 hover:text-gray-800 cursor-pointer"
              >
                {showPassword ? <HiEyeOff /> : <HiEye />}
              </button>
            </div>
          </div>
          <Button
            color="dark"
            className="text-lg font-bold"
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <>
                <Spinner size="sm" />
                <p className="pl-3">Loading...</p>
              </>
            ) : (
              "Sign Up"
            )}
          </Button>
        </form>
        <div className="flex text-gray-300 gap-2 text-sm mt-5">
          <span>Have an account?</span>
          <Link to="/sign-in" className="text-blue-500">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
