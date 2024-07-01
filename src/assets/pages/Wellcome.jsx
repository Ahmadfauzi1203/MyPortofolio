import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Boy from "../../../public/laptopBoy.png";

const Wellcome = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("userName", name);

    navigate("/home");
  };

  return (
    <div
      className="constainer-fluid vh-100 d-flex justify-content-center align-items-center"
      style={{
        backgroundColor: "#141C31",
        fontFamily: "Playfair Display, serif",
      }}
    >
      <div className="row w-100 text-white ">
        <div className="col-md-6 text-justify align-self-center">
          <h1 className="display-1">Wellcome</h1>
          <p>Hello there 😊, before you start. Please Input Your Name...</p>
          <form onSubmit={handleSubmit} className="wrapper d-flex gap-3">
            <input
              type="text"
              placeholder="Input Your Name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <div className="col-md-6">
          <img src={Boy} alt="Foto" className="img-fluid m-auto d-block" />
        </div>
      </div>
    </div>
  );
};

export default Wellcome;
