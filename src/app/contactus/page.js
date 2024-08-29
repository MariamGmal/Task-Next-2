import React from "react";
import "./contactus.css";

const contactus = () => {
  return (
    <>
      <div className="mt-5 contan">
        <h2 className="ms-3 mt-2">Get In Touch</h2>
        <p className="ms-3 mt-2">
          Explor out <a>Help Docs </a> or{" "}
        </p>
        <p className="ms-3 mt-2 mb-5">Contact our team.</p>
        <br className="mb-5 "></br>

        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="What Can You Help With?"></textarea>
        </div>
        <button className="btn">send</button>
      </div>
    </>
  );
};

export default contactus;
