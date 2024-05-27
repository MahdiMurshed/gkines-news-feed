import { API_URL } from "@/config/constants";

export const getPostsApiUrl = (offset: number, limit: number): string => {
  return `${API_URL}/posts?_start=${offset}&_limit=${limit}`;
};
