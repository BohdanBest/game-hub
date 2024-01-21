import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "14ba973f2e794d6aae80692fbd0861c9",
  },
});
