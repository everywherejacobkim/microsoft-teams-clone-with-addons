import React from 'react';
import { FaRegBell } from 'react-icons/fa';
import { BsChatText } from 'react-icons/bs';
import { IoCalendarOutline } from 'react-icons/io5';
import { RxLapTimer } from 'react-icons/rx';
import { MdFiberNew } from 'react-icons/md';

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
          <li className="relative flex flex-col items-center justify-center px-4 py-4 hover:bg-white hover:text-primary hover:cursor-pointer">
            <RxLapTimer className="w-6 h-6" />
            <MdFiberNew className="absolute top-1 left-6 w-5 h-5 text-violet-500" />
              <p>Pomodoro</p>
          </li>
        </ul>
      </nav>
    </div>
  )
};

export default Sidebar;