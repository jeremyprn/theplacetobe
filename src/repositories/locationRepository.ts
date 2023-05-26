import GetLocation from "react-native-get-location";
import {
  TCoordinates,
  TLocation,
  TPosition,
} from "../types/entities/location.spec";
import { API_URL } from "@env";

interface ILocation {
  getCoordinates: () => Promise<TCoordinates>;
  searchAddress: (address: string) => Promise<any>;
  getPosition: (coordinates: TCoordinates) => Promise<any>;
  getCities: (location: TPosition) => Promise<any>;
  getCityBoundaries: (position: TPosition) => Promise<any>;
}

const locationRepository: ILocation = {
  getCoordinates: async () => {
    const coordinates = await GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    });

    return coordinates;
  },
  searchAddress: async (address: string) => {
    try {
      const httpCall = await fetch(
        `https://api-adresse.data.gouv.fr/search/?q=${address}&limit=5&autocomplete=1`
      );
      const response = await httpCall.json();
      return response.features;
    } catch (error) {
      return { error: "Error: " + error };
    }
  },
  getPosition: async ({ longitude, latitude }: TCoordinates) => {
    try {
      const httpCall = await fetch(
        `https://api-adresse.data.gouv.fr/reverse/?lon=${longitude}&lat=${latitude}`
      );
      const response = await httpCall.json();
      const position = response.features[0].properties;
      return {
        city: position.city,
        street: position.street,
        housenumber: position.housenumber,
      };
    } catch (error) {
      return { error: "Error: " + error };
    }
  },

  getCities: async (location: TPosition) => {
    try {
      const httpCall = await fetch(
        `https://geodatamine.fr/boundaries/search?text=${location.city}`
      );
      const response = await httpCall.json();
      return response;
    } catch (error) {
      return { error: "Error: " + error };
    }
  },
  getCityBoundaries: async (position: TPosition) => {
    try {
      const httpCall = await fetch(`${API_URL}/city?name=${position.city}`);
      const response = await httpCall.json();

      return { boundaries: response };
    } catch (error) {
      return { error: "Error: " + error };
    }
  },
};

export default locationRepository;
