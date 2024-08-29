import React from "react";
import clientPromise from "@/lib/mongobd";
import Card from "../../components/Card";
export const revalidate = 5;
//ISR caching fetching data after 5 sec
const page = async () => {
  const client = await clientPromise;
  const db = client.db();
  const news = await db.collection("news").find({}).toArray();
  return (
    <>
      <h1 className=" text-center">News</h1>

      <div class="row row-cols-1 row-cols-md-3 g-4">
        {news.map((ele) => (
          <Card key={ele.id} id={ele.id} title={ele.title} body={ele.body} />
        ))}
      </div>
    </>
  );
};

export default page;
