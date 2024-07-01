import React, { useState } from "react";
import ProjectDetail from "../components/ProjectDetail";

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  let Datas = [
    {
      img: "https://i.pinimg.com/564x/26/e9/38/26e938014272ef624ad987f2df5ab00a.jpg",
      title: "Mobile Apps",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      tech: "Flutter, SQLite",
      year: 2021,
    },
    {
      img: "https://i.pinimg.com/564x/9d/45/8a/9d458a9d2d917a7bfaaf1936c47b9686.jpg",
      title: "Mobile Apps",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      tech: "React Native, SQLite",
      year: 2022,
    },
    {
      img: "https://i.pinimg.com/564x/be/17/c3/be17c31f3542a8e214c7aac14fccf7f2.jpg",
      title: "Web Anime",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      tech: "Laravel Inertia, Mysql",
      year: 2023,
    },
  ];

  const handleShowProject = (data) => {
    setSelectedProject(data);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  return (
    <div className="py-3" id="project">
      <h1
        style={{
          fontFamily: "Playfair Display, serif",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        My Project
      </h1>
      <div className="container d-flex justify-content-center gap-5">
        {Datas.map((data) => (
          <div
            className="card"
            style={{
              width: "18rem",
              borderRadius: "30px 0px 30px 0px",
              boxShadow: "5px 5px 15px 0px rgba(200,249,126,100)",
            }}
          >
            <img
              src={data.img}
              className="card-img-top rounded-start-5"
              alt={data.title}
            />
            <div className="card-body">
              <h5 className="card-title">{data.title}</h5>
              <p className="card-text">{data.desc}</p>
              <a
                href="#"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={() => handleShowProject(data)}
              >
                View More
              </a>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectDetail project={selectedProject} onClose={handleCloseProject} />
      )}
    </div>
  );
};

export default Project;
