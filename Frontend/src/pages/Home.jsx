import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1661211491652-cdbcf583eee7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fHRyYWZmaWMlMjBsaWdodHN8ZW58MHx8MHx8fDA%3D)] h-screen pt-8 flex justify-between flex-col w-full bg-red-400">
        <img className="w-[180px] ml-48" src="./Cab-Rent.svg"></img>
        <div className="px-4 py-4 bg-white pb-7">
          <h2 className="text-2xl font-bold">Get Started with Cab-Rent</h2>
          <Link
            to="/login"
            className="flex items-center justify-center w-full py-3 mt-5 text-white bg-black rounded-lg"
          >
            Continue{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
