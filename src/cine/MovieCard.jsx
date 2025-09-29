import { useContext, useState } from "react";
import { getImgUrl } from "../utils/cine-utility";
import MoveDetailsModal from "./MovieDetailsModal";
import Rating from "./Rating";

import { toast } from "react-toastify";
import { MovieContext } from "../context";

export default function MovieCard({ movie }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const { cartData, setCartData } = useContext(MovieContext);

  const handleAddToCart = (e, movie) => {
    e.stopPropagation();
    const found = cartData.find((item) => {
      return item.id === movie.id;
    });
    if (!found) {
      setCartData([...cartData, movie]);

      toast.success(`Movie ${movie.title} Successfully`, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    } else {
      console.error(
        `The movie ${movie.title} has been added to the cart already`
      );
    }
  };

  const handleModalClose = () => {
    setSelectedMovie(null);
    setShowModal(false);
  };
  const handleMovieSelection = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  return (
    <>
      {showModal && (
        <MoveDetailsModal
          movie={selectedMovie}
          onClose={handleModalClose}
          onCartAdd={handleAddToCart}
        />
      )}
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <a href="#" onClick={() => handleMovieSelection(movie)}>
          <img
            className="w-full object-cover"
            src={getImgUrl(movie.cover)}
            alt={movie.title}
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating value={movie.rating} />
            </div>
            <a
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
              onClick={(e) => handleAddToCart(e, movie)}
            >
              <img src={null} alt="" />
              <span>${movie.price} | Add to Cart</span>
            </a>
          </figcaption>
        </a>
      </figure>
    </>
  );
}
