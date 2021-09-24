import { Request, Response } from "express";
import GoogleAutoComplete from "../services/places";
import GoogleFindPlace from "../services/place";

const DEFAULT_SEARCH_SIZE = 5;
const DEFAULT_ERROR_RESPONSE = {
  message: "You must provide at least 5 characters",
};

const places = async (req: Request, res: Response) => {
  try {
    const { search } = req.query;
    if (!search || search.length < DEFAULT_SEARCH_SIZE)
      return res.status(404).json(DEFAULT_ERROR_RESPONSE);

    const places = await GoogleAutoComplete.getPlaces(search as String);
    return res.status(200).json(places);
  } catch (error) {
    console.log(error);
  }
};

const place = async (req: Request, res: Response) => {
  try {
    const { placeId } = req.params;
    if (!placeId) return res.status(404).json(DEFAULT_ERROR_RESPONSE);

    const places = await GoogleFindPlace.getPlace(placeId as String);
    return res.status(200).json(places);
  } catch (error) {
    console.log(error);
  }
};

export default { places, place };
