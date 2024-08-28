import { useState } from "react";
import { Button, Label, Spinner, TextInput } from "flowbite-react";
import LogoComponent from "../Components/Logo";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { HiMail, HiLockClosed, HiEye, HiEyeOff } from "react-icons/hi";
import { toast } from "react-hot-toast";
import { signInStart, signInSuccess } from "../redux/user/userSlice";
import OAuth from "../Components/OAuth";

const Signin = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return toast.error("Please fill all the fields");
    }

    setLoading(true);
    dispatch(signInStart());

    toast.promise(
      new Promise(async (resolve, reject) => {
        try {
          // Simulate a 1-second delay
          await new Promise((delayResolve) => setTimeout(delayResolve, 1000));

          const res = await fetch("http://localhost:3000/auth/signin", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          });

          const data = await res.json();

          if (data.success === false) {
            reject(new Error(data.message));
          } else if (res.ok) {
            dispatch(signInSuccess(data.user));
            resolve("Sign in successful!");
            navigate("/");
          }

          setLoading(false);
        } catch (error) {
          reject(error);
          setLoading(false);
        }
      }),
      {
        loading: "Signing in...",
        success: <b>Sign in successful!</b>,
        error: <b>Failed to sign in. Please try again.</b>,
      }
    );
  };

  return (
    <div className="w-full flex justify-center  p-8 pt-0">
      <div className="w-full md:w-3/4">
        <LogoComponent />
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
              "Sign In"
            )}
          </Button>
          <OAuth />
        </form>
        <div className="flex text-gray-300 gap-2 text-sm mt-5">
          <span>Don't have an account?</span>
          <Link to="/sign-up" className="text-blue-500">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;
