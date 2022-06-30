import axios from "axios";
import { Item } from "@/types";

export const addItem = async (item: Item) => {
  try {
    const response = await axios.post(
      "http://localhost:9091/eve-project/addItem",
      item
    );
    console.log(response.data);
  } catch (e) {
    console.error("[DEV] addItem 에러");
  }
};
