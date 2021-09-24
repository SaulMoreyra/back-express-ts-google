import axios from "axios";
import utils from "../utils";

const BASE_URL = `https://maps.googleapis.com/maps/api/place/autocomplete/json`;
const API_KEY = process.env.GOOGLE_API_KEY;

const DEFAULT_PARAMS = {
  types: "address",
  components: "country:mx", // ONLY PLACES FROM MEXICO
  key: API_KEY,
};

const getPlaces = async (query: String) => {
  const QUERY_PARAMS = { input: query, ...DEFAULT_PARAMS };
  const formatedParams = utils.formatParams(QUERY_PARAMS);
  const url = `${BASE_URL}?${formatedParams}`;
  const { data } = await axios.get(url);
  return data;
};

export default { getPlaces };
