import { useState, useEffect } from "react";
import {getTrendingMovies} from "../../services/api/api";
import MovieList from "../../components/MovieListTemp/MovieListTemp";

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTrendingMovies = async () => {
            setLoading(true);
            try {
                const data = await getTrendingMovies();
                setMovies(data.results);
            } catch (err) {
                console.error(err);
                setError("Something is wrong...");
            } finally {
                setLoading(false);
            }
        }

        fetchTrendingMovies();
    }, []);
    
    return (
        <div>
            <h1>Trending today</h1>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {movies.length > 0 && <MovieList movies={movies} />}
        </div>
    )
}



export default HomePage;