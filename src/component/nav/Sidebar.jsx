import { Link } from "react-router-dom";
import { useState } from "react";
import MiniFooter from "./MiniFooter";

export default function Sidebar() {
  const [clicked, setClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const switcher = () => {
    setClicked(true);
  };
  return (
    <div className="min-w-[450px] top-0 sticky h-screen bg-black p-2 flex flex-col">
      <div
        className="Container1 text-neutral-300 p-6 rounded-2xl mb-2"
        style={{ backgroundColor: "rgba(18,18,18,255)" }}
      >
        <Link to={"/"}>
          <img
            src="src/assets/Spotify.png"
            alt="spotify"
            className="h-8 mb-6 w-fit"
            
          />
        </Link>

        <div className="w-fit mt-4 mb-7 font-bold text-xl">
          <Link
            to={"/"}
            className={`flex items-center ${clicked ? "" : "text-white"}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6 mr-3 text-black"
              fill={!clicked ? "white" : "none"}
            >
              <path
                stroke="white"
                strokeWidth="2"
                d="M12 2L2 12h4v9h12v-9h4L12 2zm0 16h"
              />
            </svg>
            <h1 className="hover:text-white">Home</h1>
          </Link>
        </div>

        <div className="mt-4 font-bold text-xl" id="search">
          <Link
            to={"/Searchpage"}
            className={`flex items-center ${clicked ? "text-white" : ""}`}
            onClick={switcher}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
              <circle
                cx={clicked ? "11" : ""}
                cy={clicked ? "11" : ""}
                r={clicked ? "4" : ""}
                fill="white"
              />
            </svg>
            <h1 className="ml-3 hover:text-white">Search</h1>
          </Link>
        </div>
      </div>

      <div
        className="second-container flex-grow h-screen text-white p-4 rounded-t-2xl flex flex-col items-between relative"
        style={{
          backgroundColor: "rgba(18,18,18,255)",
        }}
      >
        <div className="flex justify-between mb-5">
          <div
            className="flex gap-4 cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <svg
              viewBox="0 0 24 24"
              className={`w-[30px] ml-3 ${
                isHovered ? "fill-white" : "fill-gray-400"
              }`}
              style={{ transition: "fill 0.3s ease-in-out" }}
            >
              <path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path>
            </svg>
            <h1
              className={`text-xl self-center mt-1 ${
                isHovered ? "text-white" : "text-gray-400"
              }`}
              style={{ transition: "color 0.3s ease-in-out" }}
            >
              Your Library
            </h1>
          </div>

          <button
            className="rounded-full p-2 transition duration-300 ease-in-out hover:bg-rgba-36"
            style={{ backgroundColor: "transparent" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "rgba(36, 36, 36, 255)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "transparent")
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path
                d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"
                className="fill-white"
              ></path>
            </svg>
          </button>
        </div>

        <div
          className="text-white p-4 rounded-2xl mb-6"
          style={{ backgroundColor: "rgba(36,36,36,255)" }}
        >
          <div className="ml-2 p-2">
            <h1 className="mb-3 font-extrabold text-xl">
              Create your first playlist
            </h1>
            <h2 className="mb-4">It's easy, we'll help you</h2>
            <button className="bg-white text-black p-3 rounded-full font-bold hover:bg-gray-200 transform transition-transform hover:scale-105">
              Create playlist
            </button>
          </div>
        </div>

        <div
          className="text-white p-4 rounded-2xl"
          style={{ backgroundColor: "rgba(36,36,36,255)" }}
        >
          <div className="ml-2 p-2">
            <h1 className="mb-3 font-extrabold text-xl">
              Let's find some podcasts to follow
            </h1>
            <h2 className="mb-4">We'll keep you updated on new episodes</h2>
            <button className="bg-white text-black p-3 rounded-full font-bold hover:bg-gray-200 transform transition-transform hover:scale-105">
              Browse podcasts
            </button>
          </div>
        </div>
      </div>
      <div className=" sticky bottom-0">
        <MiniFooter />
      </div>
    </div>
  );
}
