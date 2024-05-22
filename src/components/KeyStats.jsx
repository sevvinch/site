import React from 'react'

const KeyStats = () => {
  return (
    <div className="bg-[#EBEBED] ml-[-46px]">
      <div className="container mx-auto px-4 flex justify-between items-center ">
        <div className="ml-[88px] py-10 px-5 grid grid-cols-4 gap-x-20 gap-y-10  items-center border-l-2 border-gray-300 border-b-2">
          <div className="p-[15px] grid col-span-2">
            <h4 className="font-semibold text-[25px] text-red-950">
              Key stats
            </h4>
          </div>
          <div className="p-[15px] text-left">
            <h4 className=" font-normal text-[80px] text-red-950">500+</h4>
            <p className="text-[18px]">award-winning clients</p>
          </div>
          <div className="p-[15px] text-left">
            <h4 className=" font-normal text-[80px] text-red-950">$15B+</h4>
            <p className=" text-[18px]">in client acquisitions</p>
          </div>
          <div className="p-[15px] text-left">
            <h4 className=" font-normal text-[80px] text-red-950">36</h4>
            <p className=" text-[18px]">month average engagement</p>
          </div>
          <div className="p-[15px] text-left">
            <h4 className=" font-normal text-[80px] text-red-950">20+</h4>
            <p className=" text-[18px]">client IPOs supported</p>
          </div>
          <div className="p-[15px] text-left">
            <h4 className=" font-normal text-[80px] text-red-950">20+</h4>
            <p className=" text-[18px]">years of experience</p>
          </div>
          <div className="p-[15px] text-start">
            <h4 className=" font-normal text-[80px] text-red-950">3K+</h4>
            <p className=" text-[18px]">world-class engineers</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KeyStats