import { TPoi } from "./poi.spec";
import { TSecurityData } from "./securityData.spec";

export type TRating = {
  pois?:
    | {
        shop?: {
          data: TPoi[] | undefined;
          rating: number | null;
        };
        education?: {
          data: TPoi[] | undefined;
          rating: number | null;
        };
        fuel?: {
          data: TPoi[] | undefined;
          rating: number | null;
        };
        healthcare?: {
          data: TPoi[] | undefined;
          rating: number | null;
        };
        historic?: {
          data: TPoi[] | undefined;
          rating: number | null;
        };
        service?: {
          data: TPoi[] | undefined;
          rating: number | null;
        };
        leisure?: {
          data: TPoi[] | undefined;
          rating: number | null;
        };
        restaurant?: {
          data: TPoi[] | undefined;
          rating: number | null;
        };
      }
    | undefined;
  security?: {
    data: TSecurityData[] | undefined;
    rating: number | null;
  }
  global?: number | null;
};
