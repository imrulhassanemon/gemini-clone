import React, { useContext } from "react";
import { assets } from "../../../public/assets";
import { Context } from "../../context/context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);
  console.log(input);

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
        {!showResult ? (
          <>
            {" "}
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
          </>
        ) : (
          <div className="max-w-[1300px] mx-auto h-[380px]">
            <div className="flex items-center gap-3">
              <img
                className="w-12 rounded-full"
                src={assets.user_icon}
                alt=""
              />
              <p className="text-[] font-semibold">{recentPrompt}</p>
            </div>
            <div className="heights gap-3 flex items-start">
              <img className="w-14 " src={assets.gemini_icon} alt="" />
              {
                loading?<> <div className="flex  flex-col gap-4 w-full">
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
              </div></>:<p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              }
              
            </div>
          </div>
        )}
        <div className="main-container">
          <div
            className={
              !showResult
                ? `absolute top-80 w-full`
                : "absolute top-[400px] max-h-screen w-full"
            }
          >
            <div className="serch-box flex  ">
              <input
                onChange={(e) => setInput(e.target.value)}
                value={input}
                type="text "
                placeholder="Ask Gemini"
              />
              <div className="images flex  ">
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
                <img onClick={(e) => onSent()} src={assets.send_icon} alt="" />
              </div>
            </div>
            <div>
              <p className="text-center mt-3 text-xl">
                Gemini can make mistakes, so double-check it
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
