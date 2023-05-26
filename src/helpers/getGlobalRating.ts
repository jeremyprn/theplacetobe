import { TRating } from "../types/entities/rating.spec";

const getGlobalRating = (ratings: TRating[]) => {
  const sum = ratings.reduce(
    (acc, rating) =>
      acc +
      rating.pois?.education?.data?.length! +
      rating.pois?.shop?.data?.length! +
      rating.pois?.fuel?.data?.length! +
      rating.pois?.healthcare?.data?.length! +
      rating.pois?.historic?.data?.length!,
    0
  );
  return sum / ratings.length;
};

export default getGlobalRating;
