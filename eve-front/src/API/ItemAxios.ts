import axios from "axios";
import { Item } from "@/types";

axios.defaults.baseURL = "http://localhost:9091"; //서버주소

axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";

axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

export const addItem = async (item: Item) => {
  try {
    const response = await axios.post("/eve-project/addItem", item);
    console.log(response.data);
  } catch (e) {
    console.error("[DEV] addItem error");
  }
};

export const getAllItem = async () => {
  try {
    const response = await axios.get("/eve-project/allItem");
    return response.data;
  } catch (e) {
    console.error("[DEV] getAllItem error");
  }
};

export const deleteItem = async (id: string) => {
  try {
    const response = await axios.delete(`/eve-project/${id}`);
    return response.data;
  } catch (e) {
    console.error("[DEV] deleteItem error");
  }
};
