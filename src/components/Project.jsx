import React from "react";

function Project() {
  const projects = [
    {
      name: "Fees Management System",
      github: "https://bit.ly/Githublink142",
      description:
        "Developed a secure desktop application using Java, AWT, Swing, JDBC, and MySQL, featuring admin authentication with signup and login functionalities. The application generates fees slips and reports based on a specified date range, with the ability to export reports to Excel sheets. This project showcases my expertise in creating robust and user-friendly applications with strong database integration and reporting capabilities.",
      image:
        "https://api.deepai.org/job-view-file/70c4b0bf-7f97-4b88-a50a-04020de873af/outputs/output.jpg?art-image=true",
      f: "0",
    },
    {
      name: "Swiggy Clone",
      github: "https://github.com/sunnyprajapati7088/Swigy-Clone",
      weblink: "https://swiggy-yt-project.vercel.app/",
      description:
        "Web application built using React.js, Firebase, and API integration. Users can login using their Gmail account, browse restaurants, and place orders. The application features a responsive design, secure authentication, and real-time data rendering.",
      image: "https://pnggallery.com/wp-content/uploads/swiggy-logo-01.png",
      f: "1",
    },
    {
      name: "Live Score Card 2024",
      github: "https://github.com/sunnyprajapati7088/Reactipl",
      weblink: "https://sunnyipl.netlify.app/",
      description:
        "Features: Live Score Card, Points Table, Match Details. Skills Used: React, Tailwind CSS. API Used: Rapid API (Cricbuzz API).",
      image:
        "https://th.bing.com/th/id/OIP.PxvHvdJk9WOxWHxP1eWbrgAAAA?rs=1&pid=ImgDetMain",
      f: "0",
    },
    {
      name: "कृषिInsurance",
      github:
        "https://github.com/sunnyprajapati7088/FrontendInsorance https://github.com/sunnyprajapati7088/backendInsorance",
      weblink: "https://krishiinsurance.vercel.app/",
      description:
        "कृषिInsurance is a comprehensive platform designed to provide agricultural insurance solutions for farmers. The project includes features such as insurance claim submission, policy management, and farmer-centric services. Developed using React and Tailwind CSS, it leverages modern technology to support farmers in securing their crops and livelihoods. The backend is built using Node.js with a MongoDB database, ensuring efficient data management and a robust system for managing insurance-related operations.",
      image:
        "https://th.bing.com/th/id/OIG2.96yL5JDEoPxbwGouEVnE?w=924&h=924&rs=1&pid=ImgDetMain",
      f: "0",
    },
  ];

  return (
    <div className="pt-16 px-4 bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((item, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {item.name}
              </h2>
              <p className="text-gray-600 mb-4">{item.description}</p>

              <div className="flex flex-col gap-2">
                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm"
                >
                  GitHub: {item.github}
                </a>
                {item?.weblink && (
                  <a
                    href={item.weblink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    WebLink: {item.weblink}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
