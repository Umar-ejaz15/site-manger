import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SlideBar from "../components/SlideBar";
import { useNavigate } from 'react-router-dom';
import { FiSettings, FiUser, FiClock, FiSearch, FiArrowUp, FiArrowDown } from 'react-icons/fi';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const SiteList = () => {
  // Initial state for machines with mock data
  const [machines, setMachines] = useState([
    { name: 'Machine 1', status: 'working', program: '12345', operatorId: '98765', progress: '82%', timeLeft: '01:45h' },
    { name: 'Machine 2', status: 'maintenance', program: '67890', operatorId: '43210', progress: '30%', timeLeft: '02:15h' },
    { name: 'Machine 3', status: 'idle', program: '24680', operatorId: '13579', progress: '95%', timeLeft: '00:15h' },
    { name: 'Machine 4', status: 'error', program: '11223', operatorId: '44556', progress: '60%', timeLeft: '03:30h' },
    { name: 'Machine 5', status: 'working', program: '99887', operatorId: '77665', progress: '45%', timeLeft: '01:20h' },
    { name: 'Machine 6', status: 'working', program: '55443', operatorId: '22334', progress: '15%', timeLeft: '04:00h' }
  ]);

  const [searchTerm, setSearchTerm] = useState({
    name: '',
    status: '',
    program: '',
    operatorId: '',
    timeLeft: ''
  });

  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const navigate = useNavigate();

  const handleSearch = (field, value) => {
    setSearchTerm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const getSortIcon = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === 'ascending' ? <FiArrowUp /> : <FiArrowDown />;
    }
    return null;
  };

  const sortedMachines = [...machines].sort((a, b) => {
    if (!sortConfig.key) return 0;
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? 1 : -1;
    }
    return 0;
  });

  const filteredMachines = sortedMachines.filter((machine) =>
    machine.name.toLowerCase().includes(searchTerm.name.toLowerCase()) &&
    machine.status.toLowerCase().includes(searchTerm.status.toLowerCase()) &&
    machine.program.toLowerCase().includes(searchTerm.program.toLowerCase()) &&
    machine.operatorId.toLowerCase().includes(searchTerm.operatorId.toLowerCase()) &&
    machine.timeLeft.toLowerCase().includes(searchTerm.timeLeft.toLowerCase())
  );

  return (
    <>
      <div className="w-full min-h-screen bg-zinc-900 text-white">
        <Navbar />
        <div className="flex flex-col md:flex-row">
          <SlideBar />
          <div className="flex-1 w-full md:w-[95vw] md:ml-[5vw] p-1">
            <div className="bg-zinc-800 rounded-lg shadow-lg p-2 md:p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-4 mb-6">
                <div className="flex items-center bg-zinc-700 rounded-lg px-3">
                  <FiSearch className="text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by name"
                    className="bg-transparent border-none focus:outline-none p-2 w-full text-white"
                    onChange={(e) => handleSearch('name', e.target.value)}
                  />
                </div>
                <div className="flex items-center bg-zinc-700 rounded-lg px-3">
                  <FiSearch className="text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by status"
                    className="bg-transparent border-none focus:outline-none p-2 w-full text-white"
                    onChange={(e) => handleSearch('status', e.target.value)}
                  />
                </div>
                <div className="flex items-center bg-zinc-700 rounded-lg px-3">
                  <FiSearch className="text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by program"
                    className="bg-transparent border-none focus:outline-none p-2 w-full text-white"
                    onChange={(e) => handleSearch('program', e.target.value)}
                  />
                </div>
                <div className="flex items-center bg-zinc-700 rounded-lg px-3">
                  <FiSearch className="text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by operator ID"
                    className="bg-transparent border-none focus:outline-none p-2 w-full text-white"
                    onChange={(e) => handleSearch('operatorId', e.target.value)}
                  />
                </div>
                <div className="flex items-center bg-zinc-700 rounded-lg px-3">
                  <FiSearch className="text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by time left"
                    className="bg-transparent border-none focus:outline-none p-2 w-full text-white"
                    onChange={(e) => handleSearch('timeLeft', e.target.value)}
                  />
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full table-auto bg-zinc-800 rounded-lg text-white">
                  <thead>
                    <tr>
                      <th onClick={() => handleSort('name')} className="py-2 px-4 text-left cursor-pointer hover:bg-zinc-700">
                        Name {getSortIcon('name')}
                      </th>
                      <th className="py-2 px-4 text-left">Station Status</th>
                      <th onClick={() => handleSort('status')} className="py-2 px-4 text-left cursor-pointer hover:bg-zinc-700">
                        Status {getSortIcon('status')}
                      </th>
                      <th onClick={() => handleSort('program')} className="py-2 px-4 text-left cursor-pointer hover:bg-zinc-700">
                        Program {getSortIcon('program')}
                      </th>
                      <th onClick={() => handleSort('operatorId')} className="py-2 px-4 text-left cursor-pointer hover:bg-zinc-700">
                        Operator ID {getSortIcon('operatorId')}
                      </th>
                      <th onClick={() => handleSort('progress')} className="py-2 px-4 text-left cursor-pointer hover:bg-zinc-700">
                        Progress {getSortIcon('progress')}
                      </th>
                      <th onClick={() => handleSort('timeLeft')} className="py-2 px-4 text-left cursor-pointer hover:bg-zinc-700">
                        Time Left {getSortIcon('timeLeft')}
                      </th>
                      <th className="py-2 px-4 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredMachines.map((machine, index) => (
                      <tr
                        key={index}
                        className="hover:bg-zinc-700 cursor-pointer"
                        onClick={() => navigate(`/machine/${machine.name}`)}
                      >
                        <td className="py-2 px-4 whitespace-nowrap">{machine.name}</td>
                        <td className="py-2 px-4 whitespace-nowrap">1 2 3 4 5 6</td>
                        <td className="py-2 px-4 whitespace-nowrap">
                          <span className="text-green-500">working</span>
                        </td>
                        <td className="py-2 px-4 whitespace-nowrap">{machine.program}</td>
                        <td className="py-2 px-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <FiUser className="mr-2" /> {machine.operatorId}
                          </div>
                        </td>
                        <td className="py-2 px-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <AiOutlineLoading3Quarters className="animate-spin mr-2" /> {machine.progress}
                          </div>
                        </td>
                        <td className="py-2 px-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <FiClock className="mr-2" /> {machine.timeLeft}
                          </div>
                        </td>
                        <td className="py-2 px-4 whitespace-nowrap">
                          <FiSettings />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SiteList;