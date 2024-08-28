import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { buttonTheme, navbarTheme } from "../theme";
import { signoutSuccess } from "../redux/user/userSlice";
import toast from "react-hot-toast";
import { Link, useLocation } from "react-router-dom";
import LogoComponent from "./Logo";
import { FaCircleUser } from "react-icons/fa6";

const NavbarComponent = () => {
  const path = useLocation().pathname;
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleSignout = async () => {
    toast.promise(
      new Promise(async (resolve, reject) => {
        try {
          await new Promise((delayResolve) => setTimeout(delayResolve, 1000));
          const res = await fetch("http://localhost:3000/auth/signout", {
            method: "POST",
          });

          if (res.ok) {
            await res.json();
            dispatch(signoutSuccess());
            resolve();
          } else {
            reject(new Error("Sign out failed"));
          }
        } catch (error) {
          reject(error);
        }
      }),
      {
        loading: "Signing out...",
        success: <b>User Signed Out!</b>,
        error: <b>Failed to sign out. Please try again.</b>,
      }
    );
  };

  return (
    <Navbar fluid theme={navbarTheme}>
      <LogoComponent />
      <div className="flex ml-10 gap-4 lg:order-2 items-center">
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <div className="flex gap-3 justify-center items-center">
                <FaCircleUser size={32} className="text-white" />
                <div className="flex flex-row gap-1 items-center">
                  <span className="font-bold text-white text-sm">
                    {currentUser.username}
                  </span>
                  <MdOutlineKeyboardArrowDown
                    size={24}
                    className="text-white"
                  />
                </div>
              </div>
            }
          >
            <Dropdown.Header>
              <span className="block truncate text-sm font-medium">
                {currentUser.email}
              </span>
            </Dropdown.Header>
            <Dropdown.Item onClick={handleSignout}>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <div className="flex gap-4">
            <Link to="/sign-in">
              <Button theme={buttonTheme} color="light" pill>
                Sign In
              </Button>
            </Link>
            <Link to="/sign-up">
              <Button
                theme={buttonTheme}
                pill
                className="text-white"
                gradientDuoTone="purpleToPink"
              >
                Sign Up
              </Button>
            </Link>
            <Navbar.Toggle />
          </div>
        )}
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          active={path === "/"}
          as={"div"}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <Link to="/">Home</Link>
        </Navbar.Link>

        <Navbar.Link active={path === "/markets"} as={"div"} onClick={() => {}}>
          <Link to="/markets">Market</Link>
        </Navbar.Link>

        <Navbar.Link
          active={path === "/dashboard"}
          as={"div"}
          onClick={() => {}}
        >
          <Link to="/dashboard">Dashboard</Link>
        </Navbar.Link>

        <Navbar.Link active={path === "/wallet"} as={"div"} onClick={() => {}}>
          <Link to="/wallet">Wallet</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
