import { path } from 'framer-motion/client'
import { Link, Outlet } from 'react-router-dom'
import React, { useState } from 'react'
import { FiAlignJustify,FiX } from "react-icons/fi";
import Hiro from './Hiro';


function Navbar() {
    const [flag,setFlag]=useState(true);
    const element = [{
        name: "Home",
        path: "/"
    }, {
        name: "projects",
        path:"/"
        },
        {
            name: "skill",
        path:"/"
    },
        {
            name: "About",
            path:""
    }]
  return (
    <div className="min-w-screen flex justify-between p-6  bg-[#050815] relative">
      <div className="text-center items-center  text-white text-[1.5rem]">
        sunny
      </div>

      {flag == true ? (
        <div
          className={
            `mr-5 right-0 flex flex-col absolute lg:flex lg:gap-16 lg:ml-[60%] lg:w-full lg:relative  `
          }
        >
          {" "}
          <button
            className="ml-9 lg:hidden "
            onClick={() => setFlag((item) => !item)}
          >
            <FiX className="text-white text-[2rem]" />
          </button>
          {element.map((item, i) => (
            <Link to={item.path} className="text-[1.5rem] text-white " key={i}>
              {item.name}
            </Link>
          ))}
        </div>
      ) : (
        <FiAlignJustify
          className="mr-5  text-white text-[2rem] lg:hidden"
          onClick={() => setFlag((item) => !item)}
        ></FiAlignJustify>
      )}
      
      <Outlet/> 
    </div>
  );
}

export default Navbar
 