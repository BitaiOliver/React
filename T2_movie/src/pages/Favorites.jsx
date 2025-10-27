import "../css/Favorites.css"
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const {favorites, getLengthFavorites} = useMovieContext();

  if (getLengthFavorites() !== 0) {
    console.log(favorites)
    return (
      <div className="favorites" >
        <h2> Your Favorites </h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }
  
  return (
      <div className="favorites-empty">
        <h2> No favorites yet.</h2>
        <p> Start to add movies to favorites list. </p>
      </div>
    );
  
}

export default Favorites