import React from "react";
import Navbar from "../components/Navbar";
import SlideBar from "../components/SlideBar";
import { motion } from "framer-motion";

const Account = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-zinc-900">
        <Navbar />
        <div className="flex flex-col lg:flex-row">
          <SlideBar />
          <div className="bg-zinc-900 w-full lg:w-[95vw] text-white p-4 sm:p-6 lg:ml-[5vw]">
            <motion.header 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-between items-center mb-6">
              <div className="text-zinc-400">Last login: 7th February - 03:00 pm</div>
            </motion.header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-zinc-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4">Current Utilization</h3>
                <div className="flex items-center justify-between">
                  <motion.div 
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="w-28 h-28 rounded-full bg-gradient-to-r from-green-500 via-green-400 to-green-600 flex items-center justify-center text-xl relative">
                    <div className="absolute inset-2 rounded-full bg-zinc-800 flex items-center justify-center">
                      <span className="text-green-500 text-2xl font-bold">70%</span>
                    </div>
                  </motion.div>
                  <button className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors duration-300">View Details</button>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-zinc-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4">Current Machine Status</h3>
                <div className="space-y-4">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1 }}
                    className="flex items-center">
                    <div className="w-full bg-zinc-700 rounded-full h-5">
                      <div className="bg-gradient-to-r from-green-400 to-green-600 h-5 rounded-full transition-all duration-500" style={{width: '95%'}}></div>
                    </div>
                    <span className="ml-3 min-w-[80px]">98 Working</span>
                  </motion.div>
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="flex items-center">
                    <div className="w-full bg-zinc-700 rounded-full h-5">
                      <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-5 rounded-full transition-all duration-500" style={{width: '3%'}}></div>
                    </div>
                    <span className="ml-3 min-w-[80px]">3 Waiting</span>
                  </motion.div>
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="flex items-center">
                    <div className="w-full bg-zinc-700 rounded-full h-5">
                      <div className="bg-gradient-to-r from-red-400 to-red-600 h-5 rounded-full transition-all duration-500" style={{width: '2%'}}></div>
                    </div>
                    <span className="ml-3 min-w-[80px]">2 Errors</span>
                  </motion.div>
                </div>
                <button className="mt-4 px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors duration-300 w-full">View Status</button>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-zinc-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4">Tool Errors</h3>
                <div className="relative pt-1">
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-wrap gap-3 mb-4">
                    <div className="flex-1">
                      <span className="text-sm font-semibold px-3 py-2 rounded-full bg-gradient-to-r from-green-400 to-green-600 text-white">
                        86 Success
                      </span>
                    </div>
                    <div className="flex-1">
                      <span className="text-sm font-semibold px-3 py-2 rounded-full bg-gradient-to-r from-red-400 to-red-600 text-white">
                        46 Errors
                      </span>
                    </div>
                  </motion.div>
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1 }}
                    className="flex h-3 mb-4 overflow-hidden rounded-full bg-zinc-700">
                    <div style={{ width: "65%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-green-400 to-green-600"></div>
                    <div style={{ width: "35%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-red-400 to-red-600"></div>
                  </motion.div>
                  <p className="text-center font-semibold">Total Errors: 132 in 5 Jobs</p>
                </div>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-zinc-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 mb-6">
              <h3 className="text-xl font-semibold mb-4">Weekly Job Statistics</h3>
              <div className="bg-zinc-700 p-4 rounded-lg">
                <div className="h-48 sm:h-64 flex items-end justify-between space-x-2">
                  {[60, 80, 40, 90, 70, 50, 75].map((height, index) => (
                    <motion.div
                      key={index}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="w-1/7 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg cursor-pointer"
                      whileHover={{ height: `${height + 10}%` }}
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-4 text-sm text-zinc-400">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                    <span key={day} className="font-medium">{day}</span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-zinc-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 mb-6">
              <h3 className="text-xl font-semibold mb-4">Hall 3 Statistics</h3>
              <div className="space-y-6">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <span className="text-lg">Current utilization</span>
                    <span className="text-lg font-bold text-blue-500">75%</span>
                  </div>
                  <div className="overflow-hidden h-3 text-xs flex rounded-full bg-zinc-700">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "75%" }}
                      transition={{ duration: 1 }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-blue-400 to-blue-600"
                    />
                  </div>
                </motion.div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { value: 125, label: "Machines" },
                    { value: 35, label: "Waiting" },
                    { value: 17, label: "Inactive" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="text-center p-4 bg-gradient-to-br from-zinc-700 to-zinc-600 rounded-lg shadow-lg">
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.2 }}
                        className="text-3xl font-bold text-blue-400">{item.value}</motion.div>
                      <div className="text-sm text-zinc-300 mt-2">{item.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;