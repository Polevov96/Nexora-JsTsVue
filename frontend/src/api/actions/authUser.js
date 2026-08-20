import { httpClient } from "../instance";
import { apiConstants } from "@/utils/constants";

const { USER_API_URL } = apiConstants;

export const getUser = async () => {
  console.log("GetUser");

  try {
    const res = await httpClient.get(USER_API_URL);

    const users = res.data.users;

    if (!Array.isArray(users)) {
      throw new Error("API не вернул массив пользователей");
    }

    localStorage.setItem("usersList", JSON.stringify(users));

    return users;
  } catch (err) {
    console.error("getUser error:", err);
    console.error("message:", err.message);
    console.error("response:", err.response);
    console.log("USER_API_URL:", USER_API_URL);
    console.log("baseURL:", httpClient.defaults.baseURL);
    throw err;
  }
};
