import axios from "axios";
import MovieCard from "components/MovieCard/MovieCard";
import Pagination from "components/Pagination/Pagination";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movie";
import { BASE_URL } from "utils/requests";
export default function Listing() {
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(()=>{
    axios.get(`${BASE_URL}/movies?size=12&page=0`)
    .then(({data})=>{
      const data_class = data as MoviePage;
      setPageNumber(data_class.number);
    });
  },[]);
  
  return (
    <>
      {console.log(pageNumber)}
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
