import { useEffect } from "react";
import poiRepository from "../repositories/poiRepository";
import { useLocationStore } from "../store/useLocationStore";
import { useRatingStore } from "../store/useRatingStore";
import securityDataRepository from "../repositories/securityDataRepository";
import {
  getFuelByPop,
  getHealthcareByPop,
  getRestaurantByPop,
  getShopByPop,
  getHistoricByPop,
  getLeisureByPop,
  getServiceByPop,
  getSecurityByPop,
  getEducationByPop,
} from "../helpers/getRatingByPop";

export default function usePoi() {
  const { location, population, setPopulation } = useLocationStore();
  const { rating, setRating } = useRatingStore();

  const getAllPoi = async () => {
    const [data, education, fuel, healthcare, historic, service] =
      await Promise.all([
        poiRepository.getTheme({
          cityId: location?.city.id!,
          theme: "shop_craft_office",
        }),
        poiRepository.getTheme({
          cityId: location?.city.id!,
          theme: "education",
        }),
        poiRepository.getTheme({
          cityId: location?.city.id!,
          theme: "fuel",
        }),
        poiRepository.getTheme({
          cityId: location?.city.id!,
          theme: "healthcare",
        }),
        poiRepository.getTheme({
          cityId: location?.city.id!,
          theme: "historic",
        }),
        poiRepository.getTheme({
          cityId: location?.city.id!,
          theme: "public_service",
        }),
      ]);

    const shop = data?.filter(
      (item: any) =>
        item.properties.type === "bakery" ||
        item.properties.type === "optician" ||
        item.properties.type === "bank" ||
        item.properties.type === "supermarket" ||
        item.properties.type === "car" ||
        item.properties.type === "estate_agent" ||
        item.properties.type === "clothes" ||
        item.properties.type === "shoes" ||
        item.properties.type === "kitchen" ||
        item.properties.type === "post_office" ||
        item.properties.type === "motorcycle" ||
        item.properties.type === "variety_store" ||
        item.properties.type === "vehicule_inspection" ||
        item.properties.type === "car_repair" ||
        item.properties.type === "doityourself" ||
        item.properties.type === "garden_centre" ||
        item.properties.type === "sports"
    );
    const leisure = data?.filter(
      (item: any) =>
        item.properties.type === "nightclub" ||
        item.properties.type === "cinema"
    );
    const restaurant = data?.filter(
      (item: any) =>
        item.properties.type === "restaurant" ||
        item.properties.type === "fast_food" ||
        item.properties.type === "cafe" ||
        item.properties.type === "ice_cream" ||
        item.properties.type === "brewey" ||
        item.properties.type === "food_court"
    );

    const pois = {
      shop: {
        data: shop,
        rating: getShopByPop(shop!, population!),
      },
      education: {
        data: education,
        rating: getEducationByPop(education!, population!),
      },
      fuel: {
        data: fuel,
        rating: getFuelByPop(fuel!, population!),
      },
      healthcare: {
        data: healthcare,
        rating: getHealthcareByPop(healthcare!, population!),
      },
      historic: {
        data: historic,
        rating: getHistoricByPop(historic!, population!),
      },
      service: {
        data: service,
        rating: getServiceByPop(service!, population!),
      },
      leisure: {
        data: leisure,
        rating: getLeisureByPop(leisure!, population!),
      },
      restaurant: {
        data: restaurant,
        rating: getRestaurantByPop(restaurant!, population!),
      },
    };
    setRating({ ...rating, pois });
  };

  const handleSecurityData = async () => {
    try {
      const security = await securityDataRepository.getSecurityData(
        location?.city.code!
      );
      const pop = security[security.length - 1].POP;

      setRating({
        ...rating,
        security: {
          data: security!,
          rating: getSecurityByPop(security!, pop!),
        },
      });
      setPopulation(pop);
    } catch (error) {
      console.error("Error retrieving securityData:", error);
    }
  };

  useEffect(() => {
    if (location?.city.code) {
      handleSecurityData();
    }
  }, [location]);

  useEffect(() => {
    if (location && population) {
      getAllPoi();
    }
  }, [location, population]);

  return { rating };
}
