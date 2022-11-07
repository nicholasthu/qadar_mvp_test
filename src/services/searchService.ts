import ApiService from "./apiService";
import { defaultParam } from "@/utils";

import { SearchResultDataType } from "@/types/searchResult";

const SearchService = {
  getSearchMovies: async (
    queryString: string,
    page: number | undefined = undefined
  ): Promise<SearchResultDataType> => {
    const params = { ...defaultParam };
    Object.assign(params, { query: queryString });
    if (page) Object.assign(params, { page: page });
    const searchParams = new URLSearchParams(params);
    return ApiService().get(`/search/movie?${searchParams.toString()}`);
  },
};

export default SearchService;
