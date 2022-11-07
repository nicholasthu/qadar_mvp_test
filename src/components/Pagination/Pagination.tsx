import { useCallback } from "react";
import ReactPaginate from "react-paginate";

import SearchService from "@/services/searchService";
import { useAppDispatch, useAppSelector } from "@/customHooks/useApp";
import {
  setMoviesData,
  setListTotalPages,
  setCurrentPage,
} from "@/features/movieSlice";
import { setLoading } from "@/features/loadingSlice";

type PaginationType = {
  totalPages: number;
};

const Pagination = ({ totalPages }: PaginationType) => {
  const moviesData = useAppSelector((state) => state.movies);
  const dispatch = useAppDispatch();

  const handlePageClick = useCallback(
    async (selectedPage: number) => {
      dispatch(setLoading(true));
      if (moviesData.searchQuery)
        return await SearchService.getSearchMovies(
          moviesData.searchQuery,
          selectedPage
        )
          .then((data) => {
            dispatch(setMoviesData(data.results));
            dispatch(setListTotalPages(data.total_pages));
            dispatch(setCurrentPage(data.page));
          })
          .catch((err) => console.log(err))
          .finally(() => dispatch(setLoading(false)));

      return;
    },
    [moviesData, dispatch]
  );
  return (
    <div>
      <ReactPaginate
        initialPage={moviesData.currentPage - 1}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(data) => handlePageClick(data.selected + 1)}
        pageRangeDisplayed={10}
        pageCount={totalPages}
        previousLabel="<"
        renderOnZeroPageCount={() => null}
        pageClassName="px-[10px] py-[5px] text-[15px] font-[500]"
        containerClassName="flex mx-[10px] items-center"
        activeClassName="border-[1px] border-solid border-[#333]"
        previousClassName="pr-[15px] font-[600]"
        nextClassName="pl-[15px] font-[600]"
      />
    </div>
  );
};

export default Pagination;
