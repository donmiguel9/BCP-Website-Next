import Image from "next/image";
import { Parallax } from "react-parallax";
import OurService from "../../../pages/ourservice";
const WhatIs = () => {
  return (
    <>
      <div className=" bg-[#BDC5D8]">
        <Parallax
          blur={10}
          bgImage="/img/background3.svg"
          bgImageAlt="the cat"
          strength={-500}
        >
          <div
            id="earn"
            className="relative p-6 pt-36 pb-28 sm:flex sm:justify-center sm:space-x-32 sm:items-center "
          >
            <div className="">
              <div className="custom-shape-divider-top-1648170642">
                <svg
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1200 120"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
                    className="shape-fill"
                  ></path>
                </svg>
              </div>
              <h1 className="text-4xl font-bold text-center text-gray-800 sm:text-center sm:text-6xl">
                What is Blockchain Presence?
              </h1>
              <div className="w-full m-auto mt-16 lg:w-1/2">
                <p className="px-4 py-4 text-xl text-gray-800">
                  Blockchain Presence AG is a swiss corporation and an official
                  spin-off of the University of Zurich, founded in December
                  2020. We are located in Zurich, near the University of Zurich
                  and the Crypto Valley Zug. We strive to develop and operate an
                  oracle platform for smart contracts. The Blockchain Presence
                  platform connects smart contracts with on-chain authenticated
                  data providers.
                </p>
              </div>
              <h1 className="text-4xl font-bold text-center text-gray-800 sm:text-center sm:text-6xl"></h1>
            </div>
          </div>
        </Parallax>
      </div>
    </>
  );
};

export default WhatIs;