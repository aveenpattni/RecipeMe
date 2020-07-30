import axios from "axios";

export const searchRequest = async (parameters) => {
   // Filters include: ingredients#, 1 diet-label, 1 or more health label, cuisine type, meal type, dishType, cals, time, exluded food

  const res = await axios.get("/api/search", {
    params: {
      search: parameters.q,
      from: parameters.from || 0,
      to: parameters.to
    }
  });
  return res.data;
}