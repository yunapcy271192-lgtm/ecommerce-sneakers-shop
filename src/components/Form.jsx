import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./redux/drawerSlice";

export default function Form() {
  const [isSignUp, setIsSignUp] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login()); // Dispatch the login action when the form is submitted
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h2 className="text-gray-600 mb-6">
          {isSignUp ? "Create an account" : "Log in to your account"}
        </h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md w-80"
        >
          {isSignUp && (
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>
          )}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
          {!isSignUp && (
            <div className="mb-4">
              <a
                href="#forgot-password"
                className="text-blue-500 hover:text-blue-700 text-sm"
              >
                Forgot your password?
              </a>
            </div>
          )}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition"
          >
            {isSignUp ? "Sign Up" : "Log In"}
          </button>
        </form>
        <div className="mt-4">
          <p className="text-gray-600">
            {isSignUp ? "Already have an account? " : "Don't have an account? "}
            <button
              className="text-blue-500 hover:text-blue-700 font-bold"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp ? "Log in" : "Sign up"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
