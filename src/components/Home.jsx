import React from "react";
import Harry from "../assets/Harry.jpeg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className=" h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="  max-w-screen-lg flex flex-col items-center justify-center mx-auto mt-9 h-full px-8 md:flex-row ">
        <div className=" flex flex-col justify- w-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a FrontEnd Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisix`cing
            elit.Voluptatibus aperiam sequi, reprehenderit excepturi harum
            nihilipsum nemo labore laborum veritatis quia quibusdam ullam, sit,
            placeat officiis optio sint aut fugiat!
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-800 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={Harry}
            alt="avatar"
            className="rounded-3xl mx-auto w-1/2 md:w-25 "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
