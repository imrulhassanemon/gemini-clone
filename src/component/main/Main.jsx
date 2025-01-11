import React from "react";
import { assets } from "../../../public/assets";

const Main = () => {
  return (
    <div className="w-full">
      <div className="w-full">
        <div className="flex items-center justify-between mx-4">
          <p className="text-3xl">Gemini</p>
          <img
            className="w-[40px] rounded-full "
            src={assets.user_icon}
            alt=""
          />
        </div>
        <div className="main-container relative">
          <div className="text-[56px] mt-[50px] text-[#c4c7c5] font-semibold p-5 ">
            <p>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4f90ff] via-purple-500 to-[#ff5546]">
                Hello, Dev
              </span>
            </p>
            <p>How can I help you today?</p>
          </div>
          <div className="grid grid-cols-4 gap-4 text-center min ">
            <div className="relative card rounded-xl bg-[#f0f4f9] p-4 h-[200px] cursor-pointer">
              <p>Suggest beautiful place to see on an upcoming road trip</p>
              <img src={assets.compass_icon} alt="" />
            </div>
            <div className="relative card rounded-xl bg-[#f0f4f9] p-4 h-[200px] cursor-pointer">
              <p>Briefly summarize this concept: urban planning</p>
              <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="relative card rounded-xl bg-[#f0f4f9] p-4 h-[200px] cursor-pointer">
              <p>Brainstorm team bonding activities for our work retreat</p>
              <img src={assets.message_icon} alt="" />
            </div>
            <div className="relative card rounded-xl bg-[#f0f4f9] p-4 h-[200px] cursor-pointer">
              <p>Improve the readability of the follwing code</p>
              <img src={assets.code_icon} alt="" />
            </div>
          </div>
        </div>
        <div className="main-container border  ">
          <div className="absolute top-80 w-full">
            <div className="serch-box flex  ">
              <input type="text " placeholder="Enter a prompt here" />
              <div className="images flex  ">
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
                <img src={assets.send_icon} alt="" />
              </div>
            </div>
            <div>
                <p className="text-center mt-3 text-xl">Gemini can make mistakes, so double-check it</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
