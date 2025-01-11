import React from "react";
import { assets } from "../../../public/assets";
import { FaGem } from "react-icons/fa";

const Sidbar = () => {
  return (
    <div className="sidebar py-6 px-4 inline-flex flex-col justify-between bg-[#f0f4f9]">
      <div>
        <img
          className="block ml-3 cursor-pointer"
          src={assets.menu_icon}
          alt=""
        />
        <div className="mt-2 text-[16px] border-gray-500 rounded-full text-center bg-gray-300 inline-flex gap-2 px-4 py-2 cursor-pointer">
          <img src={assets.plus_icon} alt="" />
          <p>New Chat</p>
        </div>
        <div className="mt-8 mb-20  ">
          <p>Recent</p>
          <div className="flex items-center gap-3 ml-3 mt-3 hover:bg-[#e2e6eb] px-4 py-2  rounded-full cursor-pointer">
            <img src={assets.message_icon} alt="" />
            <p>What is React ...</p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex cursor-pointer gap-3 items-center hover:bg-slate-300 px-4 py-2 rounded-full  mt-3 pr-3">
          <p className="cursor-pointer object-cover text-xl"><FaGem /></p>
          <p>Gem manager</p>
        </div>
        <div className="flex cursor-pointer gap-3 hover:bg-slate-300 px-4 py-2 rounded-full object-cover mt-3 pr-3">
          <img
            className="cursor-pointer object-cover"
            src={assets.question_icon}
            alt=""
          />
          <p>Help</p>
        </div>
        <div className="flex cursor-pointer hover:bg-slate-300 px-4 py-2 rounded-full gap-3 object-cover mt-3 pr-3">
          <img
            className="cursor-pointer object-cover"
            src={assets.history_icon}
            alt=""
          />
          <p>Activity</p>
        </div>
        <div className="flex cursor-pointer hover:bg-slate-300 px-4 py-2 rounded-full gap-3  mt-3 pr-3">
          <img
            className="cursor-pointer object-cover"
            src={assets.setting_icon}
            alt=""
          />
          <p>Settings</p>
        </div>
      </div>
    </div>
  );
};

export default Sidbar;
