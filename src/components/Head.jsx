import React, { useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useState } from 'react';

import { FiAlignJustify, FiX } from "react-icons/fi";
import Hiro from './Hiro';

function Head() {
    const [flag, setFlag] = useState(false)
    const [isLaptop, SetLaptop] = useState(false)
    const handle = () => {
        if (window.innerWidth >= 1024) {
            SetLaptop(true);
        } else {
            SetLaptop(false);
        }
    }
   
    console.log(isLaptop)
    useEffect(() => {
      handle();
    }, [window.innerWidth]);
  return (
    <div className="w-full  justify-center ">
      <div className="w-full h-16  lg:h-10 items-center  z-[-1px] lg:text-[1.5rem] border-b-2 shadow-lg bg-white-100 lg:p-8 justify-between flex lg:flex-row lg:justify-between ">
        <div className="pl-2 font-serif">Sunny Prajapati</div>
        <div className=" hidden lg:flex lg:flex-row lg:w-[50%] lg:justify-between">
          <Link to={"/"}>home</Link>

          <Link to={"/education"}>about</Link>
          <p>project</p>
          <Link to={"/skill"}>Skill</Link>
          <Link to={"/contact"}>Contact</Link>
        </div>
        {flag == false ? (
          <div className="flex flex-col z-50  lg:hidden">     
            <button
              className="ml-9 mt-[100px]"
              onClick={() => setFlag((item) => !item)}
            >
              <FiX className="text-black text-[2rem]" />
            </button>
           
              <Link to={"/"}>Home</Link>
              <Link to={"/education"}>About</Link>
              <Link to={"/skill"}>Skill</Link>
              <Link to={"/contact"}>Contact</Link>
              <p>project</p>
          
          </div>
        ):(
          <FiAlignJustify
            className="mr-5  text-black text-[2rem] lg:hidden"
            onClick={() => setFlag((item) => !item)}
          ></FiAlignJustify>
        )}
      </div>
      <Outlet />
    </div>
  );
}

export default Head
