import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdCheckCircleOutline, MdEmail, MdKey } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { MdCheckCircle } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

// To integrate your API:
// 1. Create an API endpoint for password reset (e.g., POST /api/reset-password)
// 2. Replace the onSubmit function with actual API call
// 3. Handle the API response accordingly

const ResetPassword = () => {
  const navigate = useNavigate();
  const [showVerification, setShowVerification] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Example API integration:
  // const onSubmit = async (data) => {
  //   try {
  //     const response = await fetch('YOUR_API_ENDPOINT/reset-password', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ email: data.email }),
  //     });
  //     
  //     if (response.ok) {
  //       setShowVerification(true);
  //       toast.success("verification sent");
  //     } else {
  //       throw new Error('Failed to send verification');
  //     }
  //   } catch (error) {
  //     toast.error("Failed to send verification code!");
  //   }
  // };

  // Current implementation (replace with API call)
  const onSubmit = async (data) => {
    try {
      setShowVerification(true);
      toast.success("verification sent", {
        position: "top-center",
        autoClose: 3000,
      });
    } catch (error) {
      toast.error("Failed to send verification code!", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  return (
    // Main container
    <div className="w-full h-screen relative">
      <ToastContainer />
      {/* Background image container */}
      <div className="w-full h-screen fixed inset-0">
        <img
          src="https://t3.ftcdn.net/jpg/02/30/40/58/360_F_230405854_4GiyHlXxufTXinwjqBnd49Cvpfhjh97b.jpg"
          alt="background"
          className="w-full h-full object-cover opacity-70"
        />
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
      {/* Form container */}
      <div className="absolute inset-0 flex items-center justify-center p-8 overflow-hidden">
        {!showVerification ? (
          // Initial password reset form
          <div className="w-full max-w-md space-y-6 bg-white dark:bg-gray-800 bg-opacity-90 rounded-xl shadow-2xl transform hover:scale-[1.02] transition-all duration-300">
            <h1 className="w-full px-5 py-3 bg-gray-600 dark:bg-gray-700 text-2xl font-bold text-left text-white mb-6 rounded-t-xl">
              Password Reset
            </h1>
            <div className="flex justify-center mb-4">
              <MdKey className="text-5xl text-gray-600 dark:text-gray-300" />
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6 px-6 pb-6 flex flex-col gap-2"
            >
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
                  Forgot Password?
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Enter your email address below and we'll send you instructions
                  to reset your password.
                </p>
                <div className="relative flex flex-col gap-4">
                  <div className="relative">
                    <MdEmail className="absolute left-3 top-3.5 text-gray-500 dark:text-gray-400 text-xl" />
                    <input
                      type="email"
                      placeholder="Enter your email"
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
              <div className="flex flex-col gap-3 pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-gray-600 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg"
                >
                  Send Verification Code
                </button>
                <Link to="/login" className="text-center">
                  <button className="text-gray-600 dark:text-gray-300 text-lg font-medium hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-300">
                    Back to Login
                  </button>
                </Link>
              </div>
            </form>
          </div>
        ) : (
          // Success message after verification code is sent
          <>
            <div className="w-[400px]  h-96 bg-white dark:bg-gray-800 bg-opacity-90 rounded-xl shadow-2xl p-6 flex flex-col items-center justify-between">
              <h1 className="w-full px-5 py-3 bg-gray-600 dark:bg-gray-700 text-2xl font-bold text-left text-white mb-6 rounded-t-xl">
                Password Reset
              </h1>
              <MdCheckCircleOutline className="text-zinc-600 dark:text-zinc-300 text-4xl mb-2" />
              <div className="bg-green-100 dark:bg-green-800 p-6 rounded-lg w-full h-1/3 flex flex-col items-center justify-center gap-3">
                <p className="text-green-700 dark:text-green-200 text-center text-lg font-medium">
                  Verification code has been sent to your email. Please check
                  your inbox!
                </p>
              </div>
              <Link to="/login" className="text-center mt-4">
                <button className="px-6 py-2 border-2 border-gray-300 dark:border-gray-400 text-gray-600 dark:text-gray-300 text-lg font-medium hover:text-gray-800 dark:hover:text-gray-100 hover:border-gray-500 dark:hover:border-gray-200 rounded-lg transition-all duration-300">
                  Back to Login
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;