import { Year } from "@/src/entities/files/type";
import axios from "axios";

export const getLocalFiles: () => Promise<Year> = async () => {
  try {
    const today = new Date();
    const year = today.getFullYear();
    const url = `http://localhost:8000/api/report/dates/${year}`;
    return await axios.get(url).then((res) => res.data);
  } catch (error) {
    console.error(error);
  }
};
