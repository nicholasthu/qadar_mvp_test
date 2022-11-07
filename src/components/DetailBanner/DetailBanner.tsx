import React, { useMemo } from "react";

import { useAppSelector } from "@/customHooks/useApp";
import { MovieDetaiType } from "@/types/movie";
import DetailInfo from "./DetailInfo";
import Overview from "./Overview";

type DetailBannerType = {
  detailData: MovieDetaiType | undefined;
};

const DetailBanner = ({ detailData }: DetailBannerType) => {
  const configData = useAppSelector((state) => state.config);

  const bannerImage = useMemo(() => {
    if (Boolean(Object.keys(configData).length))
      return `url('${configData.images.base_url}/${configData.images.backdrop_sizes[3]}/${detailData?.backdrop_path}')`;

    return "";
  }, [configData, detailData?.backdrop_path]);

  return (
    <div className="relative w-[100vw] h-[800px]">
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-cover z-[-1]"
        style={{
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), ${bannerImage}`,
        }}
      ></div>
      <div className="container h-full">
        <div className="py-[30px] h-full flex items-center">
          <div className="w-[350px] h-[450px] rounded-[12px] overflow-hidden mr-[30px] shrink-0">
            {Boolean(Object.keys(configData).length) && (
              <img
                src={`${configData.images.base_url}/${configData.images.poster_sizes[4]}/${detailData?.poster_path}`}
                alt={detailData?.title}
                className="h-full w-full"
              />
            )}
          </div>
          <div className={`${!bannerImage ? "text-[#000]" : "text-[#fff]"}`}>
            <h2 className="text-[35px] leading-[35px] font-[700]">
              {detailData?.original_title}{" "}
              <span className="font-[500]">
                ({detailData?.release_date.split("-")[0]})
              </span>
            </h2>
            <div className="">
              <h4>{detailData?.release_date}</h4>
            </div>
            <div className="flex">
              <DetailInfo
                type="list"
                data={detailData?.spoken_languages.map(
                  (item) => item.english_name
                )}
              />
              <DetailInfo
                type="list"
                data={detailData?.genres.map((item) => item.name)}
              />
              <DetailInfo data={detailData?.runtime.toString()} />
            </div>
            <Overview detailData={detailData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBanner;
