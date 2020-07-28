import axios from "axios";

export const search = async (paramaters) => {
  await axios.get("/api/search", {
    params: {
      search: paramaters.q,
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