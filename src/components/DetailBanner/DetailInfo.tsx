import React from "react";

import styles from "./DetailBaner.module.scss";

type DetailInfoType = {
  type?: "list";
  data: string[] | string | undefined;
};

const DetailInfo = ({ data, type = undefined }: DetailInfoType) => {
  if (!data) return null;

  return (
    <div className={styles["detail-info"]}>
      {type === "list" && (data as string[]).length ? (
        <>
          {(data as string[]).map((item, index) => (
            <React.Fragment key={index}>
              <span>{item}</span>
              {index + 1 === data.length ? null : (
                <span className="px-[4px]">-</span>
              )}
            </React.Fragment>
          ))}
        </>
      ) : (
        <span>{data}m</span>
      )}
    </div>
  );
};

export default DetailInfo;
