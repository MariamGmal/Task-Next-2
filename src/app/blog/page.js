import React from "react";
import clientPromise from "@/lib/mongobd";
import Card from "../../components/Card";
import "./blogs.css";

//SSG  full route catch
const page = async () => {
  const client = await clientPromise;
  const db = client.db();
  const news = await db.collection("news").find({}).toArray();
  return (
    <>
      <h1 className="text-center">Blogs</h1>

      <div class="row row-cols-1 row-cols-md-1  g-4 w-75 mx-auto">
        {news.map((ele) => (
          <Card key={ele.id} id={ele.id} title={ele.title} body={ele.body} />
        ))}
      </div>
    </>
  );
};

export default page;
