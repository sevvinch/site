import React from "react";
import Img from "./../../public/assets/Ravi_Srikantan.webp";
import { FiArrowLeftCircle } from "react-icons/fi";
import { FiArrowRightCircle } from "react-icons/fi";

const Engineers = () => {
  return (
    <div className="">
      <div className="container mx-auto px-4">
        <div className="bg-[#FF6FFF] flex items-center gap-20 ml-[88px] px-[45px] pt-[135px] ">
          <div className="left">
            <img src={Img} alt="" className="mb-6 w-[380px] h-[200px]" />
            <h2 className="bg-transparent mb-[12px] font-semibold text-[20px]">
              Benjamin Maisano
            </h2>
            <p className="bg-transparent text-[18px] mb-[200px]">
              CTO at Mount Sinai
            </p>
            <div className=" flex items-center gap-5 mb-[50px]">
              <FiArrowLeftCircle className="w-10 h-10 text-gray-800" />
              <FiArrowRightCircle className="w-10 h-10 text-gray-800" />
            </div>
          </div>
          <div className="right">
            <h3 className="bg-transparent font-semibold text-[40px] mb-[130px] tracking-wider mt-[-300px]">
              Vention has provided very talented engineers across web Ul,
              mobile, backend APIs, and system designs, to data integrations and
              beyond.
            </h3>
            <p className="bg-transparent text-[20px] font-normal">
              Their staff integrated quickly and were dedicated to the internal
              teams throughout the relationship, acting as <br /> long term
              partners in our strategic digital efforts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Engineers;
