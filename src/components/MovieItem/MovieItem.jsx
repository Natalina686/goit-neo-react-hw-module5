import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./MovieItem.module.css"

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const MovieItem = ({ id, title, poster_path }) => {
  const location = useLocation();

  return (
    
      <Link to={`/movies/${id}`} state={{ from: location }} className={styles.link}>
        {poster_path && (
          <img
            src={`${IMAGE_BASE_URL}${poster_path}`}
            alt={title}
            className={styles.image}
          />
        )}
        <p className={styles.title}>{title}</p>
      </Link>
    
  );
};

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string,
};

export default MovieItem;