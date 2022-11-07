import ApiService from "./apiService";
import { defaultParam } from "../utils";

import { ConfigType } from "@/types/configuration";

const ConfigService = {
  getConfig: async (): Promise<ConfigType> => {
    const params = { ...defaultParam };
    const searchParams = new URLSearchParams(params);
    return ApiService().get(`/configuration?${searchParams.toString()}`);
  },
};

export default ConfigService;
