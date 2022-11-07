import { Link } from "react-router-dom";

import { useAppSelector } from "@/customHooks/useApp";
import { SearchMovieDataType } from "@/types/searchResult";

import styles from "./MoviesList.module.scss";

type MovieItemType = {
  data: SearchMovieDataType;
};

const MovieItem = ({ data }: MovieItemType) => {
  const configData = useAppSelector((state) => state.config);

  return (
    <div className={styles["item-wrapper"]}>
      <div className="w-[94px] h-[140px] shrink-0">
        {Boolean(Object.keys(configData).length) && (
          <Link to={`/detail/${data.id}`}>
            <img
              src={`${configData.images.base_url}/${configData.images.poster_sizes[0]}/${data.poster_path}`}
              alt={data.title}
              className="h-full w-full"
            />
          </Link>
        )}
      </div>
      <div className="px-[10px] py-[15px] flex">
        <div className="my-auto">
          <Link to={`/detail/${data.id}`}>
            <h2 className="text-[19px] leading-[23px] font-[600]">
              {data.original_title}
            </h2>
          </Link>
          <h5 className="text-[16px] leading-[19px] text-[#999]">
            {data.release_date}
          </h5>
          <p className="text-[16px] leading-[19px] mt-[20px] text-ellipsis max-h-[38px] line-clamp-2">
            {data.overview}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
