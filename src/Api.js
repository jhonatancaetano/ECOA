import react from "react";
import axios from "axios";

export default axios.create({
  baseURL: "http://172.105.154.34:3009/",
});
