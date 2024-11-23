import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaChartBar, FaGlobe, FaBars } from 'react-icons/fa'

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <button 
        onClick={toggleSidebar} 
        className="lg:hidden fixed top-4 left-4 z-20 p-2 rounded-md bg-zinc-700 text-zinc-300 hover:bg-zinc-600"
      >
        <FaBars className="text-2xl" />
      </button>
      <div className={`${isOpen ? 'translate-x-0' : '-translate-x-40'} lg:translate-x-0 w-[5vw] top-0 left-0 h-screen fixed bg-zinc-800 shadow-lg transition-transform duration-300 ease-in-out z-10`}>
        <div className="p-4">
          <div className="flex flex-col items-center justify-between">
            <div className="flex flex-col gap-10 mt-20 items-center">
              <Link to="/dashboard" className="hover:text-zinc-100 transition-colors">
                <FaChartBar className="text-2xl text-zinc-300" />
              </Link>
              <Link to="/addsite" className="hover:text-zinc-100 transition-colors">
                <FaGlobe className="text-2xl text-zinc-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SideBar