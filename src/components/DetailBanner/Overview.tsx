import { MovieDetaiType } from "@/types/movie";

type OverviewType = {
  detailData: MovieDetaiType | undefined;
};

const Overview = ({ detailData }: OverviewType) => {
  return (
    <div className="mt-[20px]">
      <p className="italic text-[19px] text-[#f3f3f3] font-[400]">
        {detailData?.tagline}
      </p>
      <div className="mt-[15px]">
        <h2 className="text-[30px] font-[700]">Overview</h2>
        <p className="text-[16px] pt-[10px]">{detailData?.overview}</p>
      </div>
    </div>
  );
};

export default Overview;
