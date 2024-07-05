import React from "react";

const Hero = () => {
  return (
    <section className="py-12">
      <h1 className="text-4xl font-bold text-center">
        Find your next <br /> dream job
      </h1>
      {/* <p className="text-center text-gray-600 mt-2">lorem</p> */}
      <form action="" className="flex gap-4 mt-4 mx-w-xl">
        <input
          type="search"
          className="border border-gray-400 w-full py-2 px-3 rounded-md"
          placeholder="Search phrase.."
        />
        <button className="bg-blue-600 text-white py-2 px-4 rounded-md">
          Search
        </button>
      </form>
    </section>
  );
};

export default Hero;
