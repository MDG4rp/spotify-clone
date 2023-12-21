import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../footer/Footer.jsx";
import "../footer/Footer.css";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    import("../common/homeCards.json")
      .then((res) => {
        const playlists = res.playlists || [];
        setList(playlists);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading data:", error);
        setLoading(false);
      });
  }, []);

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const bgColor = getRandomColor();

  const headerStyle = {
    color: "white",
    fontSize: "150px",
    fontWeight: "extrabold",
    marginLeft: "12px",
    width: "fit-content",
    height: "34vh",
  };

  const sectionStyle = {
    height: "100vh",
    color: "white",
    backgroundImage: `linear-gradient(to bottom, ${bgColor}, black)`,
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={sectionStyle} className="relative">
      <h1 style={headerStyle} className="flex justify-start items-end p-4">
        {categoryName}
      </h1>
      <section className=" bg-black bg-opacity-50">
        <div className="sticky rounded-2xl mr-2 w-full h-full">
          <h1 className="text-white ml-6 p-8 font-bold text-4xl">
            {categoryName}
          </h1>
          <div className="w-full gap-7 p-5 flex flex-wrap ml-8">
            {list.length > 0 &&
              list.map((playlist, index) => (
                <Link to={`/details/${index}`} key={index}>
                  <div
                    className={`text-xl p-4 rounded-2xl h-[350px] transition duration-300 
              ease-in-out transform hover:scale-105 flex flex-col items-center  w-[250px] relative group`}
                    style={{
                      backgroundColor: "rgba(36,36,36,255)",
                      transition: "background-color 0.2s ease-in-out",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        "rgba(50,50,50,255)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        "rgba(28,28,28,255)")
                    }
                  >
                    <div className="relative aspect-square mb-4">
                      <img
                        src={playlist.image_link}
                        alt={playlist.name}
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
                          className="h-16 w-16 rounded-full bg-green-500 p-4"
                        >
                          <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                      </div>
                    </div>

                    <div>
                      <h1
                        className="text-white mb-4 font-bold line-clamp-1"
                        title={playlist.name}
                      >
                        {categoryName}
                      </h1>
                      <div className="text-white overflow-hidden sm:overflow-visible">
                        <p
                          className="opacity-70 line-clamp-2 hover:no-underline"
                          title={`description of ${playlist.name}`}
                        >
                          Descrizione di {categoryName}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>

          <div className=" ml-8">
            <Footer />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;
