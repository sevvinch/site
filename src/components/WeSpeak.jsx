import React from 'react'

const WeSpeak = () => {
  return (
    <div className="bg-[#EBEBED]">
      <div className="container mx-auto px-4 ">
        <div className="ml-[88px] border-l-2 border-b-2 border-gray-300">
          <div className="p-14 ml-[45vw] flex flex-col justify-end items-start">
            <span className="pt-[80px] pb-[20px] text-[28px] font-semibold text-red-950">
              We speak your language
            </span>
            <h3 className="text-[40px] font-bold">
              Wondering how well we know your industry? Curious which tech
              stacks we support?
            </h3>
            <p className="pt-[20px] text-[25px] font-normal">
              Spanning 30+ verticals and 25+ technologies, our team has designed
              and implemented innovative solutions to suit even the most unique
              needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeSpeak