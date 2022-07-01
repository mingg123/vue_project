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
    console.error("[DEV] addItem error");
  }
};

export const getAllItem = async () => {
  try {
    const response = await axios.get(
      "http://localhost:9091/eve-project/allItem"
    );
    return response.data;
  } catch (e) {
    console.error("[DEV] getAllItem error");
  }
};

export const deleteItem = async (id: string) => {
  try {
    const response = await axios.delete(
      `http://localhost:9091/eve-project/${id}`
    );
    // console.log(response.data);
    return response.data;
  } catch (e) {
    console.error("[DEV] deleteItem error");
  }
};
