import Star from "../assets/star.svg";
import { getAllMovies } from "../data/movies";
import { getImgUrl } from "../utils/cine-utility";

export default function MovieList() {
  const movies = getAllMovies();

  return (
    <div className="content">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {movies.map((movie) => (
          <figure
            key={movie.id}
            className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl"
          >
            <img className="w-full object-cover" src={movie.cover} alt="" />
            <figcaption className="pt-4">
              <h3 className="text-xl mb-1">{movie.title}</h3>
              <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
              <div className="flex items-center space-x-1 mb-5">
                <img src={Star} width="14" height="14" alt="" />
                <img src={Star} width="14" height="14" alt="" />
                <img src={Star} width="14" height="14" alt="" />
                <img src={Star} width="14" height="14" alt="" />
                <img src={Star} width="14" height="14" alt="" />
              </div>
              <a
                className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                href="#"
              >
                <img src={getImgUrl(movie.cover)} alt="" />
                <span>{movie.price} | Add to Cart</span>
              </a>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
