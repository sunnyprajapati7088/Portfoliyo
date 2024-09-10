import React from 'react'
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaGitAlt } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaJava } from "react-icons/fa6";
    import { TbBrandCpp } from "react-icons/tb";
function Skill() {
  return (
    <div className="  p-5 lg:h-[70%] w-full flex flex-col lg:pr-28 lg:pl-20 mt-4 ">
      <div className=" h-full text-center  lg:flex lg:flex-col w-full mx-auto lg:justify-center lg:items-center">
        <p className="lg:text-[2rem] font-medium">Skills</p>
        <p className="text-gray-400">Technical Skills</p>
      </div>
      <div className=" flex flex-col h-full justify-between mt-5  lg:flex lg:h-full w-full lg:flex-row     ">
        <div className="lg:flex lg:flex-row w-full lg:justify-between lg:p-8">
          <div className="  mt-5 lg:w-[350px] lg:h-[300px] bg-white border-2 rounded-lg lg:flex lg:flex-col p-4 group hover:border-blue-300">
            <p className="w-full text-center text-[25px] group-hover:text-blue-500">Frontend</p>
            <div className="w-[70%] flex flex-col pl-7">
              <div className="flex flex-row gap-4  items-center">
                <RiTailwindCssFill className="text-[30px]" />
                <div>
                  <p className="text-[20px]">Tailwind CSS</p>
                  <p className="text-[10px]">Intermediate</p>
                </div>
              </div>

              <div className="flex flex-row gap-4  items-center">
                <FaReact className="text-[30px]" />
                <div>
                  <p className="text-[20px]">React Js</p>
                  <p className="text-[10px]">Intermediate</p>
                </div>
              </div>

              <div className="flex flex-row gap-4  items-center">
                <FaHtml5 className="text-[30px]" />
                <div>
                  <p className="text-[20px]">HTML</p>
                  <p className="text-[10px]">Intermediate</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-[350px] lg:h-[300px] mt-5 bg-white border-2 rounded-lg flex flex-col p-4 group hover:border-blue-300">
            <p className="w-full text-center text-[25px] group-hover:text-blue-500">
              Backend
            </p>
            <div className="w-[70%] flex flex-col pl-7">
              <div className="flex flex-row gap-4  items-center">
                <FaNodeJs className="text-[30px]" />
                <div>
                  <p className="text-[20px]">Node Js</p>
                  <p className="text-[10px]">Intermediate</p>
                </div>
              </div>

              <div className="flex flex-row gap-4  items-center">
                <SiExpress className="text-[30px]" />
                <div>
                  <p className="text-[20px]">Express Js</p>
                  <p className="text-[10px]">Intermediate</p>
                </div>
              </div>

              <div className="flex flex-row gap-4  items-center">
                <BiLogoMongodb className="text-[30px]" />
                <div>
                  <p className="text-[20px]">Mongo Db</p>
                  <p className="text-[10px]">Intermediate</p>
                </div>
              </div>

              <div className="flex flex-row gap-4  items-center">
                <SiMysql className="text-[30px]" />
                <div>
                  <p className="text-[20px]">My Sql</p>
                  <p className="text-[10px]">Intermediate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex lg:h-full w-full flex-row    ">
        <div className="lg:flex lg:flex-row w-full lg:justify-between lg:p-8">
          <div className="lg:w-[350px] mt-5 lg:h-[300px] bg-white border-2 rounded-lg flex flex-col p-4 group hover:border-blue-300">
            <p className="w-full text-center text-[25px] group-hover:text-blue-500">
              Tools
            </p>
            <div className="w-[70%] flex flex-col pl-7">
              <div className="flex flex-row gap-4  items-center">
                <VscVscode className="text-[30px]" />
                <div>
                  <p className="text-[20px]">VS Code</p>
                  <p className="text-[10px]">Intermediate</p>
                </div>
              </div>

              <div className="flex flex-row gap-4  items-center">
                <FaGitAlt className="text-[30px]" />
                <div>
                  <p className="text-[20px]">Git</p>
                  <p className="text-[10px]">Intermediate</p>
                </div>
              </div>

              <div className="flex flex-row gap-4  items-center">
                <FaGithubSquare className="text-[30px]" />
                <div>
                  <p className="text-[20px]">Github</p>
                  <p className="text-[10px]">Intermediate</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-[350px]  mt-5 lg:h-[300px] bg-white border-2 rounded-lg flex flex-col p-4 group hover:border-blue-300">
            <p className="w-full text-center text-[25px] group-hover:text-blue-500">
              Programming Languages
            </p>
            <div className="w-[70%] flex flex-col pl-7">
              <div className="flex flex-row gap-4  items-center">
                <FaJava className="text-[30px]" />
                <div>
                  <p className="text-[20px]">Java</p>
                  <p className="text-[10px]">Intermediate</p>
                </div>
              </div>
              <div className="flex flex-row gap-4  items-center">
                <TbBrandCpp className="text-[30px]" />
                <div>
                  <p className="text-[20px]">C++</p>
                  <p className="text-[10px]">Intermediate</p>
                </div>
              </div>

              <div className="flex flex-row gap-4  items-center">
                <TbBrandJavascript className="text-[30px]" />
                <div>
                  <p className="text-[20px]">Java Srcipt</p>
                  <p className="text-[10px]">Intermediate</p>
                </div>
              </div>
              <div className="flex flex-row gap-4  ml-2 items-center">
                <p className="text-[30px] font-bold">C</p>
                <div>
                  <p className="text-[20px]">C</p>
                  <p className="text-[10px]">Basic</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill
