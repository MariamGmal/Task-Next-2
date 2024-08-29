import React from "react";
import "./page.css";
import Link from "next/link";
const page = async ({ params }) => {
  const postJson = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await postJson.json();
  const { id } = params;
  const nextPost = parseInt(id) + 1;
  const prevPost = parseInt(id) - 1;
  return (
    <div className="divdetails">
      <div class="row row-cols-1 row-cols-md-3 g-4 ">
        <div className="col mx-auto mt-5 ">
          <div className="card h-100 colcont">
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.body}</p>
            </div>
            <Link
              className="bg-info text-dark mb-2 text-center w-75 mx-auto"
              href={`/post/${prevPost}`}>
              Previous Post
            </Link>
            <Link
              className="bg-success mb-2 text-dark text-center w-75 mx-auto"
              href={`/post/${nextPost}`}>
              Next Post
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default page;
