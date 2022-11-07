import { Formik, Field, Form, FormikProps } from "formik";

import { useAppDispatch, useAppSelector } from "@/customHooks/useApp";
import {
  setMoviesData,
  setListTotalPages,
  setCurrentPage,
  setSearchQuery,
  setEmptyResult,
} from "@/features/movieSlice";
import { setLoading } from "@/features/loadingSlice";

import SearchService from "@/services/searchService";

type ValueType = {
  searchValue: string;
};

const SearchForm = () => {
  const moviesData = useAppSelector((state) => state.movies);
  const dispatch = useAppDispatch();

  return (
    <div className="mt-[30px]">
      <Formik
        initialValues={{ searchValue: moviesData.searchQuery || "" }}
        onSubmit={async (value, action) => {
          if (value.searchValue) {
            dispatch(setLoading(true));
            return await SearchService.getSearchMovies(value.searchValue)
              .then((data) => {
                dispatch(setMoviesData(data.results));
                dispatch(setListTotalPages(data.total_pages));
                dispatch(setCurrentPage(data.page));
                dispatch(setSearchQuery(value.searchValue));
                if (!data.results.length) dispatch(setEmptyResult(true));
              })
              .catch((err) => console.log(err))
              .finally(() => dispatch(setLoading(false)));
          }

          return;
        }}
      >
        {(props: FormikProps<ValueType>) => (
          <Form className="relative">
            <Field
              name="searchValue"
              placeholder="Search for a movie..."
              className="w-full px-[20px] py-[10px] text-[18px] leading-[46px] rounded-[30px] h-[46px] text-[#333] bg-[#fff]"
            />
            <button
              type="submit"
              className="absolute h-full right-0 bg-[#17D0B2] rounded-[30px] px-[26px] py-[10px] font-[700] disabled:opacity-[0.5]"
              disabled={!Boolean(props.values.searchValue)}
            >
              Search
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SearchForm;
