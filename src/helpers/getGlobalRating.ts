import { TRating } from "../types/entities/rating.spec";

const getGlobalRating = (ratings: TRating) => {
  
  const sum =
    ratings.pois?.education?.rating! +
    ratings.pois?.shop?.rating! +
    ratings.pois?.restaurant?.rating! +
    ratings.pois?.healthcare?.rating! +
    ratings.pois?.service?.rating!;

  return (sum / 5).toFixed(1);
};

export default getGlobalRating;
