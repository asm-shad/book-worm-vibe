import React from "react";
import bannerImg from "../../assets/books.jpg";

function Banner() {
  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse md:p-12">
        <img src={bannerImg} className="max-w-sm rounded-lg shadow-2xl " />
        <div className="p-6">
          <h1 className="text-5xl font-bold">
            Books to freshen up your bookshelf
          </h1>
          <p className="py-6">
            "One glance at a book and you hear the voice of another person,
            perhaps someone dead for 1,000 years." — Carl Sagan
          </p>
          <button className="btn btn-primary">View The Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
