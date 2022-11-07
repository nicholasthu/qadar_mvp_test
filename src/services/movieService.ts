import ApiService from "./apiService";

import { MovieDetaiType } from "@/types/movie";
import { defaultParam } from "@/utils";

const MovieService = {
  getMovieDetail: async (id: string): Promise<MovieDetaiType> => {
    const params = { ...defaultParam };
    const searchParams = new URLSearchParams(params);
    return ApiService().get(`/movie/${id}?${searchParams.toString()}`);
  },
};

export default MovieService;
