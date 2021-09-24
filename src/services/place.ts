import axios from "axios";
import utils from "../utils";

const BASE_URL = `https://maps.googleapis.com/maps/api/place/details/json`;
const API_KEY = process.env.GOOGLE_API_KEY;

const DEFAULT_PARAMS = {
  fields: "address_components,formatted_address,geometry",
  key: API_KEY,
};

const getPlace = async (placeId: String) => {
  const QUERY_PARAMS = { place_id: placeId, ...DEFAULT_PARAMS };
  const formatedParams = utils.formatParams(QUERY_PARAMS);
  const url = `${BASE_URL}?${formatedParams}`;
  const { data } = await axios.get(url);
  return data;
};

export default { getPlace };
