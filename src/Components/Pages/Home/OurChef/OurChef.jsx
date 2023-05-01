import React from "react";
import { useLoaderData } from "react-router-dom";
import ChefCard from "./ChefCard";

const OurChef = () => {
  const chefs = useLoaderData();

  return (
    <div className="md:mx-10 mx-2">
      <h2 className="text-6xl my-10 text-center font-bold">Our Chefs</h2>

      <div className="grid grid-cols-3 gap-10 my-20">
        {chefs.map((chef) => (
          <ChefCard key={chef.id} chef={chef}></ChefCard>
        ))}
      </div>
    </div>
  );
};

export default OurChef;