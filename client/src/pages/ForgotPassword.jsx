import React, { useState } from "react";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import summaryApi from "../common/summaryApi";

const ForgotPassword = () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle login logic here
    try {
      const response = await axios({
        url: summaryApi.login.url,
        method: summaryApi.login.method,
        data: formData,
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
    <div className="flex flex-col min-h-screen bg-gray-100 font-sans">
      {/* Top Navbar */}
      <nav className="bg-white shadow-sm py-2 px-4 md:px-20 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-blue-600">facebook</h1>
        <div className="flex items-center space-x-2">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-2">
            <input
              type="text"
              placeholder="Email or phone"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 text-md focus:outline-none focus:ring-1 focus:ring-blue-500 mb-1 md:mb-0"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 text-md focus:outline-none focus:ring-1 focus:ring-blue-500 mb-1 md:mb-0"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-4 py-2.5 rounded-md text-sm hover:bg-blue-700">
            Log in
          </button>
          <a href="#" className="text-blue-600 text-sm hover:underline">
            Forgotten account?
          </a>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col items-center justify-center p-4">
        {/* Find Your Account Card */}
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-lg mt-10 md:mt-20">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Find Your Account
          </h2>
          <p className="text-black text-md mb-4">
            Please enter your email address or mobile number to search for your
            account.
          </p>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Email address or mobile number"
              className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button className="px-4 py-2 text-gray-600 rounded-md hover:bg-gray-100">
              Cancel
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Footer always at bottom */}
      <Footer />
    </div>
  );
};

export default ForgotPassword;
