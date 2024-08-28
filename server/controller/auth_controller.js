import User from "../model/user_model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";
import { generateSolWallet } from "./solwallet_controller.js";

/*signup*/
export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  const usernameRegex = /^[a-zA-Z0-9]+$/;
  const passwordRegex = /^(?=.*[a-zA-Z0-9])(?=.*[!@#$%^&*]).{8,}$/;

  if (!username.match(usernameRegex)) {
    return next(
      errorHandler(400, "Username can only contain letters and numbers.")
    );
  }

  if (!password.match(passwordRegex)) {
    return next(
      errorHandler(400, "Password must meet the specified criteria.")
    );
  }

  if (!username || !email || !password) {
    return next(errorHandler(400, "All fields are required."));
  }

  try {
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    await generateSolWallet(newUser._id);

    const user = await User.findById(newUser._id).populate("solWalletId");

    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    const { password: pass, ...rest } = user._doc;

    res.status(201).json({
      message: "User account and SOL wallet created successfully",
      token,
      user: rest,
    });
  } catch (error) {
    console.error("Error during signup:", error);
    next(error);
  }
};

/*signin*/
export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password || email === "" || password === "") {
    return next(errorHandler(400, "All fields are required"));
  }

  try {
    const validUser = await User.findOne({ email }).populate("solWalletId");
    if (!validUser) {
      return next(errorHandler(404, "Invalid Credentials"));
    }

    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(400, "Invalid Credentials"));
    }

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    const { password: pass, ...rest } = validUser._doc;

    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .json({
        message: "Signed in successfully",
        token,
        user: rest,
      });
  } catch (error) {
    next(error);
  }
};

/*google auth*/
export const google = async (req, res, next) => {
  const { email, name } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      user = await User.findById(user._id).populate("solWalletId");
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });

      const { password, ...rest } = user._doc;

      res
        .status(200)
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .json({
          message: "Signed in successfully",
          token,
          user: rest,
        });
    } else {
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);

      const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
      const username =
        name.toLowerCase().split(" ").join("") +
        Math.random().toString(36).slice(-4);

      const newUser = new User({
        username,
        email,
        password: hashedPassword,
      });

      await newUser.save();
      await generateSolWallet(newUser._id);

      user = await User.findById(newUser._id).populate("solWalletId");

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });

      const { password, ...rest } = user._doc;

      res
        .status(200)
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .json({
          message: "Account created and signed in successfully",
          token,
          user: rest,
        });
    }
  } catch (error) {
    next(error);
  }
};

/*signout*/
export const signout = (req, res, next) => {
  try {
    res
      .clearCookie("access_token")
      .status(200)
      .json("User has been signed out");
  } catch (error) {
    next(error);
  }
};
