import axios from "axios";

const searchApi = axios.create({
  baseURL: "https://api.mapbox.com/geocoding/v5/mapbox.places",
  params: {
    limit: 5,
    language: "es",
    access_token:
      "pk.eyJ1IjoidGVzbGF2YXJnYXMiLCJhIjoiY2wyejhkOG9iMWNsOTNqb2JiZnVmeDVxbCJ9.YbtklYNq8ncWREO-RDYcMw",
  },
});

export default searchApi;
