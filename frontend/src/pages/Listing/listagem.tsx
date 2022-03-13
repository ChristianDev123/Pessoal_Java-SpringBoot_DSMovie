import axios from "axios";
import MovieCard from "components/MovieCard/MovieCard";
import Pagination from "components/Pagination/Pagination";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movie";
import { BASE_URL } from "utils/requests";
export default function Listing() {
  const [pageNumber, setPageNumber] = useState(0);
  const [page, setPage] = useState<MoviePage>({
      content: [],
      last: true,
      totalPages: 0,
      totalElements: 0,
      size: 12,
      number: 0,
      first: true,
      numberOfElements: 0,
      empty: true
  });

  useEffect(()=>{
    axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}$sort=title`)
    .then(({data})=>{
      const data_class = data as MoviePage;
      setPageNumber(data_class.number);
      setPage(data_class);
    });
  },[pageNumber]);

  return (
    <>
      <Pagination />
      <div className="container">
        <div className="row">
          {page.content.map((movie)=>{
            return(
              <div className="col-sm-6 col-lg-4 col-xl-3 mb-3" key={movie.id}> {/* quando a largura for pequena o card terá dois cards na página, e quando a largura da página for grande o terá 3 cards na tela */}
                <MovieCard film={movie}/>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
