import './App.css'
import MovieCard from './components/MovieCard';

function App() {

  return (
    <>
      <MovieCard movie={{title: "Just a movie", release_date: "12.12.1212", imageUrl:""}}/>
    </>
  );
}

export default App
