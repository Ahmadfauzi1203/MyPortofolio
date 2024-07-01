import React from "react";

const ProjectDetail = ({ project, onClose }) => {
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content bg-dark">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Project Info &#8505;
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-6">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="img-fluid img-thumbnail"
                  />
                </div>
                <div className="col-md-6">
                  <ul className="list-unstyled">
                    <li>
                      <b>Project Name :</b> {project.title}
                    </li>
                    <li>
                      <b>Tech Stack :</b> {project.tech}{" "}
                    </li>
                    <li>
                      <b>Year :</b> {project.year}
                    </li>
                    <li>
                      <b>Description :</b> {project.desc}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;
