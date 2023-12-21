import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const goBack = () => {
    window.history.back();
  };
  const goForward = () => {
    window.history.forward();
  };

  return (
    <div
      className="h-[100px] flex justify-between items-center mt-2"
      style={{ backgroundColor: "rgba(5,5,5,255)" }}
    >
      <div className="text-white flex items-center justify-center ml-10 gap-2">
        <button className="p-2 hover:bg-rgba-36-36-36-255 rounded-full" onClick={goBack}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 28 24"
            width="40"
            height="40"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M23 12M16 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="p-2 rounded-full hover:bg-rgba-36-36-36-255 self-center" onClick={goForward}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 28 24"
            width="40"
            height="40"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <div className="flex text-white p-4">
        <Link to={"/Signuppage"}>
          <button className=" h-[60px] p-2  w-[100px] font-bold rounded-3xl opacity-70 transform hover:scale-110 hover:opacity-100">
            Sign up
          </button>
        </Link>
        <Link to={"/Loginpage"}>
          <button className=" h-[60px] p-2 bg-white text-black font-bold w-[120px] rounded-full transform hover:scale-110 hover:bg-gray-100">
            Log in
          </button>
        </Link>
      </div>
    </div>
  );
}
