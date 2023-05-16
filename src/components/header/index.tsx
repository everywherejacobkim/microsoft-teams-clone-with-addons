import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsPersonFillCheck } from 'react-icons/bs';

interface HeaderProps {
  username: string;
}

const Header: React.FC<HeaderProps> = ({ username }) => {
  return (
    <header className="bg-primary">
      <div className="mx-5 py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div>
          <h1 className="text-white text-2xl font-bold">Microsoft Teams</h1>
        </div>
        <div className="flex items-center">
          <div className="relative mr-4 md:w-[600px]">
            <input
              type="text"
              className="w-full bg-primary-light placeholder-primary opacity-80 text-black rounded-md focus:bg-white py-2 pl-4"
              placeholder="   Search"
            />
            <span className="absolute left-0 inset-y-0 flex items-center mr-5 pl-1">
              <AiOutlineSearch className="text-primary w-5 h-5" />
            </span>
          </div>
        </div>
        <div className="rounded-full bg-cyan-500 opacity-80 h-10 w-10 flex items-center justify-center">
          <span className="text-white">
            <BsPersonFillCheck className="w-6 h-6" />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
