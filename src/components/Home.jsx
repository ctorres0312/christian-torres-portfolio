import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#80D1FF]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Christian Torres</h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">I'm a Front End Web Developer.</h2>
        <p className="text-[#8892b0] py-4 max-w-[700xl]">I am a creative and devoted professional with a profound enthusiasm for technology and design. As a Front-End Web Developer, I specialize in transforming digital concepts into reality by designing visually captivating and user-friendly websites. My expertise in HTML, CSS, JavaScript, and React enables me to thrive in the dynamic world of web development. I am resolute in keeping up with industry trends to deliver outstanding online experiences. My fervor for creativity and technology drives me to unite my diverse experiences and deliver pioneering solutions in the digital landscape.</p>
        <div>
        <Link to="work" smooth={true} duration={500}>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#80D1FF] hover:border-[#80D1FF]">View Work 
          <span className="group-hover:rotate-90 duration-300">
          <HiArrowNarrowRight className="ml-3" />

          </span>
          </button>
          </Link>
        </div>


      </div>
  
    </div>
  );
};

export default Home;
