import React from "react";
import ThriftThreads from "../assets/THRIFTHREADS.png";
import Mixifi from "../assets/MIXIFI.png";
import GuessNumber from "../assets/guess-a-number.png";
import PigGame from "../assets/Dice Pig Game.png";
import SimpleWeather from "../assets/simpleweather.png";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#80D1FF]">
            Work
          </p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>

        <div
          //  container
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${ThriftThreads})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="opacity-0 group group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>

              <div className="pt-8 text-center">
                <a target="_blank" href="https://thriftthreads.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/ctorres0312/Thrift-Threads"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${GuessNumber})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="opacity-0 group group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Desktop JS Application
              </span>

              <div className="pt-8 text-center">
                <a
                  target="_blank"
                  href="https://number-guessing-game-ct.vercel.app/"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/ctorres0312/Number-Guessing-Game"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${PigGame})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="opacity-0 group group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Desktop JS Application
              </span>

              <div className="pt-8 text-center">
                <a target="_blank" href="https://dice-pig-game.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/ctorres0312/Dice-Pig-Game"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Mixifi})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="opacity-0 group group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                JS Application
              </span>

              <div className="pt-8 text-center">
                <a target="_blank" href="https://mixifi.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a target="_blank" href="https://github.com/ctorres0312/Mixifi">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${SimpleWeather})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="opacity-0 group group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                JS Application
              </span>

              <div className="pt-8 text-center">
                <a target="_blank" href="https://simpleweather-nu.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/ctorres0312/ScribbleNotes"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
