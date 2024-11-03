import React from "react";
import { Link } from "react-router-dom";

function Book({ book }) {
  const {
    bookId,
    image,
    bookName,
    author,
    tags,
    category,
    rating,
    totalPages,
  } = book;
  return (
    <Link to={`/books/${bookId}`}>
      <div className="card bg-base-100 shadow-xl p-6">
        <figure className="bg-gray-400 rounded-2xl">
          <img src={image} className="h-[166px] py-8" alt={bookName} />
        </figure>
        <div className="card-body">
          <div className="flex justify-center gap-4 mb-2">
            {tags.map((tag, idx) => (
              <button
                key={idx}
                className="btn btn-xs bg-green-100 text-green-800"
              >
                {tag}
              </button>
            ))}
          </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>By: {author}</p>
          <div className="border-t border-dashed my-4"></div>
          <div className="card-actions justify-between items-center">
            <div className="badge badge-outline">{category}</div>
            <div>{rating}</div>
            <div>{totalPages}</div>
            <div className="rating">
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Book;
