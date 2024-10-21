import React from "react";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  FaReact,
  FaHtml5,
  FaNodeJs,
  FaGitAlt,
  FaGithubSquare,
  FaJava,
} from "react-icons/fa";
import { SiExpress, SiMysql } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { VscVscode } from "react-icons/vsc";
import { TbBrandJavascript, TbBrandCpp } from "react-icons/tb";

function Skill() {
  return (
    <div className="p-5 lg:h-[70%] w-full flex flex-col lg:pr-28 lg:pl-20 mt-4">
      <div className="text-center lg:flex lg:flex-col w-full mx-auto lg:justify-center lg:items-center">
        <p className="lg:text-[2rem] font-medium">Skills</p>
        <p className="text-gray-400">Technical Skills</p>
      </div>

      <div className="flex flex-col justify-between mt-5 lg:flex-row w-full lg:p-8">
        {/* Frontend */}
        <div className="lg:w-[350px] lg:h-[300px] bg-white border-2 rounded-lg shadow-md hover:shadow-lg p-4 group transition-all duration-300 ease-in-out hover:border-blue-300">
          <p className="text-center text-[25px] group-hover:text-blue-500">
            Frontend
          </p>
          <div className="flex flex-col pl-7 space-y-4">
            <SkillItem
              icon={<RiTailwindCssFill />}
              name="Tailwind CSS"
              level="Intermediate"
            />
            <SkillItem
              icon={<FaReact />}
              name="React Js"
              level="Intermediate"
            />
            <SkillItem icon={<FaHtml5 />} name="HTML" level="Intermediate" />
          </div>
        </div>

        {/* Backend */}
        <div className="lg:w-[350px] lg:h-[300px]  bg-white border-2 rounded-lg shadow-md hover:shadow-lg p-4 group transition-all duration-300 ease-in-out hover:border-blue-300">
          <p className="text-center text-[25px] group-hover:text-blue-500">
            Backend
          </p>
          <div className="flex flex-col pl-7 space-y-4">
            <SkillItem
              icon={<FaNodeJs />}
              name="Node Js"
              level="Intermediate"
            />
            <SkillItem
              icon={<SiExpress />}
              name="Express Js"
              level="Intermediate"
            />
            <SkillItem
              icon={<BiLogoMongodb />}
              name="Mongo DB"
              level="Intermediate"
            />
            <SkillItem icon={<SiMysql />} name="My SQL" level="Intermediate" />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row w-full justify-between lg:p-8">
        {/* Tools */}
        <div className="lg:w-[350px] lg:h-[300px] mt-5 bg-white border-2 rounded-lg shadow-md hover:shadow-lg p-4 group transition-all duration-300 ease-in-out hover:border-blue-300">
          <p className="text-center text-[25px] group-hover:text-blue-500">
            Tools
          </p>
          <div className="flex flex-col pl-7 space-y-4">
            <SkillItem
              icon={<VscVscode />}
              name="VS Code"
              level="Intermediate"
            />
            <SkillItem icon={<FaGitAlt />} name="Git" level="Intermediate" />
            <SkillItem
              icon={<FaGithubSquare />}
              name="GitHub"
              level="Intermediate"
            />
          </div>
        </div>

        {/* Programming Languages */}
        <div className="lg:w-[350px] lg:h-[300px] mt-5 bg-white border-2 rounded-lg shadow-md hover:shadow-lg p-4 group transition-all duration-300 ease-in-out hover:border-blue-300">
          <p className="text-center text-[25px] group-hover:text-blue-500">
            Programming Languages
          </p>
          <div className="flex flex-col pl-7 space-y-4">
            <SkillItem icon={<FaJava />} name="Java" level="Intermediate" />
            <SkillItem icon={<TbBrandCpp />} name="C++" level="Intermediate" />
            <SkillItem
              icon={<TbBrandJavascript />}
              name="JavaScript"
              level="Intermediate"
            />
            <SkillItem
              icon={<p className="font-bold">C</p>}
              name="C"
              level="Basic"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const SkillItem = ({ icon, name, level }) => (
  <div className="flex flex-row gap-4 items-center">
    {icon}
    <div>
      <p className="text-[20px]">{name}</p>
      <p className="text-[10px] text-gray-500">{level}</p>
    </div>
  </div>
);

export default Skill;
