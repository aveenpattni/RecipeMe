import axios from "axios";

export const find = async (parameters) => {
  await axios.get("/api/find", {
    params: {
      find: "http://www.edamam.com/ontologies/edamam.owl#recipe_cdf0dd5a4dcead63be872e8e751fc023",
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