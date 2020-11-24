import axios from "axios";

export const searchRequest = async (parameters) => {
   // Filters include: ingredients#, 1 diet-label, 1 or more health label, cuisine type, meal type, dishType, cals, time, exluded food

  const res = await axios.get("/api/search", {
    params: {
      search: parameters.q.replace("_", " "),
      from: parameters.from,
      to: parameters.to,
      // ingr: parameters.ingr === "10+" ? undefined : parameters.ingr,
      // calories: parameters.calories.replace(/\+/gi, ""),
      time: parameters.time.replace(/\+/gi, "")
    }
  });
  return res.data;
}