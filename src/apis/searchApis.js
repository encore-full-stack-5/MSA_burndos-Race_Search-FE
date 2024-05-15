import axiosInstance from "./axiosInstance";

export const fetchSerachData = async (queryParams) => {
  const response = await axiosInstance.get("v1/search/total", {
    params: queryParams,
  });

  return response;
};
