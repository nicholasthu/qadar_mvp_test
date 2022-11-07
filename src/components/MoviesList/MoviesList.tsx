import { useAppSelector } from "@/customHooks/useApp";

import MovieItem from "./MovieItem";
import Pagination from "../Pagination";

const MoviesList = () => {
  const moviesData = useAppSelector((state) => state.movies);

  return (
    <div className="container py-[20px]">
      {moviesData.movies.length === 0 ? (
        <h1 className="text-[30px] font-[700] text-center">
          {moviesData.isEmptyResult
            ? "There are no movies"
            : "Search for movies"}
        </h1>
      ) : (
        <>
          <div className="flex flex-wrap mx-[-10px]">
            {Boolean(moviesData.movies.length) &&
              moviesData.movies.map((item) => (
                <div className="w-1/2 px-[10px] py-[10px]" key={item.id}>
                  <MovieItem data={item} />
                </div>
              ))}
          </div>
          <div className="mt-[15px] flex justify-center">
            <Pagination totalPages={moviesData.totalPages} />
          </div>
        </>
      )}
    </div>
  );
};

export default MoviesList;
