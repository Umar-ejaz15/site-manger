import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Main Register component for user registration
const Register = () => {
  const navigate = useNavigate();

  // Initialize react-hook-form with validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Handle form submission
  // To integrate your API:
  // 1. Replace the try block with your API call
  // 2. Use fetch or axios to make a POST request to your backend
  // Example API integration:
  /*
    const onSubmit = async (data) => {
      try {
        const response = await fetch('YOUR_API_ENDPOINT/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: data.username,
            email: data.email,
            password: data.password,
            terms: data.terms
          })
        });

        const result = await response.json();
        
        if (!response.ok) {
          throw new Error(result.message || 'Registration failed');
        }

        toast.success("Registration successful!");
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } catch (error) {
        toast.error(error.message);
        console.error("Registration failed:", error);
      }
    };
  */
  const onSubmit = async (data) => {
    try {
      // Create a user object with form data
      const user = {
        username: data.username,
        email: data.email,
        password: data.password,
        terms: data.terms
      };

      // Show success message
      toast.success("Registration successful!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });

      // Redirect to login page after 3 seconds
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      // Show error message if registration fails
      toast.error(error.message || "Registration failed", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
      console.error("Registration failed:", error);
    }
  };

  return (
    // Main container with background image
    <div className="w-full h-screen relative">
      <ToastContainer />
      {/* Background image container */}
      <div className="w-full h-screen fixed inset-0">
        <img
          src="https://t3.ftcdn.net/jpg/02/30/40/58/360_F_230405854_4GiyHlXxufTXinwjqBnd49Cvpfhjh97b.jpg"
          alt="background"
          className="w-full h-full object-cover opacity-70"
        />
        {/* Overlay with world map */}
        <div
          className="absolute inset-0 w-full h-full dark:bg-black backdrop-blur-sm"
          style={{
            backgroundImage: 'url("../..//world-map.svg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: "0.9",
          }}
        ></div>
      </div>
      {/* Registration form container */}
      <div className="absolute inset-0 flex items-center justify-center p-8 overflow-hidden">
        <div className="w-full max-w-md space-y-6 bg-white dark:bg-gray-800 bg-opacity-90 rounded-xl shadow-2xl transform hover:scale-[1.02] transition-all duration-300">
          <h1 className="w-full px-5 py-3 bg-gray-600 dark:bg-gray-700 text-2xl font-bold text-left text-white mb-6 rounded-t-xl">
            Register
          </h1>

          {/* Registration form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 px-6 pb-6 flex flex-col gap-2"
          >
            {/* Username input field */}
            <div className="space-y-2">
              <div className="relative">
                <div className="flex justify-between items-center">
                  <FaUser className="absolute left-3 top-3.5 text-gray-500 dark:text-gray-400 text-xl" />
                  <input
                    type="text"
                    placeholder="Username"
                    className="w-full pl-10 px-3 py-3 border-b-2 border-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-500 transition-all duration-300 bg-transparent dark:text-white rounded-t-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                    {...register("username", {
                      required: "Full name is required",
                      minLength: {
                        value: 2,
                        message: "Name must be at least 2 characters",
                      },
                    })}
                  />
                </div>
              </div>
              {errors.fullName && (
                <span className="text-sm text-red-600 dark:text-red-400 font-medium">
                  {errors.fullName.message}
                </span>
              )}
            </div>

            {/* Email input field */}
            <div className="space-y-2">
              <div className="relative">
                <div className="flex justify-between items-center">
                  <MdEmail className="absolute left-3 top-3.5 text-gray-500 dark:text-gray-400 text-xl" />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full pl-10 px-3 py-3 border-b-2 border-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-500 transition-all duration-300 bg-transparent dark:text-white rounded-t-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                </div>
              </div>
              {errors.email && (
                <span className="text-sm text-red-600 dark:text-red-400 font-medium">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Password input field */}
            <div className="space-y-2">
              <div className="relative">
                <div className="flex justify-between items-center">
                  <RiLockPasswordLine className="absolute left-3 top-3.5 text-gray-500 dark:text-gray-400 text-xl" />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full pl-10 px-3 py-3 border-b-2 border-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-500 transition-all duration-300 bg-transparent dark:text-white rounded-t-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                  />
                </div>
              </div>
              {errors.password && (
                <span className="text-sm text-red-600 dark:text-red-400 font-medium">
                  {errors.password.message}
                </span>
              )}
            </div>

            {/* Terms and conditions checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 text-blue-600 border-gray-300 dark:border-gray-600 rounded focus:ring-blue-500 cursor-pointer"
                {...register("terms", {
                  required: "You must accept the terms and conditions",
                })}
              />
              <label
                htmlFor="terms"
                className="ml-2 text-sm text-gray-700 dark:text-gray-300 cursor-pointer hover:text-gray-900 dark:hover:text-gray-100"
              >
                I accept the terms and conditions
              </label>
            </div>
            {errors.terms && (
              <span className="text-sm text-red-600 dark:text-red-400 font-medium">
                {errors.terms.message}
              </span>
            )}

            {/* Submit button and login link */}
            <div className="flex flex-col gap-3 pt-2">
              <button
                type="submit"
                className="w-full py-3 px-4 bg-gray-600 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg"
              >
                Register
              </button>
              <Link to="/login" className="text-center">
                <button className="text-gray-600 dark:text-gray-300 text-lg font-medium hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-300">
                  Already have an account? Login
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;