import React from "react";
import {
  FaYoutube,
  FaSearch,
  FaMicrophone,
  FaBell,
  FaUserCircle,
  FaPlus,
} from "react-icons/fa";
import { HiMenu } from "react-icons/hi";

const Navbar = ({ setOpen, searchOpen, setSearchOpen }) => {
  return (
    <>
      <div className="w-full h-[80px] bg-black flex items-center justify-between px-4 fixed top-0 left-0 z-50">
        <div className="flex items-center gap-3">
          <HiMenu
            className="text-white text-2xl cursor-pointer lg:hidden"
            onClick={() => setOpen(true)}
          />

          <div className="flex items-center gap-1 cursor-pointer">
            <FaYoutube className="text-red-600 text-3xl" />
            <h1 className="text-white font-bold text-lg">YouTube</h1>
          </div>
        </div>

        <div className="hidden md:flex items-center w-[40%]">
          <input
            type="text"
            placeholder="Search"
            className="w-full h-10 bg-black border border-gray-600 rounded-l-full px-3 text-white outline-none"/>

          <div className="w-12 h-10 bg-neutral-800 flex items-center justify-center rounded-r-full border border-gray-600 cursor-pointer">
            <FaSearch className="text-white" />
          </div>

          <div className="w-10 h-10 bg-neutral-800 flex items-center justify-center rounded-full ml-2 cursor-pointer">
            <FaMicrophone className="text-white" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="md:hidden flex items-center">
            {!searchOpen && (
              <FaSearch
                className="text-white text-xl cursor-pointer"
                onClick={() => setSearchOpen(true)}
              />
            )}

            {searchOpen && (
              <input
                autoFocus
                type="text"
                placeholder="Search"
                className="w-[8rem] h-9 bg-black border border-gray-600 rounded-full px-3 text-white outline-none"
                onBlur={() => setSearchOpen(false)}
              />
            )}
          </div>

          <button className="hidden md:flex items-center gap-2 bg-neutral-800 px-3 py-1.5 rounded-full text-white hover:bg-neutral-600">
            <FaPlus />
            Create
          </button>

          <FaBell className="text-white text-xl cursor-pointer" />
          <FaUserCircle className="text-white text-2xl cursor-pointer" />
        </div>
      </div>

      <div className="w-full h-[70px] translate-y-[80px] bg-black fixed top-0 z-40">
        <div className="flex lg:hidden items-center px-2 overflow-x-auto whitespace-nowrap w-full ">
          <button className="mx-1 bg-white text-black px-3 py-1.5 rounded-lg text-[0.9rem] shrink-0">
            All
          </button>

          {[
            "Music",
            "React",
            "AI",
            "Web",
            "Flutter",
            "Podcasts",
            "English",
            "Mixes",
          ].map((item, i) => (
            <button
              key={i}
              className="mx-1 bg-neutral-800 text-white px-3 py-1.5 rounded-lg text-[0.9rem] m-3"
            >
              {item}
            </button>
          ))}
        </div>

        <div className="hidden lg:flex items-center justify-center gap-2 w-full h-full">
          <button className="bg-white text-black px-4 py-2 rounded-lg text-[1rem] ">
            All
          </button>

          {[
            "Music",
            "React",
            "AI",
            "Web",
            "Flutter",
            "Podcasts",
            "English",
            "Mixes",
          ].map((item, i) => (
            <button
              key={i}
              className="bg-neutral-800 text-white px-4 py-2 rounded-lg text-[1rem] hover:bg-white hover:text-black transition 2s"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
