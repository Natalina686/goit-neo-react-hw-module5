
import PropTypes from "prop-types";
import MovieItem from "../MovieItem/MovieItem";
import styles from "./MovieList.module.css";



const MovieList = ({ movies }) => {
    

    return (
         <ul className={styles.movieGrid}>
      {movies.map(movie => (
        <li key={movie.id} className={styles.movieCard}>
            <MovieItem {...movie} />
        </li>
        
      ))}
    </ul>
    )
}

MovieList.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            poster_path: PropTypes.string,
        })
    ).isRequired,
};

export default MovieList