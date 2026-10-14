export const safeParse = (value, fallback) => {
  if (!value || value === "undefined") {
    return fallback;
  }

  try {
    return JSON.parse(value);
  } catch (err) {
    console.log("Ошибка чтения localStorage:", err);
    return fallback;
  }
};
