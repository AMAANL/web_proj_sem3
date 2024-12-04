import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  // State hooks for form inputs and error messages
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailError, setEmailError] = useState("");

  // useNavigate hook for redirection
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email validation using a regular expression
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      setEmailError("Please enter a valid email address.");
      return; // Prevent form submission if email is invalid
    }

    // Clear any previous error
    setEmailError("");

    // Redirect to the main page upon successful registration
    navigate("Home.js"); // Replace "/" with the actual path of your main page
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white shadow-lg rounded-lg flex max-w-4xl w-full">
        {/* Logo Section */}
        <div className="hidden md:flex flex-1 bg-green-600 rounded-l-lg justify-center items-center">
          <img
            src="./Hair n Things Logo - Original - 5000x5000.png"
            alt="Illustration"
            className="w-3/4"
          />
        </div>

        {/* Form Section */}
        <div className="flex-1 p-8">
          <h2 className="text-2xl font-bold text-gray-800">REGISTER</h2>
          <p className="text-gray-600 mb-6">Register to buy our products</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="first-name">
                First name
              </label>
              <input
                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                type="text"
                id="first-name"
                placeholder="John"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="last-name">
                Last name
              </label>
              <input
                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                type="text"
                id="last-name"
                placeholder="Smith"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                type="email"
                id="email"
                placeholder="johnsmith@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && <p className="text-red-500 text-sm mt-2">{emailError}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="password">
                Password
              </label>
              <input
                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                type="password"
                id="password"
                placeholder="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 transition duration-200"
              type="submit"
            >
              REGISTER NOW
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
