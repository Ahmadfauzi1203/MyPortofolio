import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  useEffect(() => {
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

  const [formData, setFormData] = useState({
    name: "",
    number: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, number, message } = formData;
    const whatsappUrl = `https://wa.me/6281323814566?text=Hallo,%20nama%20saya%20${name}%20(${number})%20pesan%20saya%20adalah%20${message}`;
    window.open(whatsappUrl, "_blank");

    setFormData({
      name: "",
      number: "",
      message: "",
    });
  };
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      id="contact"
    >
      <div className="row w-100 text-white">
        <div className="col-md-6">
          <h1 style={{ fontFamily: "Playfair Display, serif" }}>Contact</h1>

          <form
            onSubmit={handleSubmit}
            className="mx-auto rounded-2"
            style={{ boxShadow: "3px 3px 5px 1px rgba(255,255,255,0.75)" }}
          >
            <input
              type="text"
              name="name"
              placeholder="Input Your Name"
              className="form-control mb-3"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="number"
              placeholder="Input Your Number Telephone"
              className="form-control mb-3"
              value={formData.number}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              id="message"
              cols="30"
              className="form-control mb-3"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button className="btn btn-primary">SEND</button>
          </form>
        </div>
        <div className="col-md-6">
          <h1 style={{ fontFamily: "Playfair Display, serif" }}>
            Additional Information
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id facilis
            cupiditate assumenda mollitia quo ducimus.
          </p>
          <ul className="list-unstyled">
            <li>Email: ahmadfauzi12346@gmail.com</li>
            <li>Phone: 081234567XXX</li>
            <li>Address: Jl. Jendral Sudirman, Jakarta</li>
          </ul>

          <div className="wrapper d-flex gap-3">
            <Link
              to={"https://www.instagram.com/aziiee22/"}
              target="_blank"
              className="btn btn-danger"
              data-bs-toggle="tooltip"
              data-bs-title="Instagram"
            >
              <i className="fa-brands fa-instagram fa-lg"></i>
            </Link>
            <Link
              to={"https://www.linkedin.com/in/ahmadfauzi1203/"}
              target="_blank"
              className="btn btn-info"
              data-bs-toggle="tooltip"
              data-bs-title="Linkedin"
            >
              <i className="fa-brands fa-linkedin fa-lg"></i>
            </Link>
            <Link
              to={"https://github.com/Ahmadfauzi1203"}
              target="_blank"
              className="btn btn-warning"
              data-bs-toggle="tooltip"
              data-bs-title="Github"
            >
              <i className="fa-brands fa-github fa-lg"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
