import React from 'react';
import { FaRegBell } from 'react-icons/fa';
import { BsChatText } from 'react-icons/bs';
import { IoCalendarOutline } from 'react-icons/io5';

const Sidebar: React.FC = () => {
  return (
    <div className="flex flex-col h-screen w-24 bg-gray-200 text-gray-700">
      <nav className="flex-1">
        <ul className="mt-4">
          <li className="flex flex-col items-center justify-center px-4 py-4 hover:bg-white hover:text-primary hover:cursor-pointer">
              <FaRegBell className="w-6 h-6" />
              <p>Activity</p>
          </li>
          <li className="flex flex-col items-center justify-center px-4 py-4 hover:bg-white hover:text-primary hover:cursor-pointer">
              <BsChatText className="w-6 h-6" />
              <p>Chat</p>
          </li>
          <li className="flex flex-col items-center justify-center px-4 py-4 hover:bg-white hover:text-primary hover:cursor-pointer">
              <IoCalendarOutline className="w-6 h-6" />
              <p>Calendar</p>
          </li>
        </ul>
      </nav>
    </div>
  )
};

export default Sidebar;