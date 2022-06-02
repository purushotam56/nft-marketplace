import axios from "@/api/axios";
import { FilterData } from "@/types/filters";

export const getSidebarDetails = async (): Promise<FilterData> => {
  const response = await axios.get("/aggregate");
  return response.data;
};
