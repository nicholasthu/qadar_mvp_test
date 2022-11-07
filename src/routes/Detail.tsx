import { useCallback, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import MovieService from "@/services/movieService";
import { MovieDetaiType } from "@/types/movie";
import DetailBanner from "@/components/DetailBanner";

const Detail = () => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState<MovieDetaiType | undefined>();

  const fetchMovieDetail = useCallback(() => {
    if (id) {
      const fetchDataDetail = async (id: string) => {
        return await MovieService.getMovieDetail(id);
      };

      fetchDataDetail(id).then((data) => setDetailData(data));
    }
  }, [id]);

  useEffect(() => {
    fetchMovieDetail();
  }, [id, fetchMovieDetail]);

  // TODO: Style error page
  if (!id) return <div>Page not found</div>;

  return (
    <>
      <div className="container py-[20px]">
        <div>
          <Link to={"/"}>Home</Link>
          <span>
            {" "}
            {">"}
            {">"}{" "}
          </span>
          {Boolean(detailData) && <span>{detailData?.title}</span>}
        </div>
      </div>
      <DetailBanner detailData={detailData} />
    </>
  );
};

export default Detail;
