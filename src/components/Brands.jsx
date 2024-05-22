import React from "react";
import Marquee from "react-fast-marquee";

const Brands = () => {
  return (
    <div className="">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-10 ml-[88px] border-l-2 border-gray-300 border-b-2">
          <Marquee className="">
            <div className="mr-[80px]">
              <img
                src="https://join.ventionteams.com/media/documents/google_cloud_black.svg"
                alt=""
                className=""
              />
            </div>
            <div className="mr-[80px]">
              <img
                src="	https://join.ventionteams.com/media/documents/oracle_black.svg"
                alt=""
              />
            </div>
            <div className="mr-[80px]">
              <img
                src="	https://join.ventionteams.com/media/documents/hydrogen_black.svg"
                alt=""
              />
            </div>
            <div className="mr-[80px]">
              <img
                src="	https://join.ventionteams.com/media/documents/docusign_black.svg"
                alt=""
              />
            </div>
            <div className="mr-[80px]">
              <img
                src="	https://join.ventionteams.com/media/documents/aws_black.svg"
                alt=""
              />
            </div>
            <div className="mr-[80px]">
              <img
                src="	https://join.ventionteams.com/media/documents/salesforce_black.svg"
                alt=""
              />
            </div>
            <div className="mr-[80px]">
              <img
                src="	https://join.ventionteams.com/media/documents/microsoft_black.svg"
                alt=""
              />
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Brands;
