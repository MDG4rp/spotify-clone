import Axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";

export default function Homeplaylist() {
  const [list, setList] = useState([]);

  const endpoint = "src/component/common/homeCards.json";
  useEffect(() => {
    Axios.get(endpoint).then((res) => {
      console.log(res.data.playlists);
      setList([...res.data.playlists]);
    });
  }, []);

  return (
    <div
      className="sticky rounded-2xl mr-2 w-full h-full"
      style={{ backgroundColor: "rgba(18,18,18,255)" }}
    >
      <h1 className="text-white ml-6 p-4 font-bold text-2xl">Focus</h1>
      <div className="w-full gap-7 p-5 flex flex-wrap ml-5">
        {list.map((listName, index) => {
          return (
            <Link key={index}>
              <div
                className={` text-xl p-4 rounded-2xl h-[350px] transition duration-300 
                ease-in-out transform hover:scale-105 flex flex-col items-center  w-[250px] relative group`}
                style={{
                  backgroundColor: "rgba(36,36,36,255)",
                  transition: "background-color 0.2s ease-in-out",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "rgba(50,50,50,255)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "rgba(28,28,28,255)")
                }
              >
                <div className="relative aspect-square mb-4">
                  <img
                    src={listName.image_link}
                    alt={listName.name}
                    className="h-[200px] w-[250px] rounded-2xl object-cover object-center shadow-xl mt-1"
                  />
                  <div className="absolute bottom-1 right-1 mb-2  opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="black"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-16 w-16 rounded-full bg-green-500 p-4 mr-2"
                    >
                      <g transform="translate(1 1)">
                        <polygon points="5 3 20 12 5 21 5 3"></polygon>
                      </g>
                    </svg>
                  </div>
                </div>

                <div>
                  <h1
                    className="text-white mb-4 font-bold line-clamp-1"
                    title={listName.name}
                  >
                    {listName.name}
                  </h1>
                  <div className="text-white overflow-hidden sm:overflow-visible">
                    <p
                      className="opacity-70 line-clamp-2 hover:no-underline"
                      title={listName.description}
                    >
                      {listName.description}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}
