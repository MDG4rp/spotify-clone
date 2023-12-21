import React, { useEffect, useState } from "react";
import Axios from "axios";
import Footer from "../footer/Footer";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const [title, setTitle] = useState([]);
  let endpoint = "src/component/common/generi.json";
  const navigate = useNavigate();

  useEffect(() => {
    Axios.get(endpoint).then((res) => {
      setTitle([...res.data.generi]);
    });
  }, []);

  const getRandomColor = () => {
    const letters = "89ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 8)];
    }
    return color;
  };

  const handleCardClick = (categoryName) => {
    navigate(`/CategoryPage/${categoryName}`);
  };

  return (
    <div
      className="min-h-screen flex flex-col p-7 relative"
      style={{ backgroundColor: "rgba(18,18,18,255)" }}
    >
      <h1 className="text-white mb-5 text-2xl font-bold">Browse all</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {title.map((titleName, index) => {
          const randomColor = getRandomColor();
          return (
            <div
              key={index}
              onClick={() => handleCardClick(titleName.titolo)}
              className={`
  rounded-xl aspect-square p-3 cursor-pointer text-xl md:text-xl lg:text-2xl xl:text-3xl font-semibold overflow-hidden 
  flex flex-col items-left transition-transform transform hover:scale-110`}
              style={{ backgroundColor: randomColor }}
            >
              <p className="">{titleName.titolo}</p>
              <img
                src={titleName.img}
                alt={titleName.titolo}
                className="transform rotate-45 scale-90 translate-x-1/3 translate-y-1/2 rounded-xl"
              />
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
