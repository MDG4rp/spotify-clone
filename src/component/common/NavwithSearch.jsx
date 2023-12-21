import { Link } from "react-router-dom";
import "../footer/Footer.css"

export default function NavwithSearch() {
  const goBack = () => {
    window.history.back();
  };
  const goForward = () => {
    window.history.forward();
  };
  return (
    <div
      className="h-[100px] flex justify-between items-center rounded-2xl mt-2 sticky top-0 z-50 opacity-95"
      style={{ backgroundColor: "rgba(5,5,5,255)" }}
    >
      <div className="text-white flex items-center justify-center ml-10 gap-2">
        <button className=" hover:bg-rgba-36-36-36-255 rounded-full" onClick={goBack}>
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
        <button className=" rounded-full hover:bg-rgba-36-36-36-255 self-center" onClick={goForward}>
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
        <div className="group flex text-xl h-[80px] rounded-full w-[380px] opacity-70 focus-within:opacity-100"
        style={{ backgroundColor: "rgba(36,36,36,255)" }}>
          <button className=" ml-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="40"
              height="40"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
          
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
          <input
            type="text"
            autoComplete="off"
            placeholder="What do you want to listen to?"
            className="bg-transparent outline-none w-[300px] h-full self-center"
          />
        </div>
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
