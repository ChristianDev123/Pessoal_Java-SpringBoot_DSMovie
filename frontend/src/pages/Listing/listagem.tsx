import MovieCard from "components/MovieCard/MovieCard";
import Pagination from "components/Pagination/Pagination";
export default function Listing() {
  return (
    <>
      <Pagination />
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3"> {/* quando a largura for pequena o card terá dois cards na página, e quando a largura da página for grande o terá 3 cards na tela */}
            <MovieCard/>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3"> {/*mb = margin-bottom */}
            <MovieCard/>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3"> 
            <MovieCard/>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3"> 
            <MovieCard/>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3"> 
            <MovieCard/>
          </div>
        </div>
      </div>
    </>
  );
}
