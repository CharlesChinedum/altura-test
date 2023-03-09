import React from "react";
import mockup from "../assets/nft_games.png";

import { Navbar } from "../components";

const Hero = () => {
  return (
    <div>
      <div className="w-full h-[100vh]">
        {/* nav */}
        <Navbar />

        <div className="flex flex-col md:flex-row w-full h-full">
          <div className="flex-1 w-full md:w-[50%] flex items-center justify-start">
            <div className="px-5 md:px-12 flex flex-col gap-2 md:gap-7">
              <h3 className="text-[2.8rem] md:text-[5rem] font-bold leading-[2.7rem] md:leading-[4rem] flex flex-col">
                <span className="text-[#ec51b1]">Web3</span>
                <span className="text-gray-400">Infrastructure</span>
                <span className="text-green-400">for Games</span>
              </h3>
              <p className="text-md md:text-xl text-gray-400">
                With Altura you can create, update,{" "}
                <br className="hidden md:block" /> and transfer NFTs in-game
                without technical <br className="hidden md:block" /> complexity
                or costly investment.
              </p>
            </div>
          </div>

          <div className="flex-1 w-full md:w-[50%] flex items-start md:items-center justify-center">
            <img src={mockup} alt="mockup" className="w-[40rem]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
