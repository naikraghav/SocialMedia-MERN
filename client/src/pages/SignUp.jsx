import { useState } from "react";
import Logo from "../assets/fb_logo.svg";
import Footer from "../components/Footer";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import summaryApi from "../common/summaryApi";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    dateOfBirth: "",
    gender: "",
    email: "",
    password: "",
  });

  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const navigate = useNavigate();

  const updateDateOfBirth = (day, month, year) => {
    if (day && month && year) {
      const monthMap = {
        Jan: "01",
        Feb: "02",
        Mar: "03",
        Apr: "04",
        May: "05",
        Jun: "06",
        Jul: "07",
        Aug: "08",
        Sep: "09",
        Oct: "10",
        Nov: "11",
        Dec: "12",
      };
      const formattedDate = `${year}-${monthMap[month]}-${day.padStart(
        2,
        "0"
      )}`;

      setFormData({
        ...formData,
        dateOfBirth: formattedDate,
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    try {
      const response = await axios({
        url: summaryApi.signup.url,
        method: summaryApi.signup.method,
        data: formData,
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.data.success) {
        console.log("Signup successful:", response.data);
        navigate("/login");
      }
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-[#f0f2f5] flex flex-col">
      {/* top logo  */}
      <div className="flex justify-center items-center ">
        <img src={Logo} alt="Facebook" className="w-auto h-[100px] " />
      </div>

      {/* sign up form */}
      <div className="flex items-center justify-center ">
        <div className="w-full max-w-md bg-white p-4 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-center mb-1">
            Create a new account
          </h1>
          <p className="text-center text-gray-600 mb-4">It's quick and easy.</p>
          <form onSubmit={handleSubmit}>
            {/* Name fields */}
            <div className="flex gap-4 mb-4">
              <input
                type="text"
                required
                placeholder="First name"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                required
                placeholder="Surname"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                className="flex-1  p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Date of birth */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Date of birth <span className="text-gray-400">?</span>
              </label>
              <div className="flex gap-2">
                <select
                  value={day}
                  onChange={(e) => {
                    setDay(e.target.value);
                    updateDateOfBirth(e.target.value, month, year);
                  }}
                  className="flex-1 p-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {Array.from({ length: 31 }, (_, i) => (
                    <option key={i} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
                <select
                  value={month}
                  onChange={(e) => {
                    setMonth(e.target.value);
                    updateDateOfBirth(day, e.target.value, year);
                  }}
                  className="flex-1 p-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {[
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                  ].map((month) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
                <select
                  value={year}
                  onChange={(e) => {
                    setYear(e.target.value);
                    updateDateOfBirth(day, month, e.target.value);
                  }}
                  className="flex-1 p-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {/* Generate year options dynamically */}
                  {Array.from({ length: 100 }, (_, i) => (
                    <option key={i} value={2025 - i}>
                      {2025 - i}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Gender */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Gender <span className="text-gray-400">?</span>
              </label>
              <div className="flex gap-2">
                {["Female", "Male", "Custom"].map((gender) => (
                  <label
                    key={gender}
                    className="flex items-center justify-between flex-1 border border-gray-300 rounded-md p-2 cursor-pointer"
                  >
                    <span>{gender}</span>
                    <input
                      type="radio"
                      name="gender"
                      value={gender}
                      checked={formData.gender === gender}
                      onChange={handleChange}
                      className="form-radio text-blue-500"
                    />
                  </label>
                ))}
              </div>
            </div>

            {/* Contact info */}
            <div className="mb-4 relative">
              <input
                type="email"
                required
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Mobile number or email address"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {/* You can add a small image or icon here */}
            </div>

            {/* Password */}
            <div className="mb-4">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="New password"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Informational text */}
            <p className="text-xs text-gray-500 mb-4">
              People who use our service may have uploaded your contact
              information to Facebook.{" "}
              <a href="#" className="text-blue-500 hover:underline">
                Learn more.
              </a>
            </p>

            <p className="text-xs text-gray-500 mb-6">
              By clicking Sign Up, you agree to our{" "}
              <a href="#" className="text-blue-500 hover:underline">
                Terms, Privacy Policy
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-500 hover:underline">
                Cookies Policy
              </a>
              . You may receive SMS notifications from us and can opt out at any
              time.
            </p>

            {/* Sign Up button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-2/3 md:w-1/2 bg-green-500 text-white font-bold py-1 px-2 rounded-lg text-lg hover:bg-green-600 transition-colors"
              >
                Sign Up
              </button>
            </div>
          </form>
          {/* Link to login page */}

          <p className="text-center mt-4">
            <Link
              to="/login"
              className="text-blue-500 hover:underline font-semibold"
            >
              Already have an account?
            </Link>
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12">
        <Footer />
      </div>
    </div>
  );
};

export default Signup;
