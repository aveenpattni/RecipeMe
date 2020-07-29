import axios from "axios";

export const searchRequest = async (parameters) => {
  await axios.get("/api/search", {
    params: {
      search: parameters.q,
      from: 0,
      to: 10
    }
  }).then(res => {
      console.log("✅", res);
    })
    .catch(err => {
      console.log("🔥", err);
    })
}