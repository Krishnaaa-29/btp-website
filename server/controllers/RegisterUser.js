import bcrypt from "bcrypt";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const createToken = (user) => {
    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
      },
      process.env.ACCESS_TOKEN,
      { expiresIn: "15m" }
    );

    return token;
  };

  try {
    const { fullName, email, password } = req.body;
    if (!fullName || !email || !password) {
      return res.status(403).json({ error: "All fields must be filled" });
    }
    if (!emailRegex.test(email)) {
      return res.status(403).json({ error: "Email Invalid" });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ error: "User Already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      fullName,
      email,
      password: hashedPassword,
    });

    const accessToken = createToken(newUser);
    if (newUser) {
      return res
        .status(201)
        .json({ _id: newUser.id, email: newUser.email, accessToken });
    } else {
      return res.status(401).json({ msg: "Error Occurred. User not created" });
    }
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Fill all the fields" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not Found" });
    }

    if (await bcrypt.compare(password, user.password)) {
      const accessToken = createToken(user);
      return res.status(200).json({ msg: "Login Successful", accessToken });
    } else {
      return res.status(403).json({ error: "Password doesn't match" });
    }
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

export { registerUser, login };
