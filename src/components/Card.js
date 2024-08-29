import Link from "next/link";
import React from "react";

const card = ({ title, body, id }) => {
  return (
    <>
      <div className="col" key={id}>
        <div className="card h-100">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{body}</p>
            <Link className="bg-danger " href={`post/${id}`}>
              Details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default card;
