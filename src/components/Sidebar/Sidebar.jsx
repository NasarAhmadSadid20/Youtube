import React from "react";
import { AiFillHome } from "react-icons/ai";
import { SiYoutubeshorts } from "react-icons/si";
import { HiX } from "react-icons/hi";
import { CgPlayList } from "react-icons/cg";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineSubscriptions, MdOutlineWatchLater } from "react-icons/md";
import { RiVideoLine } from "react-icons/ri";
import { GoHistory, GoLightBulb } from "react-icons/go";
import { GrLike } from "react-icons/gr";
import { PiMusicNote, PiCoatHanger } from "react-icons/pi";
import { BsBroadcast } from "react-icons/bs";
import { SiYoutubegaming } from "react-icons/si";
import { BiNews } from "react-icons/bi";
import { GiTrophyCup } from "react-icons/gi";

const Sidebar = ({ open, setOpen }) => {
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={`fixed top-[80px] left-0 bg-black h-[91vh] z-50 transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"} 
        lg:translate-x-0 lg:w-[17%] w-[70%] sm:w-[50%]`}
      >
        <div className="w-full h-full px-3 text-white overflow-y-hidden hover:overflow-y-auto">
          <div className="flex justify-end py-2 lg:hidden">
            <HiX
              size={24}
              className="cursor-pointer"
              onClick={() => setOpen(false)}
            />
          </div>

          <ul className="border-b border-gray-600 py-2">
            <li className="flex items-center gap-3 py-2 cursor-pointer">
              <AiFillHome /> Home
            </li>
            <li className="flex items-center gap-3 py-2 cursor-pointer">
              <SiYoutubeshorts /> Shorts
            </li>
          </ul>

          <ul className="border-b border-gray-600 py-2">
            <li className="mb-2">Subscriptions</li>

            {[1, 2, 3, 4, 5].map((i) => (
              <li
                key={i}
                className="flex items-center gap-3 py-2 cursor-pointer"
              >
                <img
                  src={`https://i.pravatar.cc/30?img=${i}`}
                  className="w-6 h-6 rounded-full"
                />
                Channel{i}
              </li>
            ))}
          </ul>

          <ul className="py-2">
            <li className="flex items-center gap-3 py-2 cursor-pointer">
              <CgPlayList /> Playlist
            </li>
            <li className="flex items-center gap-3 py-2 cursor-pointer">
              <FaRegUserCircle /> Your Channel
            </li>
            <li className="flex items-center gap-3 py-2 cursor-pointer">
              <MdOutlineSubscriptions /> Subscriptions
            </li>
            <li className="flex items-center gap-3 py-2 cursor-pointer">
              <GoHistory /> History
            </li>
            <li className="flex items-center gap-3 py-2 cursor-pointer">
              <MdOutlineWatchLater /> Watch Later
            </li>
            <li className="flex items-center gap-3 py-2 cursor-pointer">
              <GrLike /> Liked Videos
            </li>
            <li className="flex items-center gap-3 py-2 cursor-pointer">
              <RiVideoLine /> Videos
            </li>
            <li className="flex items-center gap-3 py-2 cursor-pointer">
              <PiMusicNote /> Music
            </li>
            <li className="flex items-center gap-3 py-2 cursor-pointer">
              <BsBroadcast /> Live
            </li>
            <li className="flex items-center gap-3 py-2 cursor-pointer">
              <SiYoutubegaming /> Gaming
            </li>
            <li className="flex items-center gap-3 py-2 cursor-pointer">
              <BiNews /> News
            </li>
            <li className="flex items-center gap-3 py-2 cursor-pointer">
              <GiTrophyCup /> Sports
            </li>
            <li className="flex items-center gap-3 py-2 cursor-pointer">
              <GoLightBulb /> Learning
            </li>
            <li className="flex items-center gap-3 py-2 cursor-pointer">
              <PiCoatHanger /> Fashion
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
