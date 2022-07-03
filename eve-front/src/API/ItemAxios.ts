import axios from "axios";
import { Item } from "@/types";
import { baseUrl } from "@/components/utils/apiUtil";

axios.defaults.baseURL = baseUrl;
axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

const eveAxios = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json;charset=utf-8",
    "Access-Control-Allow-Origin": "*",
  },
});

export const addItem = async (item: Item) => {
  try {
    const response = await eveAxios.post("/eve-project/addItem", item);
    // console.log(response.data);
  } catch (e) {
    console.error("[DEV] addItem error");
  }
};

export const getAllItem = async (): Promise<Item[]> => {
  let newItems;
  try {
    const response = await axios.get("/eve-project/allItem");
    if (response) {
      newItems = response.data;
    }
  } catch (e) {
    console.error("[DEV] getAllItem error");
  }
  return newItems;
};

export const deleteItem = async (id: string): Promise<Item[]> => {
  let newItems;
  try {
    const response = await axios.delete(`/eve-project/${id}`);
    if (response) {
      newItems = response.data;
    }
  } catch (e) {
    console.error("[DEV] deleteItem error");
  }
  return newItems;
};
