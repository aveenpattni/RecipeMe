import axios from "axios";

export const search = async () => {
  await axios.get("/api/search", {
    params: {
      search: "chicken",
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