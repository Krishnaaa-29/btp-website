import { useState } from "react";
import img from "../assets/login.jpg";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const changeHandler = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://btp-website.onrender.com/auth/login",
        formData
      );
      localStorage.setItem("token", JSON.stringify(response.data.accessToken));
      localStorage.setItem("email", response.data.email);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
    setFormData({
      fullName: "",
      email: "",
      password: "",
    });
  };
  return (
    <div>
      <main className="bg-[#eeeff1] w-screen h-screen flex items-center justify-center">
        <div className="bg-white w-1/2 max-w-[640px] h-[500px] rounded-lg shadow-lg flex">
          <img
            src={img}
            alt="img"
            className="overflow-hidden object-cover cover-round flex-[1]"
          />
          <form className="content relative flex-[1]" onSubmit={submitHandler}>
            <h1 className="text-2xl font-bold text-center my-4">Log In</h1>
            <input
              name="email"
              type="email"
              value={email}
              onChange={changeHandler}
              placeholder="Enter your Email ID"
            />
            <input
              name="password"
              type="password"
              value={password}
              onChange={changeHandler}
              placeholder="Enter your Password"
            />
            <button className="black-button block mx-auto my-8" type="submit">
              Log In
            </button>
            <div className="w-[90%] border-black opacity-10 border-[1px] mx-auto"></div>
            <button className="black-button mx-auto my-8 flex items-center justify-center gap-4">
              <FcGoogle />
              <p>Continue with Google</p>
            </button>
            <div className="flex justify-center gap-1">
              <p>Don't have an account?</p>
              <Link to="/auth/register" className="underline">
                Sign In
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};
export default Login;
