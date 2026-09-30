import { httpClient } from "../instance";
import { apiConstants } from "@/utils/constants";

const { USER_API_URL } = apiConstants;

export const getUser = async () => {
  try {
    const res = await httpClient.get(USER_API_URL);

    const users = res.data;

    if (!Array.isArray(users)) {
      throw new Error("API не вернул массив пользователей");
    }

    localStorage.setItem("usersList", JSON.stringify(users));

    return users;
  } catch (err) {
    console.error("getUser error:", err);
    throw err;
  }
};
