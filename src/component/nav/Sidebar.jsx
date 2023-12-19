import { Link } from "react-router-dom";
import Wrapper from "../common/Wrapper.jsx";
import SvgSwitcher from "../Svg/SvgSwitcher.jsx";
import LanguageModal from "../modal/LanguageModal.jsx";
import { useState, useEffect } from "react";
import Modal from "../modal/LanguageModal.jsx";

export default function Sidebar() {
  const [svgPath, setSvgPath] = useState(
    "M1.126 10.558c0-5.14 4.226-9.28 9.407-9.28 5.18 0 9.407 4.14 9.407 9.28a9.157 9.157 0 0 1-2.077 5.816l4.344 4.344a1 1 0 0 1-1.414 1.414l-4.353-4.353a9.454 9.454 0 0 1-5.907 2.058c-5.18 0-9.407-4.14-9.407-9.28zm9.407-7.28c-4.105 0-7.407 3.274-7.407 7.28s3.302 7.279 7.407 7.279 7.407-3.273 7.407-7.28c0-4.005-3.302-7.278-7.407-7.278z"
  );
  const [clicked, setClicked] = useState(false);
  const svgSwitcher = () => {
    setSvgPath(
      "M15.356 10.558c0 2.623-2.16 4.75-4.823 4.75-2.664 0-4.824-2.127-4.824-4.75s2.16-4.75 4.824-4.75c2.664 0 4.823 2.127 4.823 4.75z M1.126 10.558c0-5.14 4.226-9.28 9.407-9.28 5.18 0 9.407 4.14 9.407 9.28a9.157 9.157 0 0 1-2.077 5.816l4.344 4.344a1 1 0 0 1-1.414 1.414l-4.353-4.353a9.454 9.454 0 0 1-5.907 2.058c-5.18 0-9.407-4.14-9.407-9.28zm9.407-7.28c-4.105 0-7.407 3.274-7.407 7.28s3.302 7.279 7.407 7.279 7.407-3.273 7.407-7.28c0-4.005-3.302-7.278-7.407-7.278z"
    );
    setClicked(true);
  };
  return (
    <div className=" w-[450px] top-0 sticky h-screen bg-black p-2 flex flex-col">
      <div
        className="Container1 text-neutral-300 p-6 rounded-2xl mb-4"
        style={{ backgroundColor: "rgba(18,18,18,255)" }}
      >
        <img src="src/assets/Spotify.png" alt="spotify" className="h-8 mb-6" />

        <div className="w-fit mt-4 mb-7 font-bold text-xl">
          <Link to={"/"} className="flex hover:text-white">
            <i className="fa-solid fa-house mr-3 text-[20px]"></i>
            <h1 className="">Home</h1>
          </Link>
        </div>

        <div className="mt-4 font-bold text-xl" id="search">
          <Link
            to={"/Searchpage"}
            className={`flex items-center ${clicked ? "text-white" : ""}`}
            onClick={svgSwitcher}
          >
            <svg
              className="outline-none"
              tabIndex="0"
              viewBox="0 0 24 24"
              fill="white"
              height={20}
            >
              <path d={svgPath}></path>
            </svg>
            <h1 className="ml-3 hover:text-white">Search</h1>
          </Link>
        </div>
      </div>

      <div
        className="second-container flex-grow h-screen text-white p-4 rounded-2xl flex flex-col items-between relative"
        style={{
          backgroundColor: "rgba(18,18,18,255)"
        }}
      >
        <div className="flex justify-between mb-5">
          <Link to={"/"} className="flex gap-4">
            <svg viewBox="0 0 24 24" className="w-[30px] ml-3">
              <path
                fill="white"
                d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"
              ></path>
            </svg>
            <h1 className="text-xl self-center mt-1">Your Library</h1>
          </Link>

          <button className="rounded-full hover:bg-gray-600 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path
                d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"
                className=" fill-gray-400 hover:fill-white"
              ></path>
            </svg>
          </button>
        </div>

        <div
          className="text-white p-4 rounded-2xl mb-6"
          style={{ backgroundColor: "rgba(36,36,36,255)" }}
        >
          <div className="ml-2 p-2">
            <h1 className="mb-3 font-extrabold">Create your first playlist</h1>
            <h2 className="mb-4">It's easy, we'll help you</h2>
            <button className="bg-white text-black p-2 rounded-full font-bold w-[170px]">
              Create playlist
            </button>
          </div>
        </div>

        <div
          className="text-white p-4 rounded-2xl"
          style={{ backgroundColor: "rgba(36,36,36,255)" }}
        >
          <div className="ml-2 p-2">
            <h1 className="mb-3 font-extrabold">
              Let's find some podcasts to follow
            </h1>
            <h2 className="mb-4">We'll keep you updated on new episodes</h2>
            <button className="bg-white text-black p-2 rounded-full w-[190px] font-bold">
              Browse podcasts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
