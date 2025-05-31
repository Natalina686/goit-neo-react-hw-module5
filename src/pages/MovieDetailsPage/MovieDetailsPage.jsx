import { useParams, useLocation, Link, Outlet } from "react-router-dom";
import { useEffect, useState, Suspense } from "react";
import { getMovieDetails } from "../../services/api/api";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = location.state?.from || "/";

  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await getMovieDetails(movieId);
        setMovie(data);
      } catch (err) {
        console.error(err)
        setError("Failed to load movie details.");
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (error) return <p>{error}</p>;
  if (!movie) return <p>Loading...</p>;

  const { title, overview, vote_average, poster_path, genres } = movie;

  return (
    <div>
      <Link to={backLink}>← Go back</Link>
      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        {poster_path && (
          <img
            src={`${IMAGE_BASE_URL}${poster_path}`}
            alt={title}
            width="250"
          />
        )}
        <div>
          <h2>{title}</h2>
          <p>User Score: {Math.round(vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres.map(g => g.name).join(", ")}</p>
        </div>
      </div>

      <hr />

      <h3>Additional information</h3>
      <ul>
        <li>
          <Link to="cast" state={{ from: backLink }}>Cast</Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: backLink }}>Reviews</Link>
        </li>
      </ul>

      <Suspense fallback={<p>Loading subpage...</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;