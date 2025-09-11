import { useState } from "react";
import axios from "axios";
import Logo from "../assets/fb_logo.svg";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(formData);
    // Handle login logic here
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", formData, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (response.data.success) {
        console.log("Login successful:", response.data);
        navigate("/");
      }
    } catch (error) {
      console.error("Login error:", error);
    }

  };

  return (
    <>
      <div className="flex flex-col min-h-screen bg-[#f0f2f5] mb-3">
        {/* Main Content */}
        <div className="flex flex-1 justify-center items-center">
          <div className="flex max-w-[1040px] w-full justify-between px-6">
            {/* Left Side */}
            <div className="flex flex-col justify-center items-start w-[580px] px-6">
              <img
                src={Logo}
                alt="Facebook"
                className="w-[300px] h-auto ml-[-4px]"
              />
              <h2 className="text-[28px] leading-snug font-normal text-black mt-4 pl-5">
                Facebook helps you connect and share <br /> with the people in
                your life.
              </h2>
            </div>

            {/* Right Side */}
            <div className="flex flex-col justify-center items-center w-[396px]">
              <div className="bg-white shadow-md rounded-lg p-4 w-full">
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email address or phone number"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-3 text-[17px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-3 text-[17px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button 
                  type="submit"
                  onClick={handleSubmit}
                  className="w-full bg-[#1877f2] text-white text-[20px] font-bold rounded-lg py-3 hover:bg-[#166fe5]">
                  Log in
                </button>
                <div className="text-center my-3">
                  <a
                    href="#"
                    className="text-[#1877f2] text-[14px] font-medium hover:underline"
                  >
                    Forgotten password?
                  </a>
                </div>
                <hr className="border-gray-300 my-4" />
                <div className="flex justify-center">
                  <Link to="/signup">
                    <button className="bg-[#42b72a] text-white text-[17px] font-bold px-4 py-3 rounded-lg hover:bg-[#36a420]">
                      Create new account
                    </button>
                  </Link>
                </div>
              </div>
              <p className="text-[14px] mt-6">
                <a href="#" className="font-bold hover:underline">
                  Create a Page
                </a>{" "}
                for a celebrity, brand or business.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer  */}
      <div className="mt-5">
        <Footer />
      </div>
    </>
  );
};

export default Login;
