import { useLoaderData, useParams } from "react-router-dom";
import {
  addToStoredReadList,
  addToStoredWishList,
} from "../../Utility/addToDb";

const BookDetails = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);

  const data = useLoaderData();

  const book = data.find((book) => book.bookId === id);

  const { bookId: curBookId, image } = book;

  const handleMarkAsRead = (id) => {
    addToStoredReadList(id);
  };

  const handleMarkAsWishList = (id) => {
    addToStoredWishList(id);
  };

  return (
    <div className="my-12">
      <h2>Book Details: {bookId}</h2>
      <img className="w-36" src={image}></img>
      <br />
      <button
        onClick={() => handleMarkAsRead(bookId)}
        className="btn btn-outline mr-4 btn-accent"
      >
        Read
      </button>
      <button
        onClick={() => handleMarkAsWishList(id)}
        className="btn btn-accent"
      >
        Add to WishList
      </button>
    </div>
  );
};

export default BookDetails;
