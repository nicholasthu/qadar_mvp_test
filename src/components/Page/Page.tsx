import { useCallback, useEffect } from "react";

import { useAppDispatch } from "@/customHooks/useApp";
import { getConfig } from "@/features/configSlice";
import ConfigService from "@/services/configService";

type PageType = {
  children: React.ReactNode;
};

const Page = ({ children }: PageType) => {
  const dispatch = useAppDispatch();

  const fetchDataConfig = useCallback(() => {
    const fetchConfig = async () => {
      return ConfigService.getConfig();
    };

    fetchConfig().then((data) => dispatch(getConfig(data)));
  }, [dispatch]);

  useEffect(() => {
    fetchDataConfig();
  }, [fetchDataConfig]);

  return <div>{children}</div>;
};

export default Page;
