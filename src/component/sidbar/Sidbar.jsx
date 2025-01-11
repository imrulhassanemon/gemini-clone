import React, { useState } from "react";
import { assets } from "../../../public/assets";
import { FaGem } from "react-icons/fa";

const Sidbar = () => {

    const [hide, setHide] = useState(false)

  return (
    <div className="sidebar py-6 px-4 inline-flex flex-col justify-between bg-[#f0f4f9]">
      <div>
        <img
            onClick={()=>setHide(pre => !pre)}
          className="block ml-3 cursor-pointer mb-4"
          src={assets.menu_icon}
          alt=""
        />
        <div className={hide?`mt-2 text-[16px] border-gray-500 rounded-full text-center bg-gray-300 inline-flex gap-2 px-4 py-2 cursor-pointer`: 'bg-gray-300 px-1 py-1 rounded-full flex justify-center'} >
          <img src={assets.plus_icon} alt="" />
          {hide?<p>New Chat</p>:null}
        </div>
        {hide?<div className="mt-8 mb-20  ">
          <p>Recent</p>
          <div className="flex items-center gap-2 w-full ml-2 mt-3 hover:bg-[#e2e6eb] px-4 py-2  rounded-full cursor-pointer">
            <img src={assets.message_icon} alt="" />
            <p>What is React ...</p>
          </div>
        </div>:null}
      </div>
      <div>
        <div className="flex cursor-pointer gap-3 items-center hover:bg-slate-300 px-4 py-2 rounded-full  mt-3 pr-3">
          <p className="cursor-pointer object-cover text-xl"><FaGem /></p>
          {hide?<p>Gem manager</p>:null}
        </div>
        <div className="flex cursor-pointer gap-3 hover:bg-slate-300 px-4 py-2 rounded-full object-cover mt-3 pr-3">
          <img
            className="cursor-pointer object-cover"
            src={assets.question_icon}
            alt=""
          />
          {hide?<p>Help</p>:null}
        </div>
        <div className="flex cursor-pointer hover:bg-slate-300 px-4 py-2 rounded-full gap-3 object-cover mt-3 pr-3">
          <img
            className="cursor-pointer object-cover"
            src={assets.history_icon}
            alt=""
          />
          {hide?<p>Activity</p>:null}
        </div>
        <div className="flex cursor-pointer hover:bg-slate-300 px-4 py-2 rounded-full gap-3  mt-3 pr-3">
          <img
            className="cursor-pointer object-cover"
            src={assets.setting_icon}
            alt=""
          />
          {hide?<p>Settings</p>:null}
        </div>
      </div>
    </div>
  );
};

export default Sidbar;
