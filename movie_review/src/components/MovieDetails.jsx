import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MovieContext } from "./MovieContext";
import StarRating from "./StarRating";

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { movieList, deleteMovie } = useContext(MovieContext);

  const movie = movieList.find((m) => m.id === Number(id));

  if (!movie) return <div className="container mt-4">Movie not found</div>;

  return (
    <div className="container">
  <div className="card shadow p-4 text-center">
    <h2>{movie.title}</h2>

    <div className="mb-3">
      <StarRating rating={movie.rating} />
    </div>

    <p className="lead">{movie.description}</p>

   <div className="mt-3 d-flex justify-content-center gap-2">

  <button
    type="button"
    className="btn btn-danger btn-sm px-3"
    onClick={() => {
      deleteMovie(movie.id);
      navigate("/");
    }}
  >
    Delete
  </button>

  <button
    type="button"
    className="btn btn-secondary btn-sm px-3"
    onClick={() => navigate("/")}
  >
    Back
  </button>

</div>
  </div>
</div>
  );
}

export default MovieDetails;