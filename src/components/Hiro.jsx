import React from 'react'
import { styles } from '../styles'
import ComputerCanvas from './ComputerCanvas';
import { FaInstagram,  } from "react-icons/fa6";
import { Route, Link,Outlet } from 'react-router-dom';
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

function Hiro() {
  return (
    <div className="h-full relative z-[-2px] p-4">
      <div className=" w-full  h-[80%] lg:h-[50%] md:h-[50%] mt-12 lg:flex  lg:items-center lg:justify-center lg:gap-6 lg:p-16 md:justify-center md:flex md:flex-row  ">
        <div className=" flex gap-7 h-[60%] mt-6 w-full flex-row md:w-full md:justify-center md:items-center">
          <div className="h-full flex flex-col justify-evenlyi items-center  lg:gap-7 md:justify-center md:flex-col  md:gap-7">
            <Link to={"https://www.instagram.com/sunny_prajapati_7088/"}>
              {" "}
              <FaInstagram className="text-black text-[2rem]" />
            </Link>
            <Link to={"https://www.linkedin.com/in/sunny-prajapati-988ba5259/"}>
              {" "}
              <CiLinkedin className="text-black text-[2rem]" />
            </Link>
            <Link to={"https://github.com/sunnyprajapati7088"}>
              {" "}
              <FaGithub className="text-black text-[2rem]" />
            </Link>
          </div>

          <h1 className="  md:w-[100%]  flex flex-col justify-center">
            <span className="text-black lg:text-[2rem] md:text-[2rem] font-bold">
              Sunny Prajapati
            </span>
            <p className="lg:text-[1.3rem] md:text-[1.3rem] font-semibold ">
              Web Developer
            </p>
            <p className={`  text-black w-full  lg:w-[50%]  md:w-[50%]`}>
              Welcome to my portfolio website! I am passionate about crafting
              engaging online experiences that seamlessly blend innovative
              design with functional excellence
            </p>
            <Link
              to={"/contact"}
              className="border-2 w-fit p-2 rounded-lg bg-black text-white flex shadow-xl items-center gap-2 hover:text-black hover:bg-blue-700"
            >
              Say Hello <FaTelegramPlane/>
            </Link>
          </h1>
        </div>
        <div className=" flex  justify-center p-8  h-[80%] items-center lg:w-[45%] md:w-[30%] md:items-center   ">
          <div className="w-[175px] h-[200px] ml-[25px] rounded-full  items-center text-center bg-gradient-to-b from-red-500 via-yellow-300  to-blue-500  relative blur-md flex-none z-[5px] "></div>
          <img
            src="/src/assets/formal pic.jpg"
            className="w-[160px] h-[180px] ml-[14px] mt-2 rounded-full  z-[7px] absolute blur-none "
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Hiro
