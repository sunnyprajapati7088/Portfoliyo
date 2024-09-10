import React from 'react'

function Project() {
    const projects = [
      {
        name: "Fees Management System",
        github: "https://bit.ly/Githublink142",

        discription:
          "Developed a secure desktop application using Java, AWT, Swing, JDBC, and MySQL, featuring admin authentication with signup and login functionalities. The application generates fees slips and reports based on a specified date range, with the ability to export reports to Excel sheets. This project showcases my expertise in creating robust and user-friendly applications with strong database integration and reporting capabilities.",
        image: "/src/assets/fees1.png",
        f: "0",
      },
      {
        name: "Swigy Clone",
        github: "https://github.com/sunnyprajapati7088/Swigy-Clone",
        weblink: "swiggy-yt-project.vercel.app/",
        discription:
          " web application built using React.js, Firebase, and API integration. Users can login using their Gmail account, browse restaurants, and place orders. The application features a responsive design, secure authentication, and real-time data rendering. - React.js for building the frontend Firebase for authentication and data storag  API integration for fetching restaurant data CORS for enabling cross-origin resource sharing",
        image: "/src/assets/swigy.avif",
        f: "1",
      },
      {
        name: "Live Score Card 2024",
        github: " https://github.com/sunnyprajapati7088/Reactipl",
        weblink: "https://sunnvipl.netlify.app/",
        discription:
          "Features: Live Score Card, Points Table, Match Details ,Skills Used: React, Tailwind CSS ,API Used: Rapid API (Cricbuzz API)",
        image: "/src/assets/ipl.jpg",
        f: "0",
      },
    ];
  return (
    <div className="pt-24 ">
      <div className="p-3 w-full h-fit flex flex-col gap-4 ">
        {projects.map((item, i) => (
          <div key={i} className=" border-2 p-3 gap-3 ">
            {" "}
            <h1 className="mx-auto  text-xl font-bold lg:ml-16 lg:text-[28px]">
              {item.name}
            </h1>
            <div className="flex flex-col  justify-between mx-auto w-[90%] lg:flex lg:flex-row lg:gap-10 ">
              <img
                src={item.image}
                className="p-2 w-[70%] mx-auto lg:w-[30%]"
              ></img>
              <div>
                <a
                  href={item.github}
                  className="text-[78%]  md:text-[25px] font-semibold"
                >
                  {item.github}
                </a>
                {item?.weblink ? (
                  <a href= {item.weblink} className="font-semibold text-[78%] md:text-[20px] ">
                    WebLink :- {item.weblink}
                  </a>
                ) : (
                  ""
                )}
                <div className="text-[12px] justify-items-center md:text-[18px]">
                  <span className="text-[14px] md:text-[20px] font-semibold ">
                    Description:-{" "}
                  </span>
                  {item.discription}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project
