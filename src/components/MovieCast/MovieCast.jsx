import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieCredits } from "../../services/api/api";
import styles from "./MovieCast.module.css"

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w200";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const data = await getMovieCredits(movieId);
        setCast(data.cast);
      } catch (err) {
        console.error(err)
        setError("Failed to load cast.");
      }
    };

    fetchCast();
  }, [movieId]);

  if (error) return <p>{error}</p>;
  if (!cast.length) return <p>No cast information available.</p>;

  return (
    <ul className={styles.castList}>
  {cast.map(({ id, name, character, profile_path }) => (
    <li key={id} className={styles.castItem}>
      {profile_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w200${profile_path}`}
          alt={name}
          className={styles.castImage}
        />
      ) : (
        <div className={styles.noImage}>No Image</div>
      )}
      <p className={styles.actorName}>{name}</p>
      <p className={styles.characterName}>as {character}</p>
    </li>
  ))}
</ul>
  );
};

export default MovieCast;