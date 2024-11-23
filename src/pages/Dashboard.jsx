import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { FaTrash, FaCog, FaTachometerAlt, FaSitemap } from "react-icons/fa";
import SlideBar from "../components/SlideBar";
import { motion } from "framer-motion";

// To integrate your API:
// 1. Create an API service file (e.g., api/titleService.js)
// 2. Use axios or fetch to make HTTP requests
// 3. Replace the static data with API calls in useEffect
// Example API integration:
/*
import axios from 'axios';

const API_URL = 'your-api-base-url';

export const getTitles = () => axios.get(`${API_URL}/titles`);
export const createTitle = (data) => axios.post(`${API_URL}/titles`, data);
export const updateTitle = (id, data) => axios.put(`${API_URL}/titles/${id}`, data);
export const deleteTitle = (id) => axios.delete(`${API_URL}/titles/${id}`);
*/

const Dashboard = () => {
  // State management for titles and UI controls
  const [titles, setTitles] = useState([
    { id: 1, name: "Project Management System", uuid: "uuid-123-456" },
    { id: 2, name: "E-commerce Platform", uuid: "uuid-789-012" },
    { id: 3, name: "Social Media App", uuid: "uuid-345-678" },
    { id: 4, name: "CRM Software", uuid: "uuid-901-234" },
    { id: 5, name: "Blog Platform", uuid: "uuid-567-890" },
    { id: 6, name: "Task Management App", uuid: "uuid-123-456" },
    { id: 7, name: "E-learning Platform", uuid: "uuid-789-012" },
    { id: 8, name: "Inventory Management System", uuid: "uuid-345-678" },
    // ...other titles
  ]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showEditForm, setShowEditForm] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState(null);
  const [newTitle, setNewTitle] = useState({ name: "", uuid: "" });

  // Handle delete operation
  const handleDelete = (id) => {
    setTitles(titles.filter((title) => title.id !== id));
  };

  // Handle edit operation
  const handleEdit = (title) => {
    setSelectedTitle(title);
    setShowEditForm(true);
    setShowAddForm(false);
  };

  // Handle save changes operation
  const handleSaveChanges = (e) => {
    e.preventDefault();
    const updatedTitles = titles.map((title) =>
      title.id === selectedTitle.id ? selectedTitle : title
    );
    setTitles(updatedTitles);
    setShowEditForm(false);
  };

  // Handle add new title operation
  const handleAddTitle = (e) => {
    e.preventDefault();
    const newId = Math.max(...titles.map((t) => t.id)) + 1;
    setTitles([{ ...newTitle, id: newId }, ...titles]);
    setNewTitle({ name: "", uuid: "" });
    setShowAddForm(false);
  };

  // Filter titles based on search query
  const filteredTitles = titles.filter((title) =>
    title.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full min-h-screen bg-zinc-900">
      <Navbar />
      <div className="flex flex-col md:flex-row">
        <SlideBar />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-1 w-full md:w-[95vw] md:ml-[5vw] p-2"
        >
          <div className="bg-zinc-800 rounded-lg shadow-xl p-4 md:p-8">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
              <motion.h1 
                initial={{ x: -20 }}
                animate={{ x: 0 }}
                className="text-2xl font-bold text-white"
              >
                Titles
              </motion.h1>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setShowAddForm(true);
                  setShowEditForm(false);
                }}
                className="w-full md:w-auto bg-zinc-700 hover:bg-zinc-600 text-white px-6 py-2 rounded-lg shadow-md"
              >
                Add New Title
              </motion.button>
            </div>

            <div className="mb-8">
              <motion.input
                initial={{ y: -10 }}
                animate={{ y: 0 }}
                type="text"
                placeholder="Search titles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-3 border rounded-lg bg-zinc-700 text-white border-zinc-600 focus:ring-2 focus:ring-zinc-500 focus:border-zinc-500 shadow-md"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {filteredTitles.map((title) => (
                <motion.div
                  key={title.id}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="w-full h-[200px] md:h-[250px] lg:h-[280px] justify-center items-center bg-zinc-700 p-4 md:p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-base md:text-lg mb-2 md:mb-3 truncate text-white">
                          {title.name}
                        </h3>
                        <p className="text-gray-300 text-xs md:text-sm break-all">
                          {title.uuid}
                        </p>
                      </div>
                      <div className="flex gap-2 md:gap-3 ml-2 md:ml-3">
                        <motion.button
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => handleEdit(title)}
                          className="text-zinc-300 hover:text-zinc-100"
                        >
                          <FaCog size={16} />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => handleDelete(title.id)}
                          className="text-red-400 hover:text-red-300"
                        >
                          <FaTrash size={16} />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {showEditForm && (
            <motion.div
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              exit={{ x: 300 }}
              className="fixed right-0 top-0 h-full w-full md:w-96 bg-zinc-800 shadow-2xl z-50"
            >
              <div className="p-4 md:p-8">
                <h2 className="text-xl font-bold mb-8 text-white">
                  Edit Title
                </h2>
                <form onSubmit={handleSaveChanges} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white">
                      Name
                    </label>
                    <input
                      type="text"
                      value={selectedTitle?.name || ""}
                      onChange={(e) =>
                        setSelectedTitle({
                          ...selectedTitle,
                          name: e.target.value,
                        })
                      }
                      className="w-full p-3 border rounded-lg bg-zinc-700 text-white border-zinc-600 focus:ring-2 focus:ring-zinc-500 focus:border-zinc-500 shadow-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white">
                      Invite User
                    </label>
                    <input
                      type="email"
                      placeholder="Enter email address"
                      className="w-full p-3 border rounded-lg bg-zinc-700 text-white border-zinc-600 focus:ring-2 focus:ring-zinc-500 focus:border-zinc-500 shadow-md"
                    />
                  </div>
                  <div className="flex justify-end gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="button"
                      onClick={() => setShowEditForm(false)}
                      className="px-6 py-2 border border-zinc-600 rounded-lg hover:bg-zinc-700 text-white shadow-md"
                    >
                      Cancel
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="submit"
                      className="bg-zinc-700 hover:bg-zinc-600 text-white px-6 py-2 rounded-lg shadow-md"
                    >
                      Save Changes
                    </motion.button>
                  </div>
                </form>
              </div>
            </motion.div>
          )}

          {showAddForm && (
            <motion.div
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              exit={{ x: 300 }}
              className="fixed right-0 top-0 h-full w-full md:w-96 bg-zinc-800 shadow-2xl z-50"
            >
              <div className="p-4 md:p-8">
                <h2 className="text-xl font-bold mb-8 text-white">
                  Add New Title
                </h2>
                <form onSubmit={handleAddTitle} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white">
                      Name
                    </label>
                    <input
                      type="text"
                      value={newTitle.name}
                      onChange={(e) =>
                        setNewTitle({
                          ...newTitle,
                          name: e.target.value,
                        })
                      }
                      className="w-full p-3 border rounded-lg bg-zinc-700 text-white border-zinc-600 focus:ring-2 focus:ring-zinc-500 focus:border-zinc-500 shadow-md"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white">
                      UUID
                    </label>
                    <input
                      type="text"
                      value={newTitle.uuid}
                      onChange={(e) =>
                        setNewTitle({
                          ...newTitle,
                          uuid: e.target.value,
                        })
                      }
                      className="w-full p-3 border rounded-lg bg-zinc-700 text-white border-zinc-600 focus:ring-2 focus:ring-zinc-500 focus:border-zinc-500 shadow-md"
                      required
                    />
                  </div>
                  <div className="flex justify-end gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="button"
                      onClick={() => setShowAddForm(false)}
                      className="px-6 py-2 border border-zinc-600 rounded-lg hover:bg-zinc-700 text-white shadow-md"
                    >
                      Cancel
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="submit"
                      className="bg-zinc-700 hover:bg-zinc-600 text-white px-6 py-2 rounded-lg shadow-md"
                    >
                      Add Title
                    </motion.button>
                  </div>
                </form>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;