import Image from "next/image";
import React, { useState } from "react";
import { questionsData } from "../../utils/header";

export default function FaqSection() {
  const [selectedIndex, setSelectedIndex] = useState(2);
  return (
    <section>
      <div className="py-36 bg-[#F3F3F3] flex flex-col relative container">
        <h1 className="max-w-2xl mx-auto text-[3.375rem] mb-20 text-center tracking-tight font-bold leading-[1.185em]">
          Frequently asked questions
        </h1>
        {questionsData.map((item, idx) => (
          <div
            key={`${item.id}-${idx}`}
            className="flex flex-col relative mx-auto w-full z-10 flex flex-col md:flex-row items-center justify-center"
          >
            <div
              onMouseOver={() => setSelectedIndex(idx)}
              onClick={() => setSelectedIndex(idx)}
              className={`w-full flex flex-row flex-wrap cursor-pointer justify-between border-b-1 border-[#D6D6D6] ${
                idx === 0 && selectedIndex === idx
                  ? "border-t-1 border-[#D6D6D6] bg-[#E8E8E8]"
                  : selectedIndex === idx
                  ? "bg-[#E8E8E8]"
                  : idx === 0
                  ? "border-t-1 border-[#D6D6D6]"
                  : ""
              }`}
            >
              {item.isGeneral ? (
                <div
                  className={`md:w-[15%] px-[10px] md:px-[20px] md:border-r-1 md:border-[#D6D6D6] py-[14px] md:py-[23px] ${idx === 4 ? 'bg-[#E8E8E8]': ''}`}
                >
                  <h2
                    className={`text-lg md:text-xl font-semibold leading-normal md:leading-[24px] text-center text-[#202229] `}
                  >
                    General
                  </h2>
                </div>
              ) : (
                <div className="md:w-[15%] pr-[20px] py-[14px] md:py-[23px] hidden md:block">
                  <h2 className="text-lg md:text-xl font-semibold leading-normal md:leading-[15%]px] text-[#F3F3F3] text-[#202229]">
                    .
                  </h2>
                </div>
              )}
              {item.isProcess ? (
                <div className="md:w-[15%] px-[10px] md:px-[20px] py-[14px] md:py-[23px]">
                  <h2 className="text-lg md:text-xl font-semibold leading-normal md:leading-[24px] text-[#202229] text-center whitespace-nowrap">
                    Joining Process
                  </h2>
                </div>
              ) : (
                <div className="md:w-[15%] py-[14px] md:py-[23px] hidden md:block">
                  <h2 className="text-lg md:text-xl font-semibold leading-normal md:leading-[24px] text-[#F3F3F3] text-[#202229]">
                    .
                  </h2>
                </div>
              )}
              <div
                className={`md:w-[60%] md:pl-[3em] ${
                  item.isProcess ? "md:border-l-1 md:border-[#D6D6D6]" : ""
                } `}
              >
                <div className="flex justify-start md:justify-between items-right md:items-center pt-6 px-5 md:px-[3em] pb-3">
                  <h3
                    className={`text-sm leading-normal text-[#202229] mx-2 ${
                      selectedIndex === idx ? "font-semibold" : "font-normal"
                    }`}
                  >
                    {item.name}
                  </h3>
                  {selectedIndex === idx && (
                    <svg
                      width="27"
                      height="16"
                      viewBox="0 0 27 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.924 7.81731C13.924 11.5029 10.807 14.4906 6.96198 14.4906C3.11698 14.4906 -2.38813e-08 11.5029 -1.62296e-08 7.81731C-8.57797e-09 4.13174 3.11698 1.144 6.96198 1.144C10.807 1.144 13.924 4.13174 13.924 7.81731Z"
                        fill="#FFBE2E"
                      />
                      <path
                        d="M12.1337 15.6346L12.1337 2.5191e-08L26.0577 7.81731L12.1337 15.6346Z"
                        fill="#FFBE2E"
                      />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

{/* <div className="flex w-full flex-col">
          <div className="h-28 border-y">
            <div className="flex h-full items-center">
              <div className="w-56 border-r flex justify-center items-center h-full">
                <h2 className="text-xl font-semibold">General</h2>
              </div>
              <div className="w-full flex items-center justify-center">
                <p className="text-xl leading-6">
                  I want to work part-time, is that possible
                </p>
              </div>
            </div>
          </div>

          <div className="h-28 border-y">
            <div className="flex h-full items-center">
              <div className="w-56 border-r opacity-0 flex justify-center items-center h-full">
                <h2 className="text-2xl font-semibold">General</h2>
              </div>
              <div className="w-full flex items-center justify-center">
                <p className="text-xl leading-6">
                  How long are the average projects?
                </p>
              </div>
            </div>
          </div>

          <div className="h-28 bg-[#D6D6D6] border-y">
            <div className="flex h-full items-center">
              <div className="w-56 border-r opacity-0 flex justify-center items-center h-full">
                <h2 className="text-2xl font-semibold">General</h2>
              </div>
              <div className="w-full  flex items-center justify-center">
                <p className="text-xl leading-6">How does the payment works?</p>
              </div>
              <div className="w-10 h-5 mr-7  relative ">
                <Image src="/vector.png" className="" alt="233" fill />
              </div>
            </div>
          </div>

          <div className="h-28 border-y">
            <div className="flex h-full items-center">
              <div className="w-56 border-r opacity-0 flex justify-center items-center h-full"></div>
              <div className="w-full flex items-center justify-center">
                <p className="text-xl leading-6">How much can I earn?</p>
              </div>
            </div>
          </div>

          <div className="h-28 border-y">
            <div className="flex h-full items-center">
              <div className="w-56 bg-[#D6D6D6] border-r flex justify-center items-center h-full">
                <h2 className="text-xl font-semibold">General</h2>
              </div>
              <div className="w-56 border-r flex justify-center items-center text-center h-full">
                <h2 className="text-xl font-semibold">Joining Process</h2>
              </div>
              <div className="w-full flex items-center justify-center">
                <p className="text-xl -ml-36 leading-6">
                  I want to work part-time, is that possible
                </p>
              </div>
            </div>
          </div>

          <div className="h-28 border-y">
            <div className="flex h-full items-center">
              <div className="w-56 border-r opacity-0  flex justify-center items-center h-full"></div>
              <div className="w-full flex items-center justify-center">
                <p className="text-xl leading-6">
                  How long are the average projects?
                </p>
              </div>
            </div>
          </div>

          <div className="h-28 border-y">
            <div className="flex h-full items-center">
              <div className="w-56 border-r opacity-0 flex justify-center items-center h-full"></div>
              <div className="w-full flex items-center justify-center">
                <p className="text-xl leading-6">
                  How long are the average projects?
                </p>
              </div>
            </div>
          </div>
          <div className="h-28 border-y">
            <div className="flex h-full items-center">
              <div className="w-56 opacity-0 border-r flex justify-center items-center h-full"></div>
              <div className="w-full flex items-center justify-center">
                <p className="text-xl leading-6">How much can I earn?</p>
              </div>
            </div>
          </div>
        </div> */}