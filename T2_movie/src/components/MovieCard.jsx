function MovieCard({movie}) {

  function onFavClick() {
    alert("Favorite cliclek");
  }
    return (
      <>
        <div className="movie-card">
          <div className="movie-poster">
            <img src={movie.imageUrl} alt={movie.title} />
            <div className="movie-overlay">
              <button className="favorite-btn" onClick={onFavClick}>
                ♡
              </button>
            </div>
          </div>
        </div>
        <div className="movie-info">
          <h3>{movie.title}</h3>
          <p>{movie.release_date}</p>
        </div>
      </>
    );
}

export default MovieCard