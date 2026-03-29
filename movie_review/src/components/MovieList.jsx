import { useContext } from "react";
import { MovieContext } from "./MovieContext";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";

function MovieList() {
  const { movieList } = useContext(MovieContext);

  return (
   <div className="row">
  {movieList.map((movie) => (
    <div key={movie.id} className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <div className="card-body text-center">

          <h5 className="card-title">
            <Link
              to={`/movie/${movie.id}`}
              className="text-decoration-none"
            >
              {movie.title}
            </Link>
          </h5>

          <StarRating rating={movie.rating} />

        </div>
      </div>
    </div>
  ))}
</div>
  );
}

export default MovieList;