import { Year } from "@/src/entities/files/type";
import axios from "axios";

export const getDates = async (
  currentYear: number
): Promise<Year | undefined> => {
  try {
    const url = `http://localhost:8000/api/report/dates/${currentYear}`;
    return await axios.get(url).then((res) => res.data);
  } catch (error) {
    console.error(error);
  }
};
