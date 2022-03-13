import MovieScore from "components/MovieScore/MovieScore";
import { Link } from "react-router-dom";
import { Movie } from "types/movie";

type Props = {
  film:Movie;
}

export default function MovieCard({film}:Props) {
  return (
    <div>
      <img
        className="dsmovie-movie-card-image"
        src={film.image}
        alt={film.title}
      />
      <div className="dsmovie-card-bottom-container">
        <h3>{film.title}</h3>
        <MovieScore />
        <Link to={`/form/${film.id}`}>
          <div className="btn btn-primary dsmovie-btn">Avaliar</div>
        </Link>
      </div>
    </div>
  );
}
