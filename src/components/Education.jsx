import React from 'react'
import { RiTailwindCssFill } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { FaMedkit } from "react-icons/fa";
import { MdOutlineEventAvailable } from "react-icons/md";

function Education() {
  return (
    <div className="h-full w-full flex flex-col lg:p-14 ">
      <div className=" h-20  flex flex-col mt-6 w-full text-center mx-auto ">
        <p className="lg:text-[2rem] font-medium">About</p>
        <p className="text-gray-400">My Introduction</p>
      </div>

      <div className="w-full h-full flex gap-5 flex-col justify-between md:gap-4 mt-2 p-4 lg:flex lg:flex-row lg:justify-between">
        <div className="lg:w-[40%] lg:h-fit  flex flex-col justify-evenly md:items-center border-2 rounded-lg p-4 group hover:border-blue-300   ">
          <div className="flex flex-row justify-evenly md:justify-evenly md:gap-5">
            <div className="flex flex-col w-[100px] items-center h-[100px] border-2  group-hover:border-blue-300  rounded-lg p-2 justify-center">
              <FaMedkit className="text-[30px]" />
              <p>Education</p>
              <p className="text-gray-400 text-[12px]">B.tech CSE</p>
            </div>

            <div className="flex flex-col w-[100px] h-[100px] items-center border-2 group-hover:border-blue-300 rounded-lg p-2 justify-center">
              <MdOutlineEventAvailable className="text-[30px]" />
              <p> Available</p>
              <p className="text-gray-400  text-[12px]">Open to Work</p>
            </div>
          </div>
          <p className=" text-center  md:w-[50%] md:text-center lg:w-full">
            Passionate about crafting exceptional web experiences, I specialize
            in HTML, CSS, JavaScript, and frameworks like React,
            bringing responsive, scalable, and intuitive applications to life.
            With a keen eye for design and user experience, I continuously
            strive to push the boundaries of web development, embracing new
            technologies and trends to deliver innovative solutions that leave a
            lasting impact.
          </p>

          <a
            href="/src/assets/SunnyPrajapatiResume (1).pdf"
            className="text-white w-[120px]  text-center  mx-auto h-10 rounded-lg bg-black flex items-center justify-center"
          >
            Download CV
          </a>
        </div>

        <div className="lg:w-[40%] lg:h-[350px] h-full flex flex-col pt-4 justify-evenly items-center border-2 rounded-lg p-4 hover:border-blue-300 hover:shadow-lg">
          <div className="w-full text-center text-[25px] font-medium">
            Education
          </div>
          <div className="w-full text-center">
            <p>B.Tech CSE</p>
            <p>MIT Moradabad</p>
            <p className="w-full text-center flex flex-row gap-3 items-center justify-center">
              <span>
                <SlCalender />
              </span>
              2021-2025
            </p>
          </div>
          <div className="w-full text-center">
            <p>Intermediate</p>
            <p>R.S.P.I.C Seohara</p>
            <p className="w-full text-center flex flex-row gap-3 items-center justify-center">
              <span>
                <SlCalender />
              </span>
              2020-21
            </p>
          </div>
          <div className="w-full text-center">
            <p>High School</p>
            <p>R.S.P.I.C Seohara</p>
            <p className="w-full text-center flex flex-row items-center gap-3 justify-center">
              <span>
                <SlCalender />
              </span>
              2018-2019
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education
