import MovieCard from "../components/MovieCard";
import {useState} from "react";

function Home() {
  const movies = [
    { id: 1, title: "Just a movie", release_date: "11.11.1111", imageUrl: "" },
    { id: 2, title: "Second movie", release_date: "12.12.1212", imageUrl: "" },
    { id: 3, title: "Third movie", release_date: "10.10.1010", imageUrl: "" },
    { id: 4, title: "Forth movie", release_date: "23.08.2024", imageUrl: "" }
  ];

  const [searchQuery, setSearchQuery] = useState("");

  const handleSeach = (e) => {
    e.preventDefault();
    alert(searchQuery);
    setSearchQuery("");
  }


  return (
    <>
      <form className="search-form" onSubmit={handleSeach}>
        <input 
          className="seach-input" 
          type="text" 
          placeholder="Search movie..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} 
        />

        <button 
          className="search-btn" 
          type="submit"
        > 
          Search 
        </button>
      </form>

      <div className="movie-grid">
        {movies.map((movie) => (
          (movie.title.toLowerCase().startsWith(searchQuery)) &&
          (<MovieCard movie={movie} key={movie.id} />)
        ))}
      </div>
    </>
  );
}

export default Home