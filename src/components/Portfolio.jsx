import React from "react";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import usestate from "../assets/portfolio/usestate.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: reactSmooth,
      href: "https://extraordinary-dolphin-ca0f2d.netlify.app",
      code: "https://github.com/Thanhhaidev1905/Portfolio.git",
    },
    {
      id: 2,
      src: usestate,
      href: "https://idyllic-chimera-fc09bd.netlify.app",
      code: "https://github.com/Thanhhaidev1905/Books-Stores.git",
    },
  ];

  return (
    <div
      name="portfolio"
      className="w-full bg-gradient-to-b from-black to-gray-800 text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-10 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ">
          {portfolios.map(({ id, src, href, code }) => (
            <div
              key={id}
              className="shadow-lg shadow-gray-600 rounded-lg cursor-pointer"
            >
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex justify-center items-center">
                <a href={href}>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                </a>
                <a href={code}>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
