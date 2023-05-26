import locationRepository from "../repositories/locationRepository";
import { useLocationStore } from "../store/useLocationStore";

export default function useLocation() {
  const { location, setLocation } = useLocationStore();

  const handleSearchCity = async (city: string) => {
    try {
      const cities = await locationRepository.searchAddress(city);
      return cities;
    } catch (error) {
      console.error("Error retrieving location:", error);
    }
  };

  const handleChangeLocation = async (city: any) => {
    try {
      const cities = await locationRepository.getCities(city.properties);
      console.log(cities[0]);
      const cityBoundaries = await locationRepository.getCityBoundaries(
        city.properties
      );
      setLocation({
        coordinates: {
          latitude: city.geometry.coordinates[1],
          longitude: city.geometry.coordinates[0],
        },
        position: {
          housenumber: city.properties.housenumber,
          street: city.properties.street,
          city: city.properties.city,
        },
        city: {
          id: cities[0].id,
          code: city.properties.citycode,
          boundaries: cityBoundaries,
        },
      });
    } catch (error) {
      console.error("Error retrieving location:", error);
    }
  };

  const handleLocation = async () => {
    try {
      const coordinates = await locationRepository.getCoordinates();
      const position = await locationRepository.getPosition(coordinates);
      const cities = await locationRepository.getCities(position);
      const cityBoundaries = await locationRepository.getCityBoundaries(
        position
      );

      setLocation({
        coordinates,
        position,
        city: {
          id: cities[0].id,
          code: cityBoundaries.boundaries[0].COM,
          boundaries: cityBoundaries,
        },
      });
    } catch (error) {
      console.error("Error retrieving location:", error);
    }
  };

  return { location, handleSearchCity, handleLocation, handleChangeLocation };
}
