export type TPosition = {
  housenumber?: number | null;
  street?: string | undefined;
  city: string | undefined;
};

export type TCoordinates = {
  latitude: number | null;
  longitude: number | null;
};

export type TCity = {
  id: number | undefined;
  code: string | undefined;
  boundaries: any | undefined;
  pop?: number | undefined;
};

export type TLocation = {
  coordinates: TCoordinates;
  position: TPosition;
  city: TCity;
};
