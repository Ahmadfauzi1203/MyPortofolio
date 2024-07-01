import React, { useState, useEffect } from "react";
import Boy from "../../../public/laptopBoy.png";
import Cv from "../../../public/MyResume.pdf";

const Home = () => {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const name = localStorage.getItem("userName");
    if (name) {
      setUserName(name);
    }

    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    const tooltipList = [...tooltipTriggerList].map(
      (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
    );

    return () => {
      tooltipList.forEach((tooltip) => tooltip.dispose());
    };
  }, []);
  return (
    <div className="d-flex justify-content-center align-items-center" id="home">
      <div
        className="row w-100 align-items-center px-5"
        style={{ color: "#C8F97E", fontFamily: "Playfair Display, serif" }}
      >
        <div className="col-md-6">
          <h1>Hallo...! {userName}</h1>
          <p>My Name is Ahmad Fauzi, I am a Full Stack Web Developer.</p>
          <div className="wrapper d-flex gap-2">
            <a href={Cv} className="btn btn-primary" download="MyResume.pdf">
              Download CV
            </a>
            <a
              href="https://www.instagram.com/aziiee22/"
              target="_blank"
              className="btn btn-danger"
              data-bs-toggle="tooltip"
              data-bs-title="Instagram"
            >
              <i className="fa-brands fa-instagram fa-xl"></i>
            </a>
            <a
              href="https://github.com/Ahmadfauzi1203"
              target="_blank"
              className="btn btn-warning"
              data-bs-toggle="tooltip"
              data-bs-title="Github"
            >
              <i className="fa-brands fa-github fa-xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/ahmadfauzi1203/"
              target="_blank"
              className="btn btn-info"
              data-bs-toggle="tooltip"
              data-bs-title="Linkedin"
            >
              <i className="fa-brands fa-linkedin fa-xl"></i>
            </a>
          </div>
        </div>
        <div className="col-md-6">
          <img
            src={Boy}
            alt="foto"
            className="img-fluid m-auto d-block"
            style={{
              transform: "scaleX(-1)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
